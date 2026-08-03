import Image from "next/image"
import * as React from "react"

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3.5c.9 5.2 2.8 7.1 8 8-5.2.9-7.1 2.8-8 8-.9-5.2-2.8-7.1-8-8 5.2-.9 7.1-2.8 8-8Z" />
    <path d="M23 16.5c.5 3 1.7 4.2 4.8 4.8-3.1.5-4.3 1.7-4.8 4.8-.6-3.1-1.8-4.3-4.8-4.8 3-.6 4.2-1.8 4.8-4.8Z" />
    <path d="M6 22.5c.3 1.8 1 2.5 2.8 2.8-1.8.3-2.5 1-2.8 2.8-.3-1.8-1-2.5-2.8-2.8 1.8-.3 2.5-1 2.8-2.8Z" />
  </svg>
)

const CoachLogo: React.FC = () => (
  <span className="flex h-[34px] w-[34px] items-center justify-center overflow-hidden bg-white">
    <Image
      src="/images/chatcoach/ChatCoachLogo.png"
      alt=""
      width={28}
      height={28}
      className="h-[28px] w-[28px] object-contain"
    />
  </span>
)

const CopyIcon: React.FC = () => (
  <svg
    viewBox="0 0 32 32"
    className="h-[32px] w-[32px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <rect x="10" y="10" width="17" height="17" rx="2" />
    <path d="M22 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h2" />
  </svg>
)

const coachOptions = [
  {
    name: "ChatCoach",
    detail: "General EQ & communication coaching",
    use: "General – use for everyday conversations",
    selected: true,
    avatar: null,
    avatarPosition: "center",
  },
  {
    name: "Chris Voss",
    detail: "Negotiation & tactical empathy",
    use: "Best for sales & negotiation",
    selected: false,
    avatar: "/images/chatcoach/chris-voss.jpg",
    avatarPosition: "50% 22%",
  },
  {
    name: "Matthew Hussey",
    detail: "Dating communication & confidence",
    use: "Best for dating & relationships",
    selected: false,
    avatar: "/images/chatcoach/matthew-hussey.png",
    avatarPosition: "50% 24%",
  },
] as const

