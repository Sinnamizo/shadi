import Link from "next/link";
import ShaadiHeader from "@/components/ShaadiHeader";

function RightRail() {
  return (
    <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
      <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
      <div className="h-[420px] px-2 py-1 text-[11px] text-[#7d8188]">
        <p>• Accepted Members (0)</p>
        <p>• Shortlists & More (6)</p>
        <p>• My Matches (20)</p>
        <div className="mt-2 space-y-1">
          {["Anitha M", "Madhumitha R", "Gayathri S", "Vennila V", "Kokila H", "Arthi R", "Thinithri M", "Rashia N", "Harini D", "Kowsalya K", "Soumya R", "Saranya G", "Divya R", "Harshita R", "Yagapriya S"].map((name, index) => (
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

export default function InboxRequestsPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activePrimaryTab="inbox" secondaryVariant="inbox" activeInboxTab="requests" />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <aside className="ml-[30px] w-[120px] border border-[#d9dde2] bg-white">
          <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-2 py-1.5 text-[12px] font-bold text-[#61666f]">Filters</div>
          <div className="space-y-1 px-2 py-2 text-[11px] text-[#7a8088]">
            <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> All Requests</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Photo Requests</label>
            <label className="flex items-center gap-1"><input type="checkbox" /> Phone Requests</label>
          </div>
        </aside>

        <section className="ml-2 w-[620px] border border-[#d8dce2] bg-white">
          <div className="flex items-center border-b border-[#e7eaef] bg-[#f8f9fb] text-[13px] font-semibold">
            <Link className="w-1/3 border-b-2 border-[#ef4f5f] py-2 text-center text-[#ef4f5f]" href="/inbox/requests">Pending Requests</Link>
            <Link className="w-1/3 py-2 text-center text-[#7f858e]" href="/inbox/requests/accepted">Accepted Requests(1)</Link>
            <Link className="w-1/3 py-2 text-center text-[#7f858e]" href="/inbox/requests/sent">Sent Requests</Link>
          </div>

          <div className="flex flex-col items-center px-4 py-10 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f2f4f7] text-[44px]">📩</div>
            <p className="mt-4 text-[26px] font-bold text-[#575d67]">There are no Pending Requests</p>
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
