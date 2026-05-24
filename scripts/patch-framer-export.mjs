import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const root = join(import.meta.dirname, "..")
const framerDir = join(root, "framer")
const textOpacityPath = join(framerDir, "text-opacity-letters.jsx")
const testimonialsPath = join(framerDir, "testimonials.jsx")
const faqPath = join(framerDir, "faq.jsx")
const framerHomePath = join(root, "components/framer/framer-home.tsx")

function buildFramerHome({ standaloneTestimonials, standaloneFaq }) {
  const framerImports = [
    'import HomedeskFramer from "@/framer/homedesk"',
    'import FooterFramer from "@/framer/footer"',
  ]
  const componentLines = [
    "const Homedesk = HomedeskFramer.Responsive as FramerComponent",
    "const Footer = FooterFramer.Responsive as FramerComponent",
  ]
  const sectionLines = ['        <Homedesk style={{ width: "100%" }} />']

  if (standaloneTestimonials) {
    framerImports.push('import TestimonialsFramer from "@/framer/testimonials"')
    componentLines.splice(
      1,
      0,
      "const Testimonials = TestimonialsFramer.Responsive as FramerComponent"
    )
    sectionLines.push('        <Testimonials style={{ width: "100%" }} />')
  }

  if (standaloneFaq) {
    framerImports.push('import FaqFramer from "@/framer/faq"')
    componentLines.splice(
      standaloneTestimonials ? 2 : 1,
      0,
      "const Faq = FaqFramer.Responsive as FramerComponent"
    )
    sectionLines.push('        <Faq style={{ width: "100%" }} />')
  }

  sectionLines.push("        <CtaPhotoScrollDriver />")

  return `"use client"

import type * as React from "react"

import CtaPhotoScrollDriver from "@/components/framer/cta-photo-scroll-driver"
import Navbar from "@/components/layout/Navbar"
${framerImports.join("\n")}

type FramerComponent = React.ComponentType<Record<string, unknown>>

${componentLines.join("\n")}

const FramerHome: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        className="framer-home-root min-h-dvh"
        style={{ backgroundColor: "var(--unframer-bg-dark, rgb(10, 10, 12))" }}
      >
${sectionLines.join("\n")}
      </div>
      <div className="framer-footer-root">
        <Footer style={{ width: "100%" }} />
      </div>
    </>
  )
}

export default FramerHome
`
}

const homedeskPath = join(framerDir, "homedesk.jsx")
const homedeskSource = existsSync(homedeskPath)
  ? readFileSync(homedeskPath, "utf8")
  : ""

const homedeskEmbedsTestimonials = homedeskSource.includes("TestimonialsFonts")
const homedeskEmbedsFaq =
  homedeskSource.includes("FAQFonts") ||
  homedeskSource.includes('displayName = "FAQ"')

const useStandaloneTestimonials =
  existsSync(testimonialsPath) && !homedeskEmbedsTestimonials
const useStandaloneFaq = existsSync(faqPath) && !homedeskEmbedsFaq

const nextFramerHome = buildFramerHome({
  standaloneTestimonials: useStandaloneTestimonials,
  standaloneFaq: useStandaloneFaq,
})

if (readFileSync(framerHomePath, "utf8") !== nextFramerHome) {
  writeFileSync(framerHomePath, nextFramerHome)
  const parts = []
  if (useStandaloneTestimonials) parts.push("Testimonials")
  if (useStandaloneFaq) parts.push("FAQ")
  console.log(
    parts.length
      ? `Wired standalone ${parts.join(" + ")} into framer-home.tsx`
      : "Using sections embedded in homedesk only"
  )
}

if (existsSync(textOpacityPath)) {
  let source = readFileSync(textOpacityPath, "utf8")

  if (!source.includes('fontFamily = "Manrope"')) {
    source = source.replace(
      /const \{\s*text,\s*duration,\s*easing,\s*fontSize,\s*lineHeight,\s*letterSpacing,\s*paragraphAlign,\s*transitionStartIndex,\s*fontFamily,\s*fontWeight,\s*\} = props;/,
      `const {
\t\ttext = "Hello Text",
\t\tduration = 0.3,
\t\teasing = "easeInOut",
\t\tfontSize = 20,
\t\tlineHeight = 32,
\t\tletterSpacing = 0,
\t\tparagraphAlign = "flex-start",
\t\ttransitionStartIndex = 0,
\t\tfontFamily = "Manrope",
\t\tfontWeight = "400",
\t} = props;`
    )
    writeFileSync(textOpacityPath, source)
    console.log("Patched text-opacity-letters.jsx with default props")
  }
}

