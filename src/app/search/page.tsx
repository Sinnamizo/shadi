import ShaadiHeader from "@/components/ShaadiHeader";

const formRows = [
  { label: "Marital Status", value: "Never Married" },
  { label: "Religion", value: "Hindu" },
  { label: "Mother tongue", value: "Malayalam, Tamil" },
  { label: "Community", value: "Gounder, Vanniyakula Kshatriya, Vanniyar" },
  { label: "Country Living In", value: "India" },
  { label: "State Living In", value: "Open to all" },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="search"
        secondaryVariant="search"
        activeSearchTab="basic-search"
      />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <section className="ml-[115px] w-[620px]">
          <div className="mb-3 border border-[#d8dce2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-3 py-2 text-[14px] font-bold text-[#5f656f]">Profile ID Search</div>
            <div className="flex items-center gap-3 px-3 py-3">
              <input
                className="h-8 w-[180px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]"
                placeholder="Enter Profile ID"
              />
              <button className="h-8 rounded-[2px] bg-[#13b6cc] px-4 text-[13px] font-bold text-white">Go</button>
            </div>
          </div>

          <div className="mb-3 border border-[#d8dce2] bg-white">
            <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-3 py-2 text-[14px] font-bold text-[#5f656f]">Recent Searches</div>
            <div className="px-3 py-3 text-[12px] text-[#7f858e]">You have no recent searches.</div>
          </div>

          <div className="border border-[#d8dce2] bg-white p-3">
            <div className="mb-3 grid grid-cols-[90px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Age</p>
              <div className="flex items-center gap-2">
                <select className="h-8 w-[70px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
                  <option>26</option>
                </select>
                <span>to</span>
                <select className="h-8 w-[70px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
                  <option>30</option>
                </select>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[90px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Height</p>
              <div className="flex items-center gap-2">
                <select className="h-8 w-[120px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
                  <option>5'0" - 152cm</option>
                </select>
                <span>to</span>
                <select className="h-8 w-[120px] border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
                  <option>5'11" - 181cm</option>
                </select>
              </div>
            </div>

            {formRows.map((row) => (
              <div key={row.label} className="mb-3 grid grid-cols-[90px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
                <p>{row.label}</p>
                <div className="flex h-8 items-center justify-between border border-[#cfd5dc] px-2 text-[12px] text-[#6f757d]">
                  <span>{row.value}</span>
                  <span className="text-[#9aa0a8]">▾</span>
                </div>
              </div>
            ))}

            <div className="mb-3 grid grid-cols-[90px_1fr] items-center gap-3 text-[12px] text-[#7a8088]">
              <p>Photo Settings</p>
              <div className="flex items-center gap-4 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  Visible to all
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  Prefered Photo
                </label>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-[90px_1fr] items-start gap-3 text-[12px] text-[#7a8088]">
              <p>Do Not Show</p>
              <div className="space-y-2 text-[12px] text-[#6f757d]">
                <label className="flex items-center gap-1">
                  <input type="checkbox" defaultChecked />
                  Profiles that have Filtered me out
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  Profiles that I have already viewed
                </label>
              </div>
            </div>

            <div className="pl-[93px] text-[12px] text-[#13adc9]">Advanced Search options</div>

            <div className="mt-4 pl-[93px]">
              <button className="rounded-[2px] bg-[#12b6cc] px-6 py-2 text-[22px] font-bold text-white">Search ›</button>
              <button className="ml-3 text-[12px] text-[#8a8f97]">Reset</button>
            </div>
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[480px] px-2 py-1 text-[11px] text-[#7d8188]">
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
                "Harini D",
                "Lakshmipriya S",
                "Pavithra N",
                "Hari Sri G",
                "Kowsalya K",
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
