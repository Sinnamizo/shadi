import ShaadiHeader from "@/components/ShaadiHeader";

type Field = {
  label: string;
  value: string;
};

type SectionBlock = {
  title: string;
  left: Field[];
  right: Field[];
};

const basicLifestyle: SectionBlock[] = [
  {
    title: "Basics & Lifestyle",
    left: [
      { label: "Age", value: "31" },
      { label: "Date of Birth", value: "01-Jan-1995" },
      { label: "Marital Status", value: "Never Married" },
      { label: "Height", value: "5'11\" (180cm)" },
      { label: "Grew up in", value: "India" },
    ],
    right: [
      { label: "Diet", value: "Occasionally Non Veg" },
      { label: "Blood Group", value: "-" },
      { label: "Health Information", value: "Not Specified" },
      { label: "Disability", value: "None" },
      { label: "Smoke / Drink", value: "No / No" },
    ],
  },
  {
    title: "Religious Background",
    left: [
      { label: "Religion", value: "Hindu" },
      { label: "Community", value: "Vanniyar" },
      { label: "Sub community", value: "Not Specified" },
      { label: "Gotra", value: "Not Specified" },
      { label: "Mother Tongue", value: "Tamil" },
    ],
    right: [
      { label: "Astro Details", value: "-" },
      { label: "Manglik / Caste", value: "Do not know" },
      { label: "Date of Birth", value: "01 Jan 1995" },
      { label: "Time of Birth", value: "-" },
      { label: "City of Birth", value: "Chennai" },
    ],
  },
  {
    title: "Family details",
    left: [
      { label: "Father's Details", value: "Homemaker" },
      { label: "Mother's Details", value: "Employed" },
      { label: "Family Location", value: "Chennai" },
    ],
    right: [
      { label: "No. of Sisters", value: "1" },
      { label: "No. of Brothers", value: "0" },
      { label: "Family Financial Status", value: "Middle" },
    ],
  },
  {
    title: "Education & Career",
    left: [
      { label: "Highest Qualification", value: "BCA - Computers / IT" },
      { label: "College(s) attended", value: "Anna University" },
      { label: "Annual Income", value: "INR 4 Lakh to 7 Lakh" },
    ],
    right: [
      { label: "Working With", value: "Private Company" },
      { label: "Working As", value: "UX / UI Designers" },
      { label: "Employer Name", value: "Not shared" },
    ],
  },
  {
    title: "Location of Groom",
    left: [
      { label: "Current Residence", value: "Chennai, India" },
      { label: "State Of Residence", value: "Tamil Nadu" },
    ],
    right: [
      { label: "Residency Status", value: "Citizen" },
      { label: "Zip / Pin code", value: "Not Specified" },
    ],
  },
];

const partnerPreferences: SectionBlock[] = [
  {
    title: "Basic Info",
    left: [
      { label: "Age", value: "26 to 30" },
      { label: "Height", value: "5'0\" (152cm) to 5'11\" (180cm)" },
      { label: "Religion / Community", value: "Hindu / Vanniyar" },
    ],
    right: [
      { label: "Mother tongue", value: "Tamil, Malayalam" },
      { label: "Marital status", value: "Never Married" },
      { label: "Profile managed by", value: "Open to all" },
    ],
  },
  {
    title: "Location Details",
    left: [
      { label: "Country living in", value: "India" },
      { label: "State living in", value: "Karnataka, Tamil Nadu" },
      { label: "City / District", value: "Open to all" },
    ],
    right: [
      { label: "Education", value: "Open to all" },
      { label: "Working as", value: "Open to all" },
      { label: "Annual Income", value: "INR 1 lakh to 10 lakhs" },
    ],
  },
  {
    title: "Education & Career",
    left: [
      { label: "Education", value: "Open to all" },
      { label: "Working with", value: "Open to all" },
      { label: "Profession area", value: "Open to all" },
    ],
    right: [
      { label: "Working as", value: "Open to all" },
      { label: "Annual Income", value: "INR 1 lakh to 10 lakhs" },
      { label: "Diet", value: "Non-Veg, Veg, Vegan" },
    ],
  },
];

