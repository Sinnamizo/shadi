import ShaadiHeader from "@/components/ShaadiHeader";

type AcceptedCard = {
  name: string;
  id: string;
  info: string[];
  date: string;
  plus?: boolean;
};

const acceptedCards: AcceptedCard[] = [
  {
    name: "SHc7318132",
    id: "SHc7318132",
    info: [
      "26 yrs, 5'6\"",
      "Tamil, Vanniyar",
      "Tambaram, Tamil Nadu",
      "B.Com",
      "Customer Support / BPO / KPO (Professional)",
    ],
    date: "30 Mar",
  },
  {
    name: "R Subashini",
    id: "SH772010",
    info: [
      "30 yrs, 5'4\"",
      "Tamil, Gounder",
      "Pondicherry, Pondicherry",
      "Non IT Engineer (Others)",
    ],
    date: "07 Feb",
    plus: true,
  },
];

function AcceptedProfileCard({ card }: { card: AcceptedCard }) {
  return (
    <article className="mb-3 grid grid-cols-[95px_1fr_140px] border border-[#d8dce2] bg-white p-3">
      <div className="h-[95px] w-[95px] rounded-full bg-[linear-gradient(145deg,#889eb3,#d8d2c5)]" />

      <div className="px-3">
        <div className="flex items-center gap-2">
          <h3 className="text-[20px] font-bold text-[#545a64]">{card.name}</h3>
          {card.plus ? <span className="rounded-full bg-[#ef4f5f] px-2 py-0.5 text-[10px] font-bold text-white">Plus</span> : null}
        </div>
        <p className="text-[12px] text-[#31bfa5]">Online 3d ago</p>
        <div className="mt-1 text-[12px] leading-5 text-[#6f757d]">
          {card.info.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-[#6f757d]">
          Hello, I viewed your profile too and would like to get to know you better. Why don&apos;t we take this connect?
          <span className="ml-1 text-[#13abc9]">Read More</span>
        </p>
      </div>

      <div className="border-l border-[#edf0f3] pl-3 text-center">
        <p className="text-[11px] text-[#8f949b]">{card.date}</p>
        <p className="mt-2 text-[12px] font-semibold text-[#13abc9]">Upgrade to</p>
        <p className="text-[11px] text-[#8f949b]">Contact her directly</p>
        <button className="mt-2 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#4e8db4]">Call</button>
        <button className="mt-1 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#3cb36e]">WhatsApp</button>
        <button className="mt-1 w-full rounded-full border border-[#dce2e8] bg-white py-1 text-[12px] font-bold text-[#3c8cc9]">Shaadi Chat</button>
      </div>
    </article>
  );
}

export default function InboxAcceptedPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="inbox"
        secondaryVariant="inbox"
        activeInboxTab="accepted"
      />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <aside className="ml-[30px] w-[120px] border border-[#d9dde2] bg-white">
          <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Filters</div>
          <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
            <label className="flex items-center gap-1"><input type="radio" name="acc-filter" /> Accepted by Me</label>
            <label className="flex items-center gap-1"><input type="radio" name="acc-filter" defaultChecked /> Accepted by Her</label>
          </div>
        </aside>

        <section className="ml-2 w-[620px]">
          <h2 className="mb-2 text-[18px] font-bold text-[#5a6069]">Accepted by Her</h2>

          {acceptedCards.map((card) => (
            <AcceptedProfileCard key={card.id} card={card} />
          ))}

          <section className="border border-[#d8dce2] bg-white text-center">
            <div className="h-8 bg-[linear-gradient(180deg,#6fcd94,#52b97d)]" />
            <div className="px-3 py-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4c4f56] text-[24px] text-white">🔒</div>
              <p className="mt-5 text-[28px] font-bold text-[#575d67]">You have 1 more Accept</p>
              <p className="mt-2 text-[13px] text-[#8d929a]">To view all and Contact them directly</p>
              <button className="mt-4 rounded-full bg-[#12b6cc] px-8 py-2 text-[22px] font-bold text-white">Upgrade Now</button>
            </div>
          </section>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[420px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p>• Accepted Members (0)</p>
            <p>• Shortlists & More (6)</p>
            <p>• My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kokila H",
                "Anitha M",
                "Thinithri M",
                "Pavithra N",
                "Kowsalya K",
                "Soumya R",
                "Divya R",
              ].map((name, index) => (
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
      </main>

      <footer className="mt-4 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1">© 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
