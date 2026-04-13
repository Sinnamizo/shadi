import ShaadiHeader from "@/components/ShaadiHeader";

type DeletedCard = {
  name: string;
  date: string;
  details: string[];
  message: string;
  locked?: boolean;
  plus?: boolean;
};

const deletedCards: DeletedCard[] = [
  {
    name: "SH41251557",
    date: "06 Apr",
    details: [
      "25 yrs, 5'4\"",
      "Tamil, Vanniyar",
      "Chennai, Tamil Nadu",
      "B.E / B.Tech",
      "Customer Support / BPO / KPO Professional",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
  },
  {
    name: "SH18468183",
    date: "03 Apr",
    details: [
      "29 yrs, 5'0\"",
      "Tamil, Vanniyakula Kshatriya",
      "Bengaluru, Karnataka",
      "MBA",
      "Finance Professional",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
  },
  {
    name: "Bhavani V",
    date: "01 Apr",
    details: [
      "27 yrs, 5'2\"",
      "Tamil, Vanniyakula Kshatriya",
      "Kanchipuram, Tamil Nadu",
      "MPT",
      "Not working",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
    locked: true,
  },
  {
    name: "Sai P",
    date: "30 Mar",
    details: [
      "29 yrs, 5'1\"",
      "Tamil, Vanniyar",
      "Chennai, Tamil Nadu",
      "MA",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
    locked: true,
  },
  {
    name: "Vinitha S",
    date: "24 Mar",
    details: [
      "30 yrs, 5'4\"",
      "Tamil, Vanniyar",
      "Chennai, Tamil Nadu",
      "BCA",
      "Software Professional (Others)",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
  },
  {
    name: "Hemalatha C",
    date: "15 Mar",
    details: [
      "29 yrs, 5'8\"",
      "Tamil, Vanniyar",
      "Salem, Tamil Nadu",
      "B.Ed",
      "Teacher",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
    locked: true,
  },
  {
    name: "Priyanka V",
    date: "15 Mar",
    details: [
      "27 yrs, 5'4\"",
      "Tamil, Vanniyakula Kshatriya",
      "Chennai, Tamil Nadu",
      "M.Sc",
      "Professor",
    ],
    message: "Member has decided to keep her profile hidden. Please check again after a few days.",
    plus: true,
  },
  {
    name: "Hemavathi N",
    date: "14 Mar",
    details: [
      "29 yrs, 5'2\"",
      "Tamil, Vanniyakula Kshatriya",
      "Tiruvallur, Tamil Nadu",
      "BBA",
      "Admin Professional",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
    plus: true,
  },
  {
    name: "SH72398049",
    date: "13 Mar",
    details: [
      "29 yrs, 5'5\"",
      "Tamil, Vanniyakula Kshatriya",
      "Chennai, Tamil Nadu",
      "B.Com",
      "Finance Professional",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
  },
  {
    name: "Vijeya L",
    date: "11 Mar",
    details: [
      "28 yrs, 5'2\"",
      "Tamil, Vanniyar",
      "Chennai, Tamil Nadu",
      "MBA",
      "Human Resources Professional",
    ],
    message: "She Declined your Invitation. This member cannot be contacted.",
  },
];

function RightRail() {
  return (
    <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
      <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
      <div className="h-[520px] px-2 py-1 text-[11px] text-[#7d8188]">
        <p> Accepted Members (0)</p>
        <p> Shortlists & More (6)</p>
        <p> My Matches (20)</p>
        <div className="mt-2 space-y-1">
          {[
            "Madhumitha R",
            "Anitha M",
            "Gayathri S",
            "Kokila H",
            "Arthi R",
            "Ramya S",
            "Harini D",
            "Lakshyadheerthana S",
            "Pavithra N",
            "Anitha M",
            "Kowsalya K",
            "Soumya R",
            "Saranya G",
          ].map((name, index) => (
            <p key={`${name}-${index}`}> {name}</p>
          ))}
        </div>
      </div>
      <div className="flex h-6 items-center justify-end gap-4 border-t border-[#dfe2e6] bg-white px-2 text-[11px] text-[#848992]">
        <span>Alerts (1)</span>
        <span>Chats</span>
        <span>Active (75)</span>
      </div>
    </aside>
  );
}

function DeletedProfileCard({ card }: { card: DeletedCard }) {
  return (
    <article className="mb-3 border border-[#d8dce2] bg-white p-3">
      <div className="grid grid-cols-[95px_1fr_60px] gap-3">
        <div className="relative h-[95px] w-[95px] overflow-hidden rounded-full bg-[linear-gradient(145deg,#889eb3,#d8d2c5)]">
          {card.locked ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/35 text-center text-[11px] font-bold text-white">
              Visible to
              <br />
              Premium Members
            </div>
          ) : null}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-[20px] font-bold text-[#545a64]">{card.name}</h3>
            {card.plus ? <span className="rounded-full bg-[#ef4f5f] px-2 py-0.5 text-[10px] font-bold text-white">Plus</span> : null}
          </div>
          <p className="text-[12px] text-[#31bfa5]">Online 1d ago</p>
          <div className="mt-1 text-[12px] leading-5 text-[#6f757d]">
            {card.details.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <p className="text-right text-[11px] text-[#8f949b]">{card.date}</p>
      </div>
      <div className="mt-3 bg-[#fdebec] px-3 py-2 text-center text-[12px] text-[#b28185]">{card.message}</div>
    </article>
  );
}

export default function InboxDeletedPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activePrimaryTab="inbox" secondaryVariant="inbox" activeInboxTab="deleted" />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <aside className="w-[120px] shrink-0 border border-[#d9dde2] bg-white">
          <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Filters</div>
          <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
            <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> All Requests</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Cancelled by me</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Cancelled by them</label>
          </div>
        </aside>

        <section className="ml-2 w-[620px]">
          <h2 className="mb-2 text-[18px] font-bold text-[#5a6069]">Deleted Invitations</h2>
          {deletedCards.map((card) => (
            <DeletedProfileCard key={`${card.name}-${card.date}`} card={card} />
          ))}
          <div className="mb-3 flex items-center justify-center gap-3 text-[11px] text-[#8e949c]">
            <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5"> Prev</span>
            <span>Showing 1-10 of 106</span>
            <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">Next </span>
          </div>
        </section>

        <RightRail />
      </main>

      <footer className="mt-4 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


