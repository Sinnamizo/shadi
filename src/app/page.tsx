import ShaadiHeader from "@/components/ShaadiHeader";

type Person = {
  name: string;
  meta: string;
};

const visitors: Person[] = [
  { name: "Yashree J", meta: "32 yrs, Tamil, Bengaluru" },
  { name: "Monisha M", meta: "29 yrs, Montreal" },
  { name: "Sindhiya S", meta: "29 yrs, Chennai" },
  { name: "Nandhu P", meta: "30 yrs, Vellore" },
  { name: "SH97", meta: "30 yrs, Chennai" },
];

const premium: Person[] = [
  { name: "Harshika P", meta: "28 yrs, IT, Coimbatore" },
  { name: "Mahalakshmi D", meta: "26 yrs, IT, Chennai" },
  { name: "Saranya S", meta: "30 yrs, Banking, Bangalore" },
  { name: "SH22919559", meta: "26 yrs, CA, Trichy" },
  { name: "Lekha Chowri", meta: "27 yrs, Architect, Chennai" },
];

const newMatches: Person[] = [
  { name: "Maha L", meta: "27 yrs, Admin, Trichy" },
  { name: "SH19830952", meta: "26 yrs, IT, Salem" },
  { name: "Revathi P", meta: "26 yrs, Finance, Kanchipuram" },
  { name: "Divyabharathi", meta: "28 yrs, Physician, Pondicherry" },
  { name: "Kavi Sri G", meta: "27 yrs, Teacher, Dharmapuri" },
];

function Badge({ count }: { count: number }) {
  return <span className="rounded-full bg-[#ec3f4d] px-1.5 py-[1px] text-[12px] font-bold text-white">{count}</span>;
}

