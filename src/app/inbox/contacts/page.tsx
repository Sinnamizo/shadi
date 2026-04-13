import ShaadiHeader from "@/components/ShaadiHeader";

type ContactRow = {
  name: string;
  info: string;
  note: string;
  date: string;
};

const contactRows: ContactRow[] = [
  {
    name: "Sivaranjani S",
    info: "30, 5'0\", Hindu, Vanniyakula Kshatriya, Tamil, Accounting Professional (Others), Chennai, India",
    note: "This Member can be contacted on +91 9055625934",
    date: "14 Mar",
  },
  {
    name: "Hema P",
    info: "28, 5'2\", Hindu, Vanniyar, Tamil, Legal Professional (Others), Chennai, India",
    note: "Phone No. not available as she has Declined your invitation.",
    date: "09 Mar",
  },
  {
    name: "Priya D",
    info: "28, 5'1\", Hindu, Vanniyar, Tamil, Teacher, Salem, India",
    note: "--",
    date: "09 Mar",
  },
  {
    name: "Keerthana G",
    info: "28, 5'0\", Hindu, Vanniyar, Tamil, Training Professional (Others), Chennai, India",
    note: "Phone No. not available as she has Declined your invitation.",
    date: "09 Mar",
  },
  {
    name: "Sai P",
    info: "29, 5'6\", Hindu, Vanniyar, Tamil, Not Specified, Chennai, India",
    note: "Phone No. not available as she has Declined your invitation.",
    date: "03 Mar",
  },
  {
    name: "Janani C",
    info: "27, 5'4\", Hindu, Vanniyakula Kshatriya, Tamil, Human Resources Professional, Chennai, India",
    note: "This Member can be contacted on +91 9052251387",
    date: "19 Feb",
  },
  {
    name: "Soumiya M",
    info: "26, 5'5\", Hindu, Vanniyakula Kshatriya, Tamil, Not working, Chennai, India",
    note: "Phone No. not available as she has Declined your invitation.",
    date: "19 Feb",
  },
  {
    name: "SH72398049",
    info: "29, 5'5\", Hindu, Vanniyakula Kshatriya, Tamil, Finance Professional, Chennai, India",
    note: "Phone No. not available as she has Declined your invitation.",
    date: "15 Feb",
  },
  {
    name: "Viewed Phone No Of Govindaraj S",
    info: "Details not available",
    note: "Profile has been deactivated due to inactivity",
    date: "15 Feb",
  },
  {
    name: "Mohana P",
    info: "29, 5'6\", Hindu, Vanniyar, Tamil, Not working, Villupuram, India",
    note: "This Member can be contacted on +91 9484253515",
    date: "15 Feb",
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
          {["Anitha M", "Madhumitha R", "Gayathri S", "Vennila V", "Kokila H", "Tharini T", "Harshita R", "Gayathri Devi R", "Harini D", "Lakshyadheerthana S", "Pavithra N", "Hari Sri G", "Kowsalya K", "Soumya R", "Saranya G"].map((name, index) => (
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

export default function InboxContactsPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activePrimaryTab="inbox" secondaryVariant="inbox" activeInboxTab="contacts" />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <section className="flex-1 min-w-0 border border-[#d8dce2] bg-white">
          <div className="flex items-center justify-between border-b border-[#e7eaef] bg-[#f6f8fa] px-3 py-2">
            <h2 className="text-[18px] font-bold text-[#5b616a]">History of calls initiated & SMSs sent</h2>
            <p className="text-[12px] text-[#8b9097]">
              Call / SMS Balance: <span className="font-bold text-[#ef5a67]">0 of 70</span>
            </p>
          </div>

          <div>
            {contactRows.map((row) => (
              <article key={`${row.name}-${row.date}`} className="grid grid-cols-[1fr_70px] border-b border-[#eef0f3] px-3 py-3">
                <div>
                  <h3 className="text-[15px] font-bold text-[#13adc9]">{row.name}</h3>
                  <p className="mt-1 text-[11px] text-[#6f757d]">{row.info}</p>
                  <p className="mt-2 text-[11px] text-[#8f949b]">{row.note}</p>
                </div>
                <p className="text-right text-[11px] text-[#8f949b]">{row.date}</p>
              </article>
            ))}
          </div>

          <div className="px-3 py-2 text-right text-[11px] text-[#8f949b]">Showing 1-10 of 23</div>
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


