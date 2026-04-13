import Link from "next/link";
import ShaadiHeader from "@/components/ShaadiHeader";

export default function InboxFilteredOutPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="inbox"
        secondaryVariant="inbox"
        activeInboxTab="received"
      />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <section className="ml-[155px] w-[620px] border border-[#d8dce2] bg-white">
          <div className="flex items-center border-b border-[#e7eaef] bg-[#f8f9fb] text-[13px] font-semibold">
            <Link className="w-1/2 py-2 text-center text-[#7f858e]" href="/inbox">
              All Requests
            </Link>
            <Link className="w-1/2 border-b-2 border-[#ef4f5f] py-2 text-center text-[#ef4f5f]" href="/inbox/filtered-out">
              Filtered Out
            </Link>
          </div>

          <div className="flex flex-col items-center px-4 py-12 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f2f4f7] text-[44px]">
              🚩
            </div>
            <p className="mt-4 text-[26px] font-bold text-[#575d67]">There are no Filtered Out Invitations</p>
            <button className="mt-3 text-[26px] font-bold text-[#13adc9]">View My Matches ›</button>
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[420px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p>• Accepted Members (0)</p>
            <p>• Shortlists & More (6)</p>
            <p>• My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Anitha M",
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kokila H",
                "Arthi R",
                "Thinithri M",
                "Rashia N",
                "Hivetha R",
                "Harini D",
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
