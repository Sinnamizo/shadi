import Link from "next/link";
import ShaadiHeader from "@/components/ShaadiHeader";

const sortOptions = ["Most relevant", "Newest first", "Oldest first"];
const filterOptions = [
  "All Requests",
  "Blue Tick Members",
  "Super Connects",
  "Premium Members",
  "Members online now",
  "Phone verified Members",
  "Members with iPlus",
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="inbox"
        secondaryVariant="inbox"
        activeInboxTab="received"
      />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <section className="w-[120px] shrink-0 space-y-2">
          <div className="border border-[#d9dde2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Sort</div>
            <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
              {sortOptions.map((item, idx) => (
                <label key={item} className="flex items-center gap-1">
                  <input type="radio" name="sort" defaultChecked={idx === 0} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="border border-[#d9dde2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Filter</div>
            <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
              {filterOptions.map((item, idx) => (
                <label key={item} className="flex items-center gap-1">
                  <input type="radio" name="filter" defaultChecked={idx === 0} />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="ml-2 w-[620px] border border-[#d8dce2] bg-white">
          <div className="flex items-center border-b border-[#e7eaef] bg-[#f8f9fb] text-[13px] font-semibold">
            <Link className="w-1/2 border-b-2 border-[#ef4f5f] py-2 text-center text-[#ef4f5f]" href="/inbox">
              All Requests
            </Link>
            <Link className="w-1/2 py-2 text-center text-[#7f858e]" href="/inbox/filtered-out">
              Filtered Out
            </Link>
          </div>

          <div className="flex flex-col items-center px-4 py-8 text-center">
            <h2 className="text-[30px] font-bold text-[#555a64]">No pending Requests</h2>
            <div className="mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#f2f4f7] text-[44px] text-[#bec4cc]">
              
            </div>
            <p className="mt-6 text-[26px] font-bold text-[#565b65]">Want to increase your chances of finding a Match?</p>
            <p className="mt-2 text-[14px] text-[#7e848d]">Verify your Profile to increase trust and get 2x more Connects.</p>
            <button className="mt-4 rounded-full bg-[#0fb6cf] px-10 py-2 text-[28px] font-bold text-white">Verify Now</button>
            <button className="mt-4 text-[26px] font-bold text-[#13adc9]">View My Matches</button>
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[420px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p> Accepted Members (0)</p>
            <p> Shortlists & More (6)</p>
            <p> My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kokila H",
                "Anitha M",
                "Dhanraj M",
                "Pavithra N",
                "Kowsalya K",
                "Soumya R",
                "Divya R",
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
      </main>

      <footer className="mt-4 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