const CoachPickerPreview: React.FC = () => (
  <svg
    viewBox="0 0 748 1296"
    className="block h-auto w-full"
    role="img"
    aria-labelledby="coach-picker-title coach-picker-description"
  >
    <title id="coach-picker-title">Chat Coach coach picker</title>
    <desc id="coach-picker-description">
      The Chat Coach side panel with the coach style menu open for a WhatsApp
      conversation.
    </desc>
    <foreignObject x="0" y="0" width="748" height="1296">
      <div className="relative h-[1296px] w-[748px] overflow-hidden bg-[#f5f0e4] font-sans text-[#151b2b]">
        <div className="absolute inset-y-0 left-[12px] w-[736px] overflow-hidden rounded-l-[17px] bg-[#006568]">
          <header className="flex h-[77px] items-center px-[34px] text-white">
            <CoachLogo />
            <strong className="ml-[16px] text-[28px] leading-none font-semibold tracking-[-0.4px]">
              Chat Coach
            </strong>
            <svg
              viewBox="0 0 32 32"
              className="ml-auto h-[31px] w-[31px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M11 14v-3a5 5 0 0 1 8.4-3.6M21 12v4a5 5 0 0 1-.8 2.7M7 15a9 9 0 0 0 14.5 7M16 25v5M11 30h10M5 5l22 22" />
            </svg>
            <svg
              viewBox="0 0 32 32"
              className="ml-[34px] h-[27px] w-[27px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m6 6 20 20M26 6 6 26" />
            </svg>
          </header>

          <div className="absolute inset-x-[18px] top-[76px] bottom-[8px] overflow-hidden rounded-t-[17px] rounded-b-[13px] bg-white">
            <section className="flex h-[121px] items-center border-b border-[#e6e8ed] px-[27px]">
              <div>
                <p className="text-[21px] leading-none font-medium tracking-[1.2px] text-[#70798d]">
                  CHATTING WITH
                </p>
                <p className="mt-[12px] text-[29px] leading-none font-semibold">
                  Tirumal 2
                </p>
              </div>
              <span className="ml-[40px] flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-[#e1e4e9] text-[#70798d]">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] border-current text-[21px] leading-none font-bold">
                  i
                </span>
              </span>
              <button
                type="button"
                className="ml-auto h-[64px] rounded-[16px] border-2 border-[#dedede] px-[26px] text-[29px] font-medium text-[#111]"
              >
                Sign Out
              </button>
            </section>

            <section className="flex h-[131px] items-center border-b border-[#eceef2] px-[34px]">
              <button
                type="button"
                aria-expanded="true"
                className="flex h-[98px] w-[366px] items-center rounded-[20px] border-2 border-[#dfe2e8] px-[25px] text-left"
              >
                <SparklesIcon className="h-[31px] w-[31px] flex-none [stroke-width:2.2] text-[#287eff]" />
                <span className="ml-[17px] min-w-0">
                  <strong className="block text-[26px] leading-none font-semibold">
                    ChatCoach
                  </strong>
                  <span className="mt-[12px] block truncate text-[21px] leading-none text-[#6b7487]">
                    General – use for eve...
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="ml-auto h-[22px] w-[22px] flex-none text-[#9aa2b1]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <svg
                viewBox="0 0 30 36"
                className="ml-[20px] h-[34px] w-[29px] flex-none text-[#287eff]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 1 4 19h10l-2 16 14-21H16l1-13Z" />
              </svg>
              <span className="ml-[12px] text-[24px] whitespace-nowrap text-[#364054]">
                Auto-suggest
              </span>
              <span className="relative ml-[15px] h-[36px] w-[65px] rounded-full bg-[#287eff]">
                <span className="absolute top-[2px] right-[2px] h-[32px] w-[32px] rounded-full border-2 border-[#d7d8dd] bg-white shadow-sm" />
              </span>
            </section>

            <section className="absolute inset-x-0 top-[252px] bottom-[246px] overflow-hidden bg-[#fbfcfe]">
              <div className="absolute top-[34px] right-[41px] left-[121px] h-[681px] rounded-[31px] border-2 border-[#e4e5e9] bg-white" />
              <div className="absolute top-[262px] right-[67px] left-[147px] rounded-[10px] bg-[#f4f4f7] px-[20px] pt-[60px] pb-[22px] text-[29px] leading-[1.4]">
                <p>
                  I just wanted to clarify so we can avoid confusion. I’ll
                  respect your time and not call now since you’re busy. Thanks
                  for letting me know.
                </p>
                <div className="mt-[26px] flex items-center gap-[20px]">
                  <CopyIcon />
                  <span className="text-[26px] font-medium">Copy</span>
                </div>
              </div>
              <div className="absolute top-[655px] right-[67px] left-[147px] h-[150px] rounded-[10px] border-l-[4px] border-[#8d8d99] bg-[#f4f4f7]" />
            </section>

            <section className="absolute inset-x-0 bottom-0 h-[247px] border-t-2 border-[#e4e6ea] bg-white px-[34px] pt-[32px]">
              <div className="flex items-end gap-[24px]">
                <div className="h-[180px] flex-1 rounded-[17px] bg-[#f4f4f6] px-[28px] py-[24px] text-[32px] leading-[1.5] text-[#777888]">
                  Ask anything about
                  <br />
                  conversation psychology,
                  <br />
                  EQ, or communication tips...
                </div>
                <button
                  type="button"
                  aria-label="Send"
                  className="mb-0 flex h-[72px] w-[80px] flex-none items-center justify-center rounded-[15px] bg-[#8f8f99] text-white"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="h-[34px] w-[34px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 28V5M7 14l9-9 9 9" />
                  </svg>
                </button>
              </div>
            </section>

            <section className="absolute top-[244px] left-[34px] z-10 w-[575px] overflow-hidden rounded-[16px] border-2 border-[#dedede] bg-white shadow-[0_7px_17px_rgba(15,23,42,0.16)]">
              <header className="h-[99px] border-b border-[#e9ebef] px-[24px] pt-[20px]">
                <p className="text-[20px] leading-none font-semibold tracking-[0.9px] text-[#687185]">
                  COACH STYLE
                </p>
                <p className="mt-[14px] text-[25px] leading-none font-semibold">
                  For Tirumal 2
                </p>
              </header>
              {coachOptions.map((coach) => (
                <div
                  key={coach.name}
                  className={`flex h-[133px] items-start border-b border-[#eceef2] px-[24px] pt-[21px] last:border-b-0 ${
                    coach.selected ? "bg-[#f1f6fc]" : "bg-white"
                  }`}
                >
                  <span className="flex h-[34px] w-[34px] flex-none items-center justify-center">
                    {coach.avatar ? (
                      <Image
                        src={coach.avatar}
                        alt=""
                        width={34}
                        height={34}
                        className="h-[34px] w-[34px] rounded-full border border-[#dfe3e9] object-cover"
                        style={{ objectPosition: coach.avatarPosition }}
                      />
                    ) : (
                      <SparklesIcon className="h-[29px] w-[29px] [stroke-width:2.2] text-[#287eff]" />
                    )}
                  </span>
                  <div className="ml-[12px] min-w-0 flex-1">
                    <p className="text-[25px] leading-none font-semibold">
                      {coach.name}
                    </p>
                    <p className="mt-[9px] text-[22px] leading-none text-[#4b566a]">
                      {coach.detail}
                    </p>
                    <p className="mt-[12px] text-[20px] leading-none text-[#70798d]">
                      {coach.use}
                    </p>
                  </div>
                  {coach.selected ? (
                    <span className="mt-[5px] flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border-[3px] border-[#287eff] text-[#287eff]">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-[17px] w-[17px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                  ) : null}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
)

export default CoachPickerPreview
