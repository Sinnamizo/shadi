import ShaadiHeader from "@/components/ShaadiHeader";

type MatchCard = {
  id: string;
  name: string;
  summary: string;
  details: string;
  status: "connect" | "skip";
  badge?: string;
};

const topMatches = [
  { name: "Ramya S", meta: "27 yrs, 5'2\"" },
  { name: "Janani M", meta: "26 yrs, 5'4\"" },
  { name: "Saradha S", meta: "28 yrs, 5'3\"" },
  { name: "Vijaya M", meta: "29 yrs, 5'1\"" },
  { name: "Anitha V", meta: "30 yrs, 5'4\"" },
  { name: "Sowmya P", meta: "27 yrs, 5'5\"" },
];

const cards: MatchCard[] = [
  {
    id: "SH771020",
    name: "Nivetha T",
    summary: "27 yrs, 5'4\", Hindu, Vanniyar",
    details: "Chennai, Tamil Nadu, IT",
    status: "connect",
    badge: "Pro",
  },
  {
    id: "SH619202",
    name: "Kaviya R",
    summary: "30 yrs, 5'7\", Hindu, Goundar",
    details: "Chennai, Tamil Nadu, Accounting Professional",
    status: "connect",
  },
  {
    id: "SH510402",
    name: "Lavanya P",
    summary: "28 yrs, 5'4\", Hindu, Vanniyakula Kshatriya",
    details: "Chennai, Tamil Nadu, Not working",
    status: "connect",
  },
  {
    id: "SH115005",
    name: "Vidhya H",
    summary: "28 yrs, 5'5\", Hindu, Vanniyar",
    details: "Chennai, Tamil Nadu, Accounting Professional",
    status: "connect",
    badge: "Pro",
  },
  {
    id: "SH773211",
    name: "Pooja P",
    summary: "29 yrs, 5'2\", Hindu, Vanniyar",
    details: "Bangalore, Karnataka, IT",
    status: "connect",
  },
  {
    id: "SH990612",
    name: "N Nithani",
    summary: "29 yrs, 5'4\", Hindu, Vanniyakula Kshatriya",
    details: "Coimbatore, Tamil Nadu, Executive",
    status: "connect",
  },
  {
    id: "SH5396446",
    name: "SH5396446",
    summary: "29 yrs, 5'4\", Hindu, Vanniyakula Kshatriya",
    details: "Salem, Tamil Nadu",
    status: "connect",
  },
  {
    id: "SH319022",
    name: "Geetha S",
    summary: "29 yrs, 5'6\", Hindu, Vanniyar",
    details: "Tamil Nadu, Not working",
    status: "connect",
  },
  {
    id: "SH811221",
    name: "Priyanka G",
    summary: "28 yrs, 5'2\", Hindu, Vanniyakula Kshatriya",
    details: "Tamil Nadu, Not working",
    status: "connect",
    badge: "Pro",
  },
  {
    id: "SH20507279",
    name: "SH20507279",
    summary: "29 yrs, 5'4\", Hindu, Vanniyakula kshatriya",
    details: "Chennai, Tamil Nadu",
    status: "connect",
  },
  {
    id: "SH620700",
    name: "Kalai A",
    summary: "29 yrs, 5'2\", Hindu, Vanniyakula Kshatriya",
    details: "Tiruvannamalai, Tamil Nadu",
    status: "connect",
  },
  {
    id: "SH880401",
    name: "Sushmitha S",
    summary: "30 yrs, 5'1\", Hindu, Vanniyakula Kshatriya",
    details: "Software Developer",
    status: "connect",
  },
  {
    id: "SH230989",
    name: "Harini D",
    summary: "30 yrs, 5'4\", Hindu, Vanniyar",
    details: "Madurai, Tamil Nadu",
    status: "connect",
  },
  {
    id: "SH401100",
    name: "Pushpa M",
    summary: "29 yrs, 5'5\", Hindu, Vanniyar",
    details: "Salem, Tamil Nadu, Software Professional",
    status: "connect",
  },
  {
    id: "SH300122",
    name: "Sowmya P",
    summary: "29 yrs, 5'2\", Hindu, Vanniyar",
    details: "Coimbatore, Tamil Nadu, Not working",
    status: "connect",
    badge: "Pro",
  },
  {
    id: "SH773110",
    name: "Ramya V",
    summary: "29 yrs, 5'2\", Hindu, Goundar",
    details: "Chennai, Tamil Nadu, Finance Professional",
    status: "skip",
    badge: "New",
  },
  {
    id: "SH191002",
    name: "Jaya S",
    summary: "27 yrs, 5'2\", Hindu, Vanniyar",
    details: "Tamil Nadu, Not working",
    status: "skip",
    badge: "New",
  },
  {
    id: "SH711000",
    name: "Lakshmipriya V",
    summary: "29 yrs, 5'4\", Hindu, Vanniyakula Kshatriya",
    details: "Tamil Nadu, Not working",
    status: "connect",
  },
  {
    id: "SH431900",
    name: "Snega J",
    summary: "30 yrs, 5'6\", Hindu, Goundar",
    details: "Chennai, Tamil Nadu, Consultant",
    status: "connect",
    badge: "Pro",
  },
  {
    id: "SH902012",
    name: "Vanitha M",
    summary: "29 yrs, 5'5\", Hindu, Goundar",
    details: "Karaikudi, Tamil Nadu",
    status: "connect",
  },
];