function FieldGrid({ title, left, right }: SectionBlock) {
  return (
    <section className="mt-2 border border-[#e5e7ea] bg-white">
      <header className="flex items-center justify-between border-b border-[#edf0f2] bg-[#f9fafb] px-3 py-1.5 text-[14px] font-bold text-[#4f545d]">
        <h3>{title}</h3>
        <button className="text-[12px] text-[#15afcf]">Edit</button>
      </header>
      <div className="grid grid-cols-2 gap-0">
        <div className="border-r border-[#f0f2f5] px-3 py-2">
          {left.map((item) => (
            <div key={item.label} className="grid grid-cols-[120px_1fr] py-0.5 text-[12px] leading-5 text-[#70757f]">
              <p>{item.label}</p>
              <p className="font-semibold text-[#4f545d]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="px-3 py-2">
          {right.map((item) => (
            <div key={item.label} className="grid grid-cols-[120px_1fr] py-0.5 text-[12px] leading-5 text-[#70757f]">
              <p>{item.label}</p>
              <p className="font-semibold text-[#4f545d]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MyProfilePage() {
  return (
    <div className="min-h-screen bg-[#ebedf0]">
      <ShaadiHeader activeTab="my-profile" />

      <main className="flex w-full items-start px-4 py-2 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <div className="w-[820px] border border-[#dfe2e6] bg-white">
          <section className="border-b border-[#e8ebee] bg-[#f7f8fa] px-3 py-2">
            <h1 className="text-[38px] font-bold leading-9 text-[#4a4f58]">Sinna Muthu <span className="text-[14px] text-[#6f757d]">(SH20254946)</span></h1>
          </section>

          <section className="grid grid-cols-[130px_1fr] gap-3 border-b border-[#e8ebee] px-3 py-2">
            <div className="h-[130px] border border-[#dce0e5] bg-[linear-gradient(145deg,#2f4a63,#6f8ea7)]" />
            <div>
              <div className="grid grid-cols-3 gap-x-4 text-[12px] leading-5 text-[#6f757d]">
                <p>Age / Height : <span className="font-semibold text-[#4e545d]">31 / 5'11\"</span></p>
                <p>Religion / Community : <span className="font-semibold text-[#4e545d]">Hindu, Vanniyar</span></p>
                <p>Location : <span className="font-semibold text-[#4e545d]">Chennai</span></p>
                <p>Marital Status : <span className="font-semibold text-[#4e545d]">Never Married</span></p>
                <p>Mother Tongue : <span className="font-semibold text-[#4e545d]">Tamil</span></p>
                <p>Posted by : <span className="font-semibold text-[#4e545d]">Self</span></p>
              </div>
              <div className="mt-3 border border-[#e8ebee] p-2">
                <h2 className="text-[18px] font-bold text-[#4f545d]">Manage your Profile</h2>
                <div className="mt-1 grid grid-cols-3 gap-x-2 text-[12px] text-[#15afcf]">
                  <p>Edit Personal Profile</p>
                  <p>View Profile Stats</p>
                  <p>Set Contact Filters</p>
                  <p>Edit Partner Profile</p>
                  <p>Add Photos</p>
                  <p>Hide / Delete Profile</p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-b border-[#e8ebee] bg-white px-3">
            <div className="mt-2 flex items-center gap-5 text-[12px]">
              <span className="rounded bg-[#1caecf] px-2 py-1 font-bold text-white">About Myself</span>
              <span className="font-bold text-[#7a7f87]">Partner Preferences</span>
            </div>
            <h2 className="mt-2 text-[14px] font-bold text-[#4f545d]">Personality, Family Details, Career, Partner Expectations etc.</h2>
            <p className="mt-1 pb-2 text-[12px] leading-5 text-[#6f757d]">
              I was not expecting you need to know about me. I was completed my Bachelors in Computer Application. I work as a Web designer.
              I enjoy great emphasis on simplicity and humility. I am seeking a simple and loving partner who will support me in every phase of life.
            </p>
          </div>

          <div className="px-3 pb-2">
            {basicLifestyle.map((section) => (
              <FieldGrid key={section.title} {...section} />
            ))}

            <section className="mt-2 border border-[#e5e7ea] bg-white p-3">
              <h3 className="text-[14px] font-bold text-[#4f545d]">Hobbies and Interests</h3>
              <p className="mt-1 text-[12px] text-[#6f757d]">Adding hobbies and interest will help you find better matches. <span className="font-bold text-[#15afcf]">Add Now</span></p>
            </section>

            <section className="mt-3 border border-[#e5e7ea] bg-[#f9fafb] px-3 py-1.5">
              <h2 className="text-[22px] font-bold text-[#6c7179]">Partner Preferences</h2>
            </section>

            {partnerPreferences.map((section) => (
              <FieldGrid key={section.title} {...section} />
            ))}

            <section className="mt-3 border border-[#e5e7ea] bg-[#f9fafb] px-3 py-1.5">
              <h2 className="text-[22px] font-bold text-[#6c7179]">My Contact detail</h2>
            </section>

            <section className="mt-2 border border-[#e5e7ea] bg-white px-3 py-2">
              <div className="grid grid-cols-2 text-[12px] text-[#6f757d]">
                <div className="grid grid-cols-[120px_1fr]">
                  <p>Mobile</p>
                  <p className="font-semibold text-[#4f545d]">+91 8525939833</p>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <p>Display Option</p>
                  <p className="font-semibold text-[#4f545d]">Only Premium Members</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[11px] text-[#8f9399]">I am Offline</div>
          <div className="h-[1060px] px-2 py-1 text-[12px] text-[#7d8188]">
            <p> Accepted Members (8)</p>
            <p> Shortlists & More (6)</p>
            <p> My Matches (20)</p>
            <div className="mt-2 space-y-1">
              {[
                "Anbu M",
                "Gayathri S",
                "Vennila V",
                "Kalai L",
                "Harini S",
                "Nimya S",
                "Swetha G",
                "Maneemagal S",
                "Keerthana S",
              ].map((name, index) => (
                <p key={`${name}-${index}`}> {name}</p>
              ))}
            </div>
          </div>
          <div className="flex h-6 items-center justify-end gap-4 border-t border-[#dfe2e6] bg-white px-2 text-[11px] text-[#848992]">
            <span>Alerts (4)</span>
            <span>Chats</span>
            <span>Active (26)</span>
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


