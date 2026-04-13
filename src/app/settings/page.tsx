import ShaadiHeader from "@/components/ShaadiHeader";

const settingSections = [
  "My Contact Settings",
  "Contact Filters",
  "Astro Details",
  "Email / SMS Alerts",
  "Privacy Options",
  "Shaadi Live",
  "Hide / Delete Profile",
  "Messages",
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activeTab="settings" />

      <main className="flex w-full items-start px-4 py-2 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <section className="flex-1 min-w-0">
          <header className="mb-3">
            <h1 className="text-[34px] font-bold leading-8 text-[#575d68]">Settings</h1>
          </header>

          <div className="border border-[#dadde2] bg-white shadow-[0_1px_2px_rgba(20,20,20,0.06)]">
            <div className="flex items-center justify-between border-b border-[#eceff3] px-3 py-3">
              <h2 className="text-[15px] font-bold text-[#535862]">Account Settings</h2>
              <span className="text-[14px] text-[#9aa0a8]"></span>
            </div>
            <div className="flex items-center justify-between px-7 py-4">
              <div className="flex items-center gap-4 text-[14px]">
                <span className="font-bold text-[#555a64]">Update Email Id:</span>
                <span className="text-[#7a7f87]">sinnamuthu98765@gmail.com</span>
              </div>
              <button className="text-[13px] font-bold text-[#14a8ca]">Edit</button>
            </div>
          </div>

          <div className="mt-3 border border-[#dadde2] bg-white shadow-[0_1px_2px_rgba(20,20,20,0.06)]">
            {settingSections.map((section, index) => (
              <div
                key={section}
                className={`flex items-center justify-between px-3 py-3 ${index !== settingSections.length - 1 ? "border-b border-[#eceff3]" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-[#5a6069]">{section}</span>
                  {section === "Shaadi Live" ? (
                    <span className="rounded-full bg-[#39a9ff] px-1.5 py-[1px] text-[11px] font-bold text-white">NEW</span>
                  ) : null}
                </div>
                <span className="text-[14px] text-[#9aa0a8]"></span>
              </div>
            ))}
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[330px] px-2 py-1 text-[12px] text-[#7d8188]">
            <div className="space-y-1">
              {[
                "Kowsalya K",
                "Soumya R",
                "Divya R",
                "Harshita R",
                "Latha L",
                "Yagapriya S",
                "Pavithra N",
                "Durgadevi M",
                "Shalini K",
                "SH46107704",
                "Pavithra M",
                "Raziya D",
                "Tamir D",
                "Kousalya R",
                "Vasanthi A",
                "Linthupiriya R",
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

      <footer className="mt-6 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