function MatchCardView({ card, index }: { card: MatchCard; index: number }) {
  return (
    <article className="mb-3 grid grid-cols-[120px_1fr_110px] border border-[#d9dde2] bg-white">
      <div className="relative p-1.5">
        {card.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-[#ef4f5f] px-1.5 py-0.5 text-[10px] font-bold text-white">{card.badge}</span>
        ) : null}
        <div className="h-[120px] rounded-[2px] bg-[linear-gradient(145deg,#6b829a,#d8d2c5)]" />
      </div>

      <div className="px-3 py-2">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#4f545d]">{card.name}</h3>
          <span className="text-[12px] text-[#9aa0a8]">⌄</span>
        </div>
        <div className="text-[12px] text-[#7a8088]">
          <p>{card.summary}</p>
          <p className="mt-1">{card.details}</p>
          <p className="mt-2 text-[#6f757d]">
            {index % 2 === 0
              ? "Profile reviewed and seems compatible with your preferences."
              : "Family-oriented profile with good values and stable career."}
            <span className="ml-1 text-[#12abc9]">More</span>
          </p>
        </div>
      </div>

      <div className="border-l border-[#eceff3] px-2 py-2 text-center">
        <p className="text-[11px] text-[#8c9199]">Like this profile?</p>
        <div
          className={`mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border text-[17px] ${
            card.status === "connect" ? "border-[#3ac0a6] text-[#3ac0a6]" : "border-[#ef6f7d] text-[#ef6f7d]"
          }`}
        >
          {card.status === "connect" ? "✓" : "♡"}
        </div>
        <p className="mt-1 text-[11px] text-[#8c9199]">{card.status === "connect" ? "Connect now" : "Skip / Connect"}</p>
      </div>
    </article>
  );
}

