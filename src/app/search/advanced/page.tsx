import ShaadiHeader from "@/components/ShaadiHeader";
import Link from "next/link";

const baseRows = [
  { label: "Marital Status", value: "Never Married" },
  { label: "Religion", value: "Hindu" },
  { label: "Mother Tongue", value: "Malayalam, Tamil" },
  { label: "Community", value: "Gounder, Vanniyakula Kshatriya, Vanniyar" },
];

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
      <p>{label}</p>
      <div className="flex h-8 items-center justify-between border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
        <span>{value}</span>
        <span className="text-[#9aa0a8]"></span>
      </div>
    </div>
  );
}

export default function AdvancedSearchPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="search"
        secondaryVariant="search"
        activeSearchTab="advanced-search"
      />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <section className="flex-1 min-w-0">
          <div className="mb-3 border border-[#d8dce2] bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#11aaca]">New</p>
                <p className="text-[15px] font-bold text-[#575d67]">Matrimony Platform Flow</p>
                <p className="text-[12px] text-[#7a8088]">See the full 10-module flow connected to your current pages.</p>
              </div>
              <Link href="/platform-flow" className="rounded-[2px] bg-[#13b6cc] px-3 py-2 text-[12px] font-bold text-white">
                Open Flow
              </Link>
            </div>
          </div>

          <div className="mb-3 border border-[#d8dce2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-3 py-2 text-[14px] font-bold text-[#5f656f]">Profile ID Search</div>
            <div className="flex items-center gap-3 px-3 py-3">
              <input className="h-8 w-[180px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]" placeholder="Enter Profile ID" />
              <button className="h-8 rounded-[2px] bg-[#13b6cc] px-4 text-[13px] font-bold text-white">Go</button>
            </div>
          </div>

          <div className="mb-3 border border-[#d8dce2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-3 py-2 text-[14px] font-bold text-[#5f656f]">Recent Searches</div>
            <div className="px-3 py-3 text-[12px] text-[#7f858e]">You have no recent searches.</div>
          </div>

          <div className="border border-[#d8dce2] bg-white p-3">
            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Age</p>
              <div className="flex items-center gap-2">
                <select className="h-8 w-[70px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]"><option>26</option></select>
                <span>to</span>
                <select className="h-8 w-[70px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]"><option>30</option></select>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Height</p>
              <div className="flex items-center gap-2">
                <select className="h-8 w-[120px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]"><option>5'0" - 152cm</option></select>
                <span>to</span>
                <select className="h-8 w-[120px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]"><option>5'11" - 180cm</option></select>
              </div>
            </div>

            {baseRows.map((row) => (
              <FieldRow key={row.label} label={row.label} value={row.value} />
            ))}

            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p />
              <div className="flex flex-wrap gap-4 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1"><input type="radio" name="trust" /> Select from list</label>
                <label className="flex items-center gap-1"><input type="radio" name="trust" /> Only members who selected caste No Bar</label>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Manglik / Chevvai Dosham</p>
              <div className="flex gap-4 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1"><input type="radio" name="manglik" /> Open to All</label>
                <label className="flex items-center gap-1"><input type="radio" name="manglik" /> Only Manglik</label>
                <label className="flex items-center gap-1"><input type="radio" name="manglik" /> No Mangliks</label>
              </div>
            </div>

            <div className="mb-3 border border-[#d8dce2]">
              <div className="flex items-center justify-between bg-[#f6f8fa] px-3 py-2 text-[13px] font-bold text-[#5f656f]">
                <span>Location & Grew up in Details</span>
                <span></span>
              </div>
              <div className="p-3">
                <FieldRow label="Country Living In" value="India" />
                <FieldRow label="State Living In" value="Open in to All" />
                <FieldRow label="Residency Status" value="Open to all" />
                <FieldRow label="Country Grew Up in" value="Open in to All" />
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between border border-[#d8dce2] bg-[#f6f8fa] px-3 py-2 text-[13px] font-bold text-[#5f656f]"><span>Education & Profession Details</span><span></span></div>
            <div className="mb-2 flex items-center justify-between border border-[#d8dce2] bg-[#f6f8fa] px-3 py-2 text-[13px] font-bold text-[#5f656f]"><span>Lifestyle & Appearance</span><span></span></div>
            <div className="mb-3 flex items-center justify-between border border-[#d8dce2] bg-[#f6f8fa] px-3 py-2 text-[13px] font-bold text-[#5f656f]"><span>Search Using Key Words</span><span></span></div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Chat Status</p>
              <label className="flex items-center gap-1 text-[12px] text-[#6f757d]"><input type="checkbox" /> Only Profiles available for Chat</label>
            </div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Photo Settings</p>
              <div className="flex gap-4 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1"><input type="checkbox" /> Visible to all</label>
                <label className="flex items-center gap-1"><input type="checkbox" /> Protected Photo</label>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-start gap-3 text-[12px] text-[#7a8088]">
              <p>Profile Managed by</p>
              <div className="grid grid-cols-2 gap-y-2 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> Open to All</label>
                <label className="flex items-center gap-1"><input type="checkbox" /> Self</label>
                <label className="flex items-center gap-1"><input type="checkbox" /> Parent / Guardian</label>
                <label className="flex items-center gap-1"><input type="checkbox" /> Sibling / Friend / Others</label>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[110px_1fr] items-start gap-3 text-[12px] text-[#7a8088]">
              <p>Do Not Show</p>
              <div className="space-y-2 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> Profiles that have Filtered me out</label>
                <label className="flex items-center gap-1"><input type="checkbox" /> Profiles that I have already Viewed</label>
              </div>
            </div>

            <div className="mt-5 pl-[113px]">
              <button className="rounded-[2px] bg-[#12b6cc] px-6 py-2 text-[22px] font-bold text-white">Search </button>
              <button className="ml-3 text-[12px] text-[#8a8f97]">Reset</button>
            </div>
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[480px] px-2 py-1 text-[11px] text-[#7d8188]">
            <p> Accepted Members (0)</p>
            <p> Shortlists & More (6)</p>
            <p> My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R","Gayathri S","Vennila V","Kokila H","Anitha M","Harini D","Lakshmipriya S","Pavithra N","Hari Sri G","Kowsalya K"
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