function MatchColumn({ title, total, items }: { title: string; total: number; items: Person[] }) {
  return (
    <section className="rounded-[2px] border border-[#dadcdf] bg-white">
      <div className="flex items-center gap-1 border-b border-[#eceef0] px-3 py-2 text-[14px] font-bold text-[#4a4d54]">
        {title}
        <Badge count={total} />
      </div>
      <div>
        {items.map((item, idx) => (
          <div key={item.name} className="flex items-center gap-2 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-[linear-gradient(145deg,#f8c9bc,#f6f7fb)]" />
            <div className="flex-1">
              <p className="text-[13px] font-bold leading-4 text-[#3e4148]">{item.name}</p>
              <p className="text-[12px] leading-4 text-[#8b8f96]">{item.meta}</p>
            </div>
            <div
              className={`h-5 w-5 rounded-full border text-center text-[12px] leading-[18px] ${
                idx % 2 === 0 ? "border-[#6dd8ad] text-[#38b47e]" : "border-[#ff7f8e] text-[#e45b6b]"
              }`}
            >
              {idx % 2 === 0 ? "" : ""}
            </div>
          </div>
        ))}
      </div>
      <div className="py-2 text-center text-[13px] font-bold text-[#11a8ca]">View All</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ededef]">
      <ShaadiHeader activeTab="dashboard" />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <div className="w-[760px]">
          <div className="grid grid-cols-[118px_280px_160px_190px] gap-2">
            <section className="rounded-[2px] border border-[#dbdde0] bg-white">
              <div className="h-[108px] bg-[linear-gradient(130deg,#2e465f,#6e8da9)]" />
              <div className="px-2 py-1">
                <p className="text-[14px] font-bold text-[#3b3e45]">Sinna Muthu</p>
                <p className="text-[12px] text-[#8a8e95]">SH2025146</p>
                <p className="mt-1 text-[12px] text-[#f15d67]">Expired 4 days ago</p>
                <p className="mt-1 text-[12px] text-[#12aac9]">Get Blue Tick</p>
              </div>
            </section>

            <section className="rounded-[2px] border border-[#dbdde0] bg-white">
              <h3 className="border-b border-[#ecedf0] px-2 py-2 text-[14px] font-bold text-[#4a4d54]">Your Activity Summary</h3>
              <div className="grid grid-cols-3 text-center">
                {[
                  ["0", "No Pending Invitations"],
                  ["7", "Accepted Invitations"],
                  ["33", "Recent Visitors"],
                  ["0", "Only Premium Members"],
                  ["23", "Contacts viewed"],
                  ["5", "Chats initiated"],
                ].map(([v, t], i) => (
                  <div key={t} className={`border-[#eef0f3] p-1.5 ${i > 2 ? "border-t" : ""} ${i % 3 !== 2 ? "border-r" : ""}`}>
                    <p className="text-[24px] font-bold leading-6 text-[#44474e]">{v}</p>
                    <p className="text-[11px] leading-3 text-[#9a9ea4]">{t}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2px] border border-[#dbdde0] bg-white px-2 py-2">
              <h3 className="text-[14px] font-bold text-[#4b4e54]">Improve your Profile</h3>
              <div className="mt-2 h-[92px] rounded bg-[#f8f8fa] p-2">
                <p className="text-[13px] font-bold text-[#4b4e54]">Blue Tick Verification</p>
                <p className="mt-1 text-[12px] text-[#8c9097]">Verify your profile with Selfie</p>
                <button className="mt-2 rounded-full bg-[#1bafca] px-3 py-1 text-[12px] font-bold text-white">Get Blue Tick</button>
              </div>
            </section>

            <section className="rounded-[2px] bg-[#19b6d7] p-3 text-white">
              <h3 className="text-[36px] leading-7 font-bold">Stay connected!</h3>
              <p className="mt-3 text-[14px] font-bold">Renew at your old price today!</p>
              <button className="mt-8 rounded-[2px] bg-[#ef4b5a] px-4 py-1.5 text-[14px] font-bold">Renew Now</button>
              <p className="mt-2 text-[13px]">Hurry, limited period offer.</p>
            </section>
          </div>

          <div className="mt-3 grid grid-cols-[185px_180px_185px] gap-2">
            <section className="rounded-[2px] border border-[#dadcdf] bg-white">
              <div className="h-[70px] bg-[#ee4453] p-2 text-white">
                <p className="text-[11px] font-bold">LIMITED SEATS</p>
                <p className="mt-1 text-[23px] leading-5 font-bold">shaadilive</p>
                <p className="text-[13px]">5 Minute Meetings</p>
              </div>
              <div className="p-2 text-[12px] text-[#7d8088]">
                <p className="font-bold text-[#4d5057]">Tamil Singles</p>
                <p className="mt-1">7:00 pm - 7:59 pm</p>
                <p className="mt-1 text-[#ff5f65]">9 days left!</p>
              </div>
            </section>

            <section className="col-span-2 rounded-[2px] border border-[#dadcdf] bg-[linear-gradient(180deg,#332651,#5a2e65)] p-3 text-white">
              <p className="text-[13px] tracking-wide text-[#dbc88f]">VIPSHAADI</p>
              <p className="mt-2 text-[33px] leading-8 font-semibold">Your Partner Should Be as Exceptional as You</p>
              <button className="mt-6 rounded-full bg-[#d5b16e] px-4 py-1.5 text-[14px] font-bold text-[#563b00]">Find out more</button>
            </section>
          </div>

          <section className="mt-3 rounded-[2px] border border-[#dadcdf] bg-white p-2">
            <div className="mb-2 flex items-center gap-1 text-[14px] font-bold text-[#4a4d54]">
              Recent Visitors
              <Badge count={33} />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {visitors.map((v) => (
                <div key={v.name} className="rounded-[2px] border border-[#eceef1] p-2 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-[linear-gradient(145deg,#fcc6bc,#f6f7fb)]" />
                  <p className="mt-1 text-[13px] font-bold text-[#454850]">{v.name}</p>
                  <p className="text-[11px] leading-3 text-[#9a9ea4]">{v.meta}</p>
                  <button className="mt-1 rounded-full border border-[#73d6c8] px-2 py-0.5 text-[11px] font-bold text-[#1aa88e]">Connect Now</button>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <MatchColumn title="Premium Matches" total={279} items={premium} />
            <MatchColumn title="New Matches for you" total={61} items={newMatches} />
          </div>
        </div>

        <div className="ml-2 w-[150px]">
          <section className="rounded-[2px] border border-[#dadcdf] bg-white">
            <div className="flex items-center gap-1 border-b border-[#eceef0] px-2 py-2 text-[14px] font-bold text-[#4a4d54]">
              Notifications
              <Badge count={4} />
            </div>
            {[
              "SH26120927 has sent you an interest",
              "Priyanka V has viewed your interest",
              "SH8691794 has sent you an interest",
              "Sivaranjani S has sent you an interest",
            ].map((t) => (
              <div key={t} className="border-b border-[#eef0f3] px-2 py-2 text-[13px] leading-5 text-[#66707a]">
                {t}
              </div>
            ))}
            <div className="py-2 text-center text-[13px] font-bold text-[#13a6ca]">View All</div>
          </section>
        </div>

        <div className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Offline</div>
          <div className="h-[460px] px-2 py-1 text-[12px] text-[#7d8188]">
            <p> Accepted Members (0)</p>
            <p> Shortlists & More (0)</p>
            <p> My Matches (0)</p>
          </div>
          <div className="flex h-6 items-center justify-end gap-4 border-t border-[#dfe2e6] bg-white px-2 text-[11px] text-[#848992]">
            <span>Alerts (4)</span>
            <span>Chats</span>
            <span>Active (26)</span>
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Contact Us | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}


