import ShaadiHeader from "@/components/ShaadiHeader";

type PreferenceRow = {
  icon: string;
  label: string;
  value: string;
  tone: "green" | "orange";
};

const basicDetails: PreferenceRow[] = [
  { icon: "", label: "Age Range", value: "26 to 30", tone: "green" },
  { icon: "", label: "Height Range", value: "5' 0\" to 5' 11\"", tone: "green" },
  { icon: "", label: "Marital Status", value: "Never Married", tone: "green" },
];

const communityDetails: PreferenceRow[] = [
  { icon: "", label: "Religion", value: "Hindu", tone: "orange" },
  {
    icon: "",
    label: "Community",
    value: "Vanniyar, Vanniyakula kshatriya, Gounder",
    tone: "orange",
  },
  { icon: "", label: "Mother Tongue", value: "Tamil, Malayalam", tone: "orange" },
];

function PreferenceCard({
  title,
  rows,
}: {
  title: string;
  rows: PreferenceRow[];
}) {
  return (
    <section className="rounded-[6px] border border-[#e3e4e8] bg-white shadow-[0_2px_8px_rgba(30,30,30,0.08)]">
      <header className="px-4 py-3 text-[17px] font-bold text-[#4e5460]">{title}</header>
      <div className="divide-y divide-[#eff1f4]">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[28px_1fr_180px_16px] items-center gap-3 px-4 py-3">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[14px] ${
                row.tone === "green" ? "bg-[#9dd86b] text-white" : "bg-[#ffb149] text-white"
              }`}
            >
              {row.icon}
            </div>
            <p className="text-[13px] font-semibold text-[#8b9097]">{row.label}</p>
            <p className="text-[13px] text-[#666c75]">{row.value}</p>
            <p className="text-[16px] text-[#b5bac2]"></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PartnerProfilePage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activeTab="partner-profile" />

      <main className="w-full px-4 py-2">
        <div className="flex-1 min-w-0">
          <header className="mb-2">
            <h1 className="text-[36px] font-bold leading-9 text-[#575d68]">Your Partner Preferences</h1>
            <p className="mt-2 text-[13px] font-bold text-[#8d9199]">
              You will see Matches based on Preferences you have set
            </p>
            <p className="mt-2 text-[12px] italic text-[#b0b4bb]">Tap on the field to edit</p>
          </header>

          <div className="space-y-4">
            <PreferenceCard title="Basic Details" rows={basicDetails} />
            <PreferenceCard title="Community" rows={communityDetails} />
          </div>

          <div className="py-3 text-center text-[13px] font-bold text-[#737880]">More </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
