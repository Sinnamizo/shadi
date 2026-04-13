import ShaadiHeader from "@/components/ShaadiHeader";

const quickLinks = [
  "Shortlists & more",
  "New Matches",
  "My Matches",
  "Near Me",
  "My Saved Searches",
  "My Help",
];

const uploadRules = [
  { title: "Close Up", ok: true },
  { title: "Full View", ok: true },
  { title: "Side Face", ok: true },
  { title: "Blur", ok: false },
  { title: "Group", ok: false },
  { title: "Watermark", ok: false },
];

export default function MyPhotosPage() {
  return (
    <div className="min-h-screen bg-[#e9ebee]">
      <ShaadiHeader activeTab="my-photos" />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <div className="w-[120px] border border-[#d9dce1] bg-[#f7f8fa]">
          <div className="border-b border-[#e5e8ec] bg-[#eef0f3] px-2 py-1.5 text-[14px] font-bold text-[#4f545d]">Quick Links</div>
          <div className="space-y-1 px-2 py-2 text-[12px] text-[#7a7f88]">
            {quickLinks.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
          <div className="border-t border-[#e7eaee] px-2 py-2 text-[12px] text-[#8a8f96]">
            <p className="font-bold text-[#5f656e]">Profile ID Search</p>
            <div className="mt-1 flex gap-1">
              <input className="h-5 w-16 border border-[#cfd5dc] bg-white px-1 text-[12px]" defaultValue="Enter Profile ID" />
              <button className="h-5 rounded-[2px] bg-[#1db0cf] px-2 text-[12px] font-bold text-white">Go</button>
            </div>
          </div>
          <div className="border-t border-[#e7eaee] px-2 py-2 text-[12px] text-[#7a7f88]">
            <p className="font-bold text-[#5f656e]">Useful Links</p>
            <p className="mt-1 text-[#16a9c8]">Refer A Friend</p>
            <p className="text-[#16a9c8]">Need Help?</p>
            <p className="text-[#16a9c8]">Security Tips</p>
          </div>
        </div>

        <section className="ml-2 w-[635px] border border-[#d7dadf] bg-white">
          <header className="border-b border-[#e7eaee] px-3 py-1.5">
            <h1 className="text-[34px] font-bold leading-8 text-[#60656f]">My Photos</h1>
          </header>

          <div className="border-b border-[#e7eaee] px-3 py-1 text-[13px] font-bold">
            <span className="border-b border-[#11add0] pb-1 text-[#10a6c8]">Photo</span>
            <span className="ml-4 text-[#727780]">Settings</span>
          </div>

          <div className="px-4 py-4 text-center">
            <div className="mx-auto w-[300px] rounded-[2px] border border-[#d8eaf0] bg-[#e8f5f8] px-4 py-3">
              <p className="text-[14px] font-bold text-[#5f6772]">Upload photos from your computer</p>
              <button className="mt-2 rounded-[2px] bg-[#15abc9] px-4 py-1 text-[14px] font-bold text-white">Browse Photo</button>
            </div>

            <p className="mx-auto mt-3 max-w-[470px] text-[12px] leading-5 text-[#8b9098]">
              Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, jpeg,
              png or webp format. All photos uploaded are screened as per Photo Guidelines and 98% of those get
              activated within 2 hours.
            </p>

            <div className="mt-5 w-[95px] border border-[#cfd6de] bg-[#f3f6f9] p-1">
              <div className="h-[120px] bg-[linear-gradient(145deg,#2f4a63,#6f8ea7)]" />
              <p className="mt-1 text-[12px] font-bold text-[#5c616a]">Profile Photo</p>
            </div>

            <div className="mt-10 text-left">
              <h2 className="text-[28px] font-bold leading-7 text-[#666b75]">Other ways to upload your photos</h2>
              <p className="mt-2 text-[12px] text-[#7f848d]">
                Send your photos through post to our office. Mention your Profile ID and Name at the back of the photos.
              </p>

              <div className="mt-8 border-t border-[#eceff3] pt-3">
                <div className="grid grid-cols-6 gap-2">
                  {uploadRules.map((rule) => (
                    <div key={rule.title} className="text-center">
                      <div className="mx-auto h-[52px] w-[48px] border border-[#d7dce2] bg-[#f2f4f7]" />
                      <p className={`mt-1 text-[11px] font-bold ${rule.ok ? "text-[#5f666f]" : "text-[#7f848d]"}`}>{rule.title}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-[12px] font-bold text-[#13a8c8]">Photo Guidelines | Photo FAQ</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Online</div>
          <div className="h-[480px] px-2 py-1 text-[12px] text-[#7d8188]">
            <p> Accepted Members (0)</p>
            <p> Shortlists & More (6)</p>
            <p> My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kalai L",
                "Harini S",
                "Asmitha M",
                "Rajiya M",
                "Poorni M R",
                "Pavithra R",
                "Divya R",
              ].map((name, index) => (
                <p key={`${name}-${index}`}> {name}</p>
              ))}
            </div>
          </div>
          <div className="flex h-6 items-center justify-end gap-4 border-t border-[#dfe2e6] bg-white px-2 text-[11px] text-[#848992]">
            <span>Alerts (4)</span>
            <span>Chats</span>
            <span>Active (75)</span>
          </div>
        </aside>
      </main>

      <footer className="mt-3 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Contact Us | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