export default function MyMatchesPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="matches"
        secondaryVariant="matches"
        activeMatchesTab="my-matches"
      />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-3 py-3">
        <aside className="w-[160px] border border-[#d9dde2] bg-[#f7f8fa]">
          <div className="border-b border-[#e5e8ec] bg-[#eef1f4] px-2 py-2 text-[13px] font-bold text-[#59606a]">Refine Search</div>
          <div className="space-y-3 p-2 text-[11px] text-[#7b8088]">
            <div>
              <p className="font-bold text-[#626871]">Verified Status</p>
              <p className="mt-1">☑ Open to all</p>
              <p>☐ Premium only</p>
            </div>
            <div>
              <p className="font-bold text-[#626871]">Photo settings</p>
              <p className="mt-1">☑ Open to all</p>
            </div>
            <div>
              <p className="font-bold text-[#626871]">Recently Joined</p>
              <p className="mt-1">☑ Up to 30 days</p>
              <p>☐ Last 7 days</p>
            </div>
            <div>
              <p className="font-bold text-[#626871]">Marital Status</p>
              <p className="mt-1">☑ Never Married</p>
            </div>
            <div>
              <p className="font-bold text-[#626871]">Community</p>
              <p className="mt-1">☑ Open to all</p>
              <p>☐ Vanniyar</p>
              <p>☐ Gounder</p>
            </div>
          </div>
          <div className="border-t border-[#e5e8ec] p-2">
            <p className="text-[13px] font-bold text-[#59606a]">Success Stories</p>
            <div className="mt-2 h-[90px] rounded-[2px] bg-[linear-gradient(145deg,#8aa7bd,#d5dde4)]" />
            <p className="mt-1 text-[11px] text-[#7b8088]">Arul & Harinijai</p>
          </div>
        </aside>

        <section className="ml-2 w-[660px]">
          <div className="border border-[#d9dde2] bg-white p-2">
            <div className="mb-2 flex items-center justify-between text-[12px] text-[#7b8088]">
              <p>Members who match your Preferences</p>
              <p className="text-[#12abc9]">Edit</p>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {topMatches.map((item) => (
                <div key={item.name} className="rounded-[2px] border border-[#e5e8ec] p-1 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-[linear-gradient(145deg,#bccad8,#f0e7d6)]" />
                  <p className="mt-1 text-[11px] font-bold text-[#5a6069]">{item.name}</p>
                  <p className="text-[10px] text-[#8f949d]">{item.meta}</p>
                  <button className="mt-1 rounded-full border border-[#66d2be] px-2 py-0.5 text-[10px] font-bold text-[#20b39a]">Connect</button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2">
            {cards.slice(0, 3).map((card, i) => (
              <MatchCardView key={card.id} card={card} index={i} />
            ))}

            <section className="mb-3 border border-[#d9dde2] bg-[#fcf8ee] px-3 py-3 text-center">
              <p className="text-[14px] text-[#8c9097]">Get 10 times better response by calling directly!</p>
              <button className="mt-2 rounded-full bg-[#f8bd4d] px-4 py-1 text-[12px] font-bold text-white">See New Premium</button>
              <p className="mt-1 text-[11px] text-[#9fa4ac]">Save upto 60% today!</p>
            </section>

            {cards.slice(3, 6).map((card, i) => (
              <MatchCardView key={card.id} card={card} index={i + 3} />
            ))}

            <section className="mb-3 border border-[#d9dde2] bg-[linear-gradient(145deg,#3b2a63,#5e3472)] p-3 text-white">
              <p className="text-[13px] tracking-wider text-[#dcc88f]">VIPSHAADI</p>
              <p className="mt-1 text-[26px] font-semibold leading-7">Your Partner Should Be as Exceptional as You</p>
              <button className="mt-3 rounded-full bg-[#dfbc77] px-4 py-1 text-[12px] font-bold text-[#4f3200]">Find out more</button>
            </section>

            {cards.slice(6).map((card, i) => (
              <MatchCardView key={card.id} card={card} index={i + 6} />
            ))}

            <div className="mb-2 mt-3 flex items-center justify-center gap-2 text-[11px] text-[#8b9097]">
              <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">← Prev</span>
              <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">1</span>
              <span className="rounded border border-[#2cc0a5] bg-[#2cc0a5] px-2 py-0.5 text-white">2</span>
              <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">3</span>
              <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">4</span>
              <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">Next →</span>
            </div>
          </div>
        </section>

        <aside className="ml-2 w-[170px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[640px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p>• Accepted Members (8)</p>
            <p>• Shortlists & More (6)</p>
            <p>• My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kalai L",
                "Anitha M",
                "Kavitha M",
                "Kowsalya K",
                "Soumya R",
                "Keerthana N",
                "Divya R",
              ].map((name, index) => (
                <p key={`${name}-${index}`}>• {name}</p>
              ))}
            </div>
          </div>
          <div className="flex h-6 items-center justify-end gap-3 border-t border-[#dfe2e6] bg-white px-2 text-[11px] text-[#848992]">
            <span>Alerts (1)</span>
            <span>Chats</span>
            <span>Active (75)</span>
          </div>
        </aside>
      </main>

      <footer className="mt-4 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1">© 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
