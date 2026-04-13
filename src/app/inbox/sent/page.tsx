import ShaadiHeader from "@/components/ShaadiHeader";

type SentCard = {
  name: string;
  date: string;
  details: string[];
  deleted?: boolean;
  note?: string;
  plus?: boolean;
};

const cards: SentCard[] = [
  {
    name: "Sasi K",
    date: "28 Mar",
    details: [
      "30 yrs, 5'3\"",
      "Tamil, Vanniyar",
      "Cuddalore, Tamil Nadu",
      "M.Sc",
      "Defense Services (Others)",
    ],
  },
  {
    name: "Deepa B",
    date: "09 Mar",
    details: [
      "27 yrs, 5'9\"",
      "Tamil, Vanniyakula Kshatriya",
      "Chennai, Tamil Nadu",
      "BBA",
      "Banking Professional",
    ],
    plus: true,
  },
  {
    name: "SH10365902",
    date: "09 Mar",
    details: [
      "28 yrs, 5'11\"",
      "Tamil, Vanniyar",
      "Chidambaram, Tamil Nadu",
      "IT Diploma",
      "Finance Professional",
    ],
  },
  {
    name: "Anitha R",
    date: "09 Mar",
    details: [
      "28 yrs, 5'1\"",
      "Tamil, Vanniyar",
      "Vellore, Tamil Nadu",
      "B.E / B.Tech",
      "Not working",
    ],
  },
  {
    name: "Priya B",
    date: "09 Mar",
    details: [
      "26 yrs, 5'1\"",
      "Tamil, Vanniyakula Kshatriya",
      "Chennai, Tamil Nadu",
      "MPA",
      "Customer Support / BPO / KPO Professional",
    ],
  },
  {
    name: "Jaya S",
    date: "09 Mar",
    details: [
      "27 yrs, 5'5\"",
      "Tamil, Vanniyakula Kshatriya",
      "Vellore, Tamil Nadu",
      "B.E / B.Tech",
      "Software Developer / Programmer",
    ],
  },
  {
    name: "Priya D",
    date: "09 Mar",
    details: [
      "28 yrs, 5'1\"",
      "Tamil, Vanniyar",
      "Salem, Tamil Nadu",
      "M.Sc",
      "Teacher",
    ],
    deleted: true,
  },
  {
    name: "Sandhya K",
    date: "09 Mar",
    details: [
      "27 yrs, 5'2\"",
      "Tamil, Gounder",
      "Bengaluru, Karnataka",
      "Company Secretary",
    ],
    deleted: true,
  },
  {
    name: "Gayadhri S",
    date: "15 Feb",
    details: [
      "28 yrs, 5'2\"",
      "Tamil, Vanniyar",
      "Pondicherry, Pondicherry",
      "MBA",
      "Banking Professional",
    ],
    note: "She viewed your invitation on 15 Feb 2026 and chose to respond later.",
  },
  {
    name: "Janani C",
    date: "15 Feb",
    details: [
      "27 yrs, 5'4\"",
      "Tamil, Vanniyakula Kshatriya",
      "Chennai, Tamil Nadu",
      "B.E / B.Tech",
      "Human Resources Professional",
    ],
    note: "She viewed your invitation on 15 Feb 2026 and chose to respond later.",
  },
];

function RightRail() {
  return (
    <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
      <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
      <div className="h-[520px] px-2 py-1 text-[11px] text-[#7d8188]">
        <p>• Accepted Members (0)</p>
        <p>• Shortlists & More (6)</p>
        <p>• My Matches (20)</p>
        <div className="mt-2 space-y-1">
          {["Anitha M", "Madhumitha R", "Gayathri S", "Vennila V", "Kokila H", "Harshita R", "Gayathri Devi R", "Harini D", "Lakshyadheerthana S", "Pavithra N", "Hari Sri G", "Kowsalya K", "Soumya R", "Saranya G"].map((name, index) => (
            <p key={`${name}-${index}`}>• {name}</p>
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

function SentProfileCard({ card }: { card: SentCard }) {
  return (
    <article className="mb-3 grid grid-cols-[95px_1fr_140px] border border-[#d8dce2] bg-white p-3">
      <div className="h-[95px] w-[95px] rounded-full bg-[linear-gradient(145deg,#889eb3,#d8d2c5)]" />
      <div className="px-3">
        <div className="flex items-center gap-2">
          <h3 className="text-[20px] font-bold text-[#545a64]">{card.name}</h3>
          {card.plus ? <span className="rounded-full bg-[#ef4f5f] px-2 py-0.5 text-[10px] font-bold text-white">Plus</span> : null}
        </div>
        <p className="text-[12px] text-[#8f949b]">Online 2w ago</p>
        <div className="mt-1 text-[12px] leading-5 text-[#6f757d]">
          {card.details.map((d) => (
            <p key={d}>{d}</p>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-[#6f757d]">
          Hello, I have liked your profile and believe it to be a good Match. If you like my profile too, kin...
          <span className="ml-1 text-[#13abc9]">Read More</span>
        </p>
        {card.note ? <div className="mt-2 bg-[#d5eef8] px-3 py-2 text-center text-[12px] text-[#6f757d]">{card.note}</div> : null}
      </div>
      <div className="border-l border-[#edf0f3] pl-3 text-center">
        <p className="text-[11px] text-[#8f949b]">{card.date}</p>
        {card.deleted ? (
          <p className="mt-10 text-[11px] text-[#ef6f7d]">Member has deleted her Profile</p>
        ) : (
          <>
            <p className="mt-2 text-[12px] font-semibold text-[#13abc9]">Upgrade to</p>
            <p className="text-[11px] text-[#8f949b]">Contact her directly</p>
            <button className="mt-2 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#4e8db4]">Call</button>
            <button className="mt-1 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#3cb36e]">WhatsApp</button>
            <button className="mt-1 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#3c8cc9]">Shaadi Chat</button>
          </>
        )}
      </div>
    </article>
  );
}

export default function InboxSentPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activePrimaryTab="inbox" secondaryVariant="inbox" activeInboxTab="sent" />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <aside className="ml-[30px] w-[120px] border border-[#d9dde2] bg-white">
          <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Filters</div>
          <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
            <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> All Requests</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Viewed by them</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Not Viewed by them</label>
          </div>
        </aside>

        <section className="ml-2 w-[620px]">
          <h2 className="mb-2 text-[18px] font-bold text-[#5a6069]">Sent invitations</h2>

          <SentProfileCard card={cards[0]} />

          <section className="mb-3 flex items-center justify-between border border-[#d8dce2] bg-[#e8f8fb] px-4 py-3">
            <div>
              <p className="text-[30px] font-bold text-[#4d5561]">Complete Verification !</p>
              <p className="text-[14px] text-[#6f757d]">Verified Profile get 2x more responses.</p>
            </div>
            <button className="rounded-full bg-[#10b6cd] px-8 py-2 text-[22px] font-bold text-white">Verify Now</button>
          </section>

          {cards.slice(1).map((card) => (
            <SentProfileCard key={card.name} card={card} />
          ))}

          <div className="mb-3 flex items-center justify-center gap-3 text-[11px] text-[#8e949c]">
            <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">← Prev</span>
            <span>Showing 1-10 of 33</span>
            <span className="rounded border border-[#d9dde2] bg-white px-2 py-0.5">Next →</span>
          </div>
        </section>

        <RightRail />
      </main>

      <footer className="mt-4 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1">© 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
