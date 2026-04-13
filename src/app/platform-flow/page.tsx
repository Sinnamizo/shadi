import Link from "next/link";
import ShaadiHeader from "@/components/ShaadiHeader";

type CoreModule = {
  id: string;
  title: string;
  why: string;
  features: string;
  routes: Array<{ label: string; href: string }>;
};

const flowSteps = [
  "Register",
  "Create detailed profile",
  "Search / get AI matches",
  "Send interest / chat",
  "Upgrade premium",
  "Unlock contact details",
  "Marriage success",
];

const modules: CoreModule[] = [
  {
    id: "01",
    title: "User Module",
    why: "Heart of the app",
    features: "Signup, login, profile, photos, preferences",
    routes: [
      { label: "Dashboard", href: "/" },
      { label: "My Profile", href: "/my-profile" },
      { label: "My Photos", href: "/my-photos" },
      { label: "Partner Preferences", href: "/partner-profile" },
    ],
  },
  {
    id: "02",
    title: "Search & Filter Module",
    why: "Main discovery engine",
    features: "Religion, caste, location, salary, education, habits",
    routes: [
      { label: "Basic Search", href: "/search" },
      { label: "Advanced Search", href: "/search/advanced" },
    ],
  },
  {
    id: "03",
    title: "Matchmaking Engine",
    why: "Core logic",
    features: "Preference + behavior + score ranking",
    routes: [
      { label: "Today Matches", href: "/today-matches" },
      { label: "New Matches", href: "/new-matches" },
      { label: "My Matches", href: "/my-matches" },
      { label: "Near Me", href: "/near-me" },
    ],
  },
  {
    id: "04",
    title: "Communication Module",
    why: "Intent to connection",
    features: "Interests, chat, contact requests",
    routes: [
      { label: "Inbox Received", href: "/inbox" },
      { label: "Requests", href: "/inbox/requests" },
      { label: "Accepted", href: "/inbox/accepted" },
      { label: "Contacts", href: "/inbox/contacts" },
    ],
  },
  {
    id: "05",
    title: "Verification & Trust",
    why: "Critical for safety",
    features: "OTP, ID proof, photo verification, badge",
    routes: [
      { label: "Inbox Verification Prompt", href: "/inbox" },
      { label: "Settings", href: "/settings" },
    ],
  },
  {
    id: "06",
    title: "Payment & Subscription",
    why: "Revenue engine",
    features: "Freemium, premium unlocks, upgrades",
    routes: [
      { label: "My Orders", href: "/my-orders" },
      { label: "Dashboard Premium CTA", href: "/" },
    ],
  },
  {
    id: "07",
    title: "Notification Module",
    why: "Re-engagement loop",
    features: "Interest alerts, daily match nudges, updates",
    routes: [
      { label: "Dashboard Notifications", href: "/" },
      { label: "Inbox Alerts", href: "/inbox" },
    ],
  },
  {
    id: "08",
    title: "Admin Panel Module",
    why: "Operations control",
    features: "Manage users, reports, subscriptions, analytics",
    routes: [{ label: "Planned", href: "/settings" }],
  },
  {
    id: "09",
    title: "Safety & Moderation",
    why: "Trust at scale",
    features: "Report, block, fake detection, moderation",
    routes: [
      { label: "Inbox Deleted", href: "/inbox/deleted" },
      { label: "Filtered Out", href: "/inbox/filtered-out" },
      { label: "Settings Privacy", href: "/settings" },
    ],
  },
  {
    id: "10",
    title: "Success Journey Module",
    why: "Outcome and retention",
    features: "Track from match to meaningful connection",
    routes: [{ label: "More Matches", href: "/more-matches" }],
  },
];

function FlowChip({ text, isFinal }: { text: string; isFinal?: boolean }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[12px] font-bold ${
        isFinal ? "border-[#3ba871] bg-[#edf9f2] text-[#2f8b5d]" : "border-[#cfd5dc] bg-white text-[#5f656f]"
      }`}
    >
      {text}
    </div>
  );
}

export default function PlatformFlowPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activeTab="more" />

      <main className="w-full px-4 py-4">
        <section className="mx-auto max-w-[980px] border border-[#d8dce2] bg-white">
          <div className="border-b border-[#e7eaef] bg-[#f6f8fa] px-4 py-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#11aac9]">Product Blueprint</p>
            <h1 className="mt-1 text-[28px] font-bold leading-8 text-[#4f555f]">How the Matrimony Platform Works</h1>
            <p className="mt-2 text-[13px] text-[#7b8189]">
              Users create profiles, discover matches, connect, and upgrade for premium actions. Platform enables matchmaking, while users drive decisions.
            </p>
          </div>

          <div className="border-b border-[#eceff3] px-4 py-4">
            <h2 className="mb-3 text-[16px] font-bold text-[#555b65]">Simple User Flow</h2>
            <div className="flex flex-wrap items-center gap-2">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <FlowChip text={step} isFinal={index === flowSteps.length - 1} />
                  {index !== flowSteps.length - 1 ? <span className="text-[16px] text-[#96a0ab]"></span> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-4">
            <h2 className="mb-3 text-[16px] font-bold text-[#555b65]">10 Core Modules Connected To Your Pages</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {modules.map((module) => (
                <article key={module.id} className="rounded-[2px] border border-[#d9dde2] bg-[#fbfcfd] p-3">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-[2px] bg-[#14b2cd] px-2 py-[2px] text-[11px] font-bold text-white">{module.id}</span>
                    <h3 className="text-[15px] font-bold text-[#4e545d]">{module.title}</h3>
                  </div>
                  <p className="text-[12px] font-bold text-[#6a717b]">{module.why}</p>
                  <p className="mt-1 text-[12px] leading-5 text-[#7a818a]">{module.features}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {module.routes.map((route) => (
                      <Link
                        key={`${module.id}-${route.href}-${route.label}`}
                        href={route.href}
                        className="rounded-[2px] border border-[#cfd5dc] bg-white px-2 py-1 text-[11px] font-bold text-[#14a8c8]"
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eceff3] bg-[#fafbfc] px-4 py-3 text-[12px] text-[#767d87]">
            <p>
              Starter scoring idea: <span className="font-bold text-[#56606c]">match_score = age + location + education + preference match</span>. You can later replace it with ML ranking.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-6 border-t border-[#d7d9dd] bg-[#f3f4f6] py-2 text-center text-[12px] leading-5 text-[#8b8f96]">
        <p>About us | VIP Shaadi | Shaadi Blog | Success Stories | Shaadi Centres | Contact Us | Shaadi Live | Work with us</p>
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}
