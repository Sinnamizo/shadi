import ShaadiHeader from "@/components/ShaadiHeader";

const profileBullets = [
  "Online 1d ago",
  "You & Her",
  "Astro",
  "27 yrs, 5'6\", Taurus",
  "Never Married",
  "Tamil",
  "Tripupthur, Tamil Nadu",
  "Hindu, Vanniyar",
  "Marketing Professional",
  "Masters degree in Management",
  "Doesn't wish to specify her income",
];

const detailSections = [
  {
    title: "About SH04462868",
    content:
      "Myself Ashwini Vinayagam, working as a Manager at Tata Autocomp in Pune. I hold an MBA from Vellore Institute of Technology. I am career-focused, simple, and family oriented. I enjoy cooking, dancing, badminton, homely food, English songs, and watching Friends. We are a family of five. My father, Vinayagam, is a Superintendent of Police, and my mother, Anubhavam, is a teacher. My elder sister is settled in Mexico, my younger brother in Bangalore, and I am in Pune. I am looking for a partner who is passionate about their work, has clear goals, and believes in building a happy life together with mutual respect and support.",
  },
  { title: "Hobbies & Interests", content: "Reading, Working out" },
  { title: "Lifestyle", content: "Non Vegetarian" },
  { title: "Background", content: "Hindu, Tamil • Vanniyar • Lives in Tirupthur, Tamil Nadu, India" },
  { title: "Horoscope Details", content: "For correction in terms of moments, quickly create your Astro details and enrich her info." },
  { title: "Family Details", content: "Both parents are employed • 1 Brother, 1 Sister • Family income 30-70 lakhs" },
  { title: "Education & Career", content: "MBA • Management • Marketing Professional" },
];

export default function TodayMatchesPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader
        activePrimaryTab="matches"
        secondaryVariant="matches"
        activeMatchesTab="today-matches"
      />

      <main className="mx-auto flex w-full max-w-[1365px] items-start px-5 py-3">
        <div className="ml-[70px] w-[760px]">
          <p className="mb-3 text-center text-[20px] font-semibold text-[#575c66]">
            Here are Today&apos;s top Matches for you. Connect with them now!
          </p>

          <div className="grid grid-cols-[220px_1fr] gap-3">
            <section className="rounded-[2px] border border-[#d7dbe1] bg-white p-2">
              <div className="h-[330px] rounded-[2px] bg-[linear-gradient(135deg,#4f3f2f,#e8cc8c)]" />
              <div className="mt-2 rounded bg-[#4f2a78] px-3 py-2 text-[12px] font-bold text-white">
                5X SUCCESS RATES
                <br />
                100% PRIVACY
                <br />
                YOUR IDEAL MATCH FOR LIFE
              </div>
            </section>

            <section className="rounded-[2px] border border-[#d7dbe1] bg-white">
              <div className="border-b border-[#eceff3] px-3 py-2 text-[12px] font-semibold text-[#969ba3]">
                Time left to Connect <span className="ml-2 text-[#f15d67]">07h : 51m : 17s</span>
              </div>
              <div className="grid grid-cols-[1fr_130px]">
                <div className="px-3 py-2">
                  <h2 className="text-[20px] font-bold text-[#4b5059]">SH04462868</h2>
                  <div className="mt-2 grid grid-cols-2 gap-y-1 text-[12px] text-[#6f747d]">
                    {profileBullets.map((bullet) => (
                      <p key={bullet}>{bullet}</p>
                    ))}
                  </div>
                </div>
                <div className="border-l border-[#eceff3] p-3 text-center">
                  <p className="text-[12px] text-[#8c9199]">Like this profile?</p>
                  <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#e26577] text-[18px] text-[#e26577]">
                    ♡
                  </div>
                  <p className="mt-1 text-[11px] text-[#8c9199]">Connect now</p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-3 rounded-[2px] border border-[#d7dbe1] bg-white">
            <div className="flex items-center gap-6 border-b border-[#eceff3] px-3 py-2 text-[13px]">
              <span className="font-bold text-[#ef5a67]">Detailed Profile</span>
              <span className="font-semibold text-[#8a8f98]">Partner Preferences</span>
            </div>

            <div className="px-4 py-3">
              {detailSections.map((section) => (
                <article key={section.title} className="mb-5 border-l border-[#eceff3] pl-4">
                  <h3 className="text-[24px] font-bold text-[#4f545d]">{section.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#6f757d]">{section.content}</p>
                </article>
              ))}

              <article className="mb-2 border-l border-[#eceff3] pl-4">
                <h3 className="text-[24px] font-bold text-[#4f545d]">What She Is Looking For</h3>
                <div className="mt-3 rounded-[2px] border border-[#eceff3] p-3">
                  <p className="text-[13px] font-semibold text-[#6f757d]">You match 8/10 of Her Preferences</p>
                  <div className="mt-3 grid grid-cols-[1fr_24px] gap-y-2 text-[12px] text-[#6f757d]">
                    <p>Age 27 to 32</p>
                    <p className="text-[#66b14a]">✓</p>
                    <p>Height 5&apos;9 to 6&apos;4</p>
                    <p className="text-[#66b14a]">✓</p>
                    <p>Marital Status Never Married</p>
                    <p className="text-[#66b14a]">✓</p>
                    <p>Religion / Community Hindu</p>
                    <p className="text-[#66b14a]">✓</p>
                    <p>Diet Non-Veg</p>
                    <p className="text-[#66b14a]">✓</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[12px] text-[#8f9399]">I am Online</div>
          <div className="h-[640px] px-2 py-1 text-[12px] leading-5 text-[#7d8188]">
            <p>• Accepted Members (8)</p>
            <p>• Shortlists & More (6)</p>
            <p>• My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Madhumitha R",
                "Gayathri S",
                "Vennila V",
                "Kalai L",
                "Anitha M",
                "Kavitha M",
                "Kowsalya K",
                "Soumya R",
                "Keerthana N",
                "Divya R",
              ].map((name, index) => (
                <p key={`${name}-${index}`}>• {name}</p>
              ))}
            </div>
          </div>
          <div className="flex h-6 items-center justify-end gap-4 border-t border-[#dfe2e6] bg-white px-2 text-[12px] text-[#848992]">
            <span>Alerts (1)</span>
            <span>Chats</span>
            <span>Active (75)</span>
          </div>
        </aside>
      </main>

      <footer className="mt-8 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1">© 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