if (existsSync(homedeskPath)) {
  let homedesk = readFileSync(homedeskPath, "utf8")
  let patched = false

  const ctaBlockStart = homedesk.indexOf('data-framer-name={"Content"}')
  const ctaBlockEnd = homedesk.indexOf('FramerWlcRGePMM.displayName = "CTA 1"')
  const ctaBlock =
    ctaBlockStart !== -1 && ctaBlockEnd !== -1
      ? homedesk.slice(ctaBlockStart, ctaBlockEnd)
      : ""

  // CTA 1: bidirectional scroll — onScrollTarget + ref fallbacks
  if (
    ctaBlock.includes("framer-jq8wed") &&
    !homedesk.includes("kbcJGRasqResolved")
  ) {
    homedesk = homedesk.replace(
      /WS1ryfCl2: WS1ryfCl22,\s*\n\t\t\.\.\.restProps\s*\n\t\} = getProps6\(props\);/,
      `WS1ryfCl2: WS1ryfCl22,
		...restProps
	} = getProps6(props);
	const ctaScroll1Ref = React8.useRef(null);
	const ctaScroll2Ref = React8.useRef(null);
	const ctaScroll3Ref = React8.useRef(null);
	const ctaScroll4Ref = React8.useRef(null);
	const kbcJGRasqResolved = kbcJGRasq2 ?? ctaScroll1Ref;
	const VYIbND2bOResolved = VYIbND2bO2 ?? ctaScroll2Ref;
	const ZMtTHm0_HResolved = ZMtTHm0_H2 ?? ctaScroll3Ref;
	const WS1ryfCl2Resolved = WS1ryfCl22 ?? ctaScroll4Ref;`
    )

    patched = true
    console.log("Patched CTA 1 scroll ref fallbacks")
  }

  // CTA 1 photos: onInView → onScrollTarget (bidirectional spread/converge)
  if (ctaBlock.includes('__framer__transformTrigger={"onInView"}')) {
    const before = homedesk.slice(0, ctaBlockStart)
    const cta = homedesk.slice(ctaBlockStart, ctaBlockEnd)
    const after = homedesk.slice(ctaBlockEnd)

    let nextCta = cta.replaceAll(
      '__framer__transformTrigger={"onInView"}',
      '__framer__transformTrigger={"onScrollTarget"}'
    )

    if (!nextCta.includes("__framer__transformViewportThreshold={0}")) {
      nextCta = nextCta.replaceAll(
        '__framer__transformTrigger={"onScrollTarget"}',
        '__framer__transformTrigger={"onScrollTarget"}\n\t\t\t\t\t\t\t\t__framer__transformViewportThreshold={0}'
      )
    }

    const photoRefMap = [
      ["Picture 4", "kbcJGRasqResolved"],
      ["Picture 3", "VYIbND2bOResolved"],
      ["Picture 2", "ZMtTHm0_HResolved"],
      ["Picture 1", "WS1ryfCl2Resolved"],
    ]

    for (const [photoName, refName] of photoRefMap) {
      const marker = `data-framer-name={"${photoName}"}`
      const idx = nextCta.indexOf(marker)
      if (idx === -1) continue
      const chunk = nextCta.slice(0, idx)
      const lastTarget = chunk.lastIndexOf("\t\t\t\t\t\t\t\t\t{")
      if (lastTarget === -1) continue
      const targetSlice = nextCta.slice(lastTarget, idx)
      if (targetSlice.includes("ref:")) continue
      nextCta =
        nextCta.slice(0, lastTarget) +
        `\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tref: ${refName},\n` +
        nextCta.slice(lastTarget + "\t\t\t\t\t\t\t\t\t{".length)
    }

    homedesk = before + nextCta + after
    patched = true
    console.log("Patched CTA 1 photos to onScrollTarget")
  }

  // homedesk: page scroll markers across CTA zone + wire into CTA 1
  if (
    homedesk.includes('Framerc9NNg58TT.displayName = "homedesk"') &&
    !homedesk.includes("homedeskScroll1Ref")
  ) {
    homedesk = homedesk.replace(
      /const router = useRouter2\(\);\s*\n\treturn \(/,
      `const router = useRouter2();
\tconst homedeskScroll1Ref = React12.useRef(null);
\tconst homedeskScroll2Ref = React12.useRef(null);
\tconst homedeskScroll3Ref = React12.useRef(null);
\tconst homedeskScroll4Ref = React12.useRef(null);
\treturn (`
    )

    homedesk = homedesk.replace(
      /(\t\t\t\t\t>\s*\n)(\t\t\t\t\t\t<RichText6\s*\n\t\t\t\t\t\t\t__fromCanvasComponent=\{true\}\s*\n\t\t\t\t\t\t\tclassName=\{"framer-a8pi5u"\})/,
      `$1\t\t\t\t\t\t<div
\t\t\t\t\t\t\tref={homedeskScroll1Ref}
\t\t\t\t\t\t\taria-hidden={true}
\t\t\t\t\t\t\tdata-framer-scroll-marker={"cta-photo-4"}
\t\t\t\t\t\t\tstyle={{
\t\t\t\t\t\t\t\tposition: "absolute",
\t\t\t\t\t\t\t\ttop: 820,
\t\t\t\t\t\t\t\tleft: 0,
\t\t\t\t\t\t\t\twidth: 1,
\t\t\t\t\t\t\t\theight: 120,
\t\t\t\t\t\t\t\tpointerEvents: "none",
\t\t\t\t\t\t\t}}
\t\t\t\t\t\t/>
\t\t\t\t\t\t<div
\t\t\t\t\t\t\tref={homedeskScroll2Ref}
\t\t\t\t\t\t\taria-hidden={true}
\t\t\t\t\t\t\tdata-framer-scroll-marker={"cta-photo-3"}
\t\t\t\t\t\t\tstyle={{
\t\t\t\t\t\t\t\tposition: "absolute",
\t\t\t\t\t\t\t\ttop: 960,
\t\t\t\t\t\t\t\tleft: 0,
\t\t\t\t\t\t\t\twidth: 1,
\t\t\t\t\t\t\t\theight: 120,
\t\t\t\t\t\t\t\tpointerEvents: "none",
\t\t\t\t\t\t\t}}
\t\t\t\t\t\t/>
\t\t\t\t\t\t<div
\t\t\t\t\t\t\tref={homedeskScroll3Ref}
\t\t\t\t\t\t\taria-hidden={true}
\t\t\t\t\t\t\tdata-framer-scroll-marker={"cta-photo-2"}
\t\t\t\t\t\t\tstyle={{
\t\t\t\t\t\t\t\tposition: "absolute",
\t\t\t\t\t\t\t\ttop: 1100,
\t\t\t\t\t\t\t\tleft: 0,
\t\t\t\t\t\t\t\twidth: 1,
\t\t\t\t\t\t\t\theight: 120,
\t\t\t\t\t\t\t\tpointerEvents: "none",
\t\t\t\t\t\t\t}}
\t\t\t\t\t\t/>
\t\t\t\t\t\t<div
\t\t\t\t\t\t\tref={homedeskScroll4Ref}
\t\t\t\t\t\t\taria-hidden={true}
\t\t\t\t\t\t\tdata-framer-scroll-marker={"cta-photo-1"}
\t\t\t\t\t\t\tstyle={{
\t\t\t\t\t\t\t\tposition: "absolute",
\t\t\t\t\t\t\t\ttop: 1240,
\t\t\t\t\t\t\t\tleft: 0,
\t\t\t\t\t\t\t\twidth: 1,
\t\t\t\t\t\t\t\theight: 120,
\t\t\t\t\t\t\t\tpointerEvents: "none",
\t\t\t\t\t\t\t}}
\t\t\t\t\t\t/>
$2`
    )

    homedesk = homedesk.replace(
      /(_jsx15\(stdin_default8, \{\s*\n\t\t\t\t\t\t\t\t\theight: "100%",\s*\n\t\t\t\t\t\t\t\t\tid: "KaWx87aLP",\s*\n\t\t\t\t\t\t\t\t\tlayoutId: "KaWx87aLP",)(?!\s*\n\t\t\t\t\t\t\t\t\tscrollSection:)/,
      `$1
\t\t\t\t\t\t\t\t\tscrollSection: homedeskScroll1Ref,
\t\t\t\t\t\t\t\t\tscrollSection2: homedeskScroll2Ref,
\t\t\t\t\t\t\t\t\tscrollSection3: homedeskScroll3Ref,
\t\t\t\t\t\t\t\t\tscrollSection4: homedeskScroll4Ref,`
    )

    patched = true
    console.log("Patched homedesk CTA scroll markers")
  }

  if (patched) {
    writeFileSync(homedeskPath, homedesk)
  }
}

// Remove "Built in Framer" badge from footer
const footerPath = join(framerDir, "footer.jsx")
if (existsSync(footerPath)) {
  let footer = readFileSync(footerPath, "utf8")
  const builtInMarker = 'href={"https://framer.link/yulia95"}'
  if (footer.includes(builtInMarker)) {
    // Find the opening <Link href={"https://framer.link/yulia95"} and its closing </Link>
    const linkStart = footer.indexOf(
      `\t\t\t\t\t\t\t<Link\n\t\t\t\t\t\t\t\thref={"https://framer.link/yulia95"}`
    )
    if (linkStart !== -1) {
      // Find the closing </Link> after this point
      const closingTag = "</Link>"
      const linkEnd = footer.indexOf(closingTag, linkStart) + closingTag.length
      footer = footer.slice(0, linkStart) + footer.slice(linkEnd)
      writeFileSync(footerPath, footer)
      console.log("Removed 'Built in Framer' badge from footer.jsx")
    }
  }

  // Show Terms/Privacy links on phone breakpoint (Framer hides them by default)
  const hiddenMobileLinks = `if (baseVariant === "IhQrs_jAp") return false`
  if (footer.includes(hiddenMobileLinks)) {
    footer = footer.replace(
      /const isDisplayed2 = \(\) => \{\s*if \(baseVariant === "IhQrs_jAp"\) return false\s*return true\s*\}/,
      "const isDisplayed2 = () => {\n    return true\n  }"
    )
    writeFileSync(footerPath, footer)
    console.log("Enabled footer legal links on phone breakpoint")
  }
}

// Fix wrong social icons in sidebar (designer's accounts → Bibotecture's)
const sidebarChunkPath = join(framerDir, "chunks", "chunk-FVFRZDEY.js")
if (existsSync(sidebarChunkPath)) {
  let sidebarChunk = readFileSync(sidebarChunkPath, "utf8")
  let sidebarPatched = false

  const replacements = [
    // X icon: dribbble → Twitter/X
    ["alq6TIKEUSIWzl6n6ex4XmA1M.svg", "06qdfvYq5fQXbsqScdWfPjZEQWM.svg"],
    ["dribbble icon", "x icon"],
    // GitHub icon: Behance → GitHub
    ["vsmgVuXmx3V6pFoLAVWxjn5KwI.svg", "UYYFE6nlSc0lHCzZi7aCIsnSWw4.svg"],
    ["Behance icon", "github icon"],
    // LinkedIn icon: wrong icon → correct
    ["OdBGJGQVnXO33lGgkcWIwUfcWk.svg", "t4ytQTVFZqFy4hQN3ATkrOaveD8.svg"],
    // LinkedIn URL: designer's profile → Bibotecture company
    [
      "https://www.linkedin.com/in/yuliia-tsyhanenko-220b9b23b/",
      "https://www.linkedin.com/company/105943730",
    ],
  ]

  for (const [from, to] of replacements) {
    if (sidebarChunk.includes(from)) {
      sidebarChunk = sidebarChunk.replaceAll(from, to)
      sidebarPatched = true
    }
  }

  if (sidebarPatched) {
    writeFileSync(sidebarChunkPath, sidebarChunk)
    console.log("Patched sidebar social icons (icons + links)")
  }
}
