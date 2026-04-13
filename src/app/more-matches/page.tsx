import ShaadiHeader from "@/components/ShaadiHeader";

type Tile = {
  name: string;
  meta: string;
  location: string;
  badge?: "Pro" | "VIP";
  locked?: boolean;
};

type MatchSection = {
  title: string;
  subtitle: string;
  count: number;
  items: Tile[];
};

const sectionData: MatchSection[] = [
  {
    title: "Members you may like",
    subtitle: "Members who match many of your Preferences",
    count: 744,
    items: [
      { name: "Rajni M", meta: "31 yrs, 5'0\", Hindu, Tamil Vanniyar", location: "Chennai, Tamil Nadu", locked: true },
      { name: "Subhashree R", meta: "30 yrs, 5'2\", Hindu, Tamil Vanniyakula Kshatriya", location: "Chennai, Tamil Nadu" },
      { name: "SH35158168", meta: "31 yrs, 5'2\", Hindu, Tamil Vanniyakula Kshatriya", location: "Virudhachalam, Tamil Nadu" },
      { name: "Deena S", meta: "29 yrs, 5'5\", Hindu, Tamil Vanniyakula Kshatriya", location: "Salem, Tamil Nadu", locked: true },
    ],
  },
  {
    title: "Premium Matches",
    subtitle: "Recently upgraded Premium members",
    count: 279,
    items: [
      { name: "Rohini S", meta: "30 yrs, 5'2\", Hindu, Tamil Vanniyakula Kshatriya", location: "Chennai, Tamil Nadu", badge: "Pro" },
      { name: "Gomathi J", meta: "28 yrs, 5'0\", Hindu, Tamil Vanniyakula Kshatriya", location: "Chennai, Tamil Nadu", badge: "Pro" },
      { name: "Vidhya H", meta: "26 yrs, 5'5\", Hindu, Tamil Vanniyar", location: "Chennai, Tamil Nadu", badge: "Pro" },
      { name: "Mahalakshmi D", meta: "26 yrs, 5'6\", Hindu, Tamil Vanniyakula Kshatriya", location: "Chennai, Tamil Nadu", badge: "Pro" },
    ],
  },
  {
    title: "Members looking for me",
    subtitle: "Members looking for matches like you",
    count: 807,
    items: [
      { name: "Akshara P", meta: "27 yrs, 5'0\", Hindu, Tamil", location: "Coimbatore, Tamil Nadu" },
      { name: "Gomathi J", meta: "29 yrs, 5'1\", Hindu, Tamil Vanniyakula Kshatriya", location: "Chennai, Tamil Nadu" },
      { name: "Maha L", meta: "27 yrs, 5'0\", Hindu, Tamil Vanniyakula Kshatriya", location: "Namakkal" },
      { name: "Vasuhashree K", meta: "29 yrs, 5'1\", Hindu, Tamil Kshatriya", location: "Tirupur, Tamil Nadu" },
    ],
  },
  {
    title: "Recently Viewed Members",
    subtitle: "Profiles you have recently Viewed",
    count: 32,
    items: [
      { name: "Nivetha T", meta: "27 yrs, 5'4\", Hindu, Tamil Vanniyar", location: "Chennai, Tamil Nadu", badge: "Pro" },
      { name: "SH04462868", meta: "27 yrs, 5'6\", Hindu, Tamil Vanniyar", location: "Tirupur, Tamil Nadu", badge: "VIP" },
      { name: "Kavi A", meta: "30 yrs, 5'7\", Hindu, Tamil Vanniyakula Kshatriya", location: "Salem, Tamil Nadu" },
      { name: "Porgodi T", meta: "29 yrs, 5'7\", Hindu, Tamil Vanniyar", location: "Coimbatore, Tamil Nadu" },
    ],
  },
  {
    title: "Recent Visitors",
    subtitle: "Members who recently visited your Profile",
    count: 33,
    items: [
      { name: "SH47108287", meta: "33 yrs, 5'8\", Hindu, Tamil Vanniyar", location: "Theni, Tamil Nadu" },
      { name: "Jeyashree J", meta: "32 yrs, 5'5\", Hindu, Tamil", location: "Bengaluru, Karnataka", badge: "Pro" },
      { name: "Monisha M", meta: "26 yrs, 5'0\", Hindu, Tamil Vanniyakula Kshatriya", location: "Montreal, Canada" },
      { name: "Sindhiya S", meta: "29 yrs, 5'3\", Hindu, Tamil Adi Dravidar", location: "Chennai, Tamil Nadu", badge: "Pro" },
    ],
  },
];

function ProfileTile({ item }: { item: Tile }) {
  return (
    <article className="border border-[#e3e6eb] bg-[#f7f8fa] p-2">
      <div className="relative h-[170px] rounded-[2px] bg-[linear-gradient(145deg,#8ba0b5,#d8d2c5)]">
        {item.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-[#ef4f5f] px-1.5 py-0.5 text-[10px] font-bold text-white">{item.badge}</span>
        ) : null}
        {item.locked ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-center text-[16px] font-bold text-white">
            Visible to
            <br />
            Premium Members
          </div>
        ) : null}
      </div>

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#13a9c7]">{item.name}</p>
        <p className="mt-1 text-[11px] leading-4 text-[#7a8088]">{item.meta}</p>
        <p className="text-[11px] leading-4 text-[#7a8088]">{item.location}</p>
      </div>

      <p className="mt-2 text-center text-[14px] text-[#8f949b]">Connect with her?</p>
      <button className="mt-1 w-full rounded-[2px] bg-[#10b6cd] py-1 text-[13px] font-bold text-white">Yes</button>
    </article>
  );
}

export default function MoreMatchesPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="matches"
        secondaryVariant="matches"
        activeMatchesTab="more-matches"
      />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <section className="flex-1 min-w-0">
          {sectionData.map((section) => (
            <div key={section.title} className="mb-3 border border-[#d8dce2] bg-white p-2">
              <h2 className="text-[17px] font-bold text-[#5b616a]">
                {section.title} <span className="text-[#6f757d]">({section.count})</span>
              </h2>
              <p className="text-[12px] text-[#8f949b]">{section.subtitle}</p>

              <div className="mt-2 grid grid-cols-4 gap-2">
                {section.items.map((item) => (
                  <ProfileTile key={item.name} item={item} />
                ))}
              </div>

              <div className="mt-2 text-center text-[13px] font-bold text-[#11aac8]">See All</div>
            </div>
          ))}
        </section>

        <aside className="ml-2 w-[170px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[640px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p> Accepted Members (8)</p>
            <p> Shortlists & More (6)</p>
            <p> My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Anitha M",
                "Gayathri S",
                "Kokila H",
                "Jothiga M",
                "Geetha J",
                "Nivetha T",
                "Harini D",
                "Lakshmipriya S",
                "Pavithra N",
              ].map((name, index) => (
                <p key={`${name}-${index}`}> {name}</p>
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
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


