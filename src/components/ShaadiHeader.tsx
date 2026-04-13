import Link from "next/link";

type HeaderTab = "dashboard" | "my-profile" | "my-photos" | "partner-profile" | "settings" | "more";
type PrimaryTab = "my-shaadi" | "matches" | "search" | "inbox";
type SecondaryVariant = "default" | "matches" | "search" | "inbox";
type MatchesSubTab = "new-matches" | "today-matches" | "my-matches" | "near-me" | "more-matches";
type SearchSubTab = "basic-search" | "advanced-search";
type InboxSubTab = "received" | "accepted" | "requests" | "sent" | "contacts" | "deleted";

type ShaadiHeaderProps = {
  activeTab?: HeaderTab;
  activePrimaryTab?: PrimaryTab;
  secondaryVariant?: SecondaryVariant;
  activeMatchesTab?: MatchesSubTab;
  activeSearchTab?: SearchSubTab;
  activeInboxTab?: InboxSubTab;
};

const secondaryTabs = [
  { key: "dashboard" as const, label: "Dashboard", href: "/" },
  { key: "my-profile" as const, label: "My Profile", href: "/my-profile" },
  { key: "my-photos" as const, label: "My Photos", href: "/my-photos" },
  { key: "partner-profile" as const, label: "Partner Preferences", href: "/partner-profile" },
  { key: "settings" as const, label: "Settings", href: "/settings" },
  { key: "more" as const, label: "More", href: "#" },
];

const moreMenuItems = [
  { label: "My Contact Details", href: "#" },
  { label: "Add Horoscope Details", href: "#" },
  { label: "Notifications", href: "#" },
  { label: "My Orders", href: "/my-orders" },
];

const matchesTabs = [
  { key: "new-matches" as const, label: "New Matches", count: "60", href: "/new-matches" },
  { key: "today-matches" as const, label: "Today's", count: "19", href: "/today-matches" },
  { key: "my-matches" as const, label: "My Matches", count: "1,299", href: "/my-matches" },
  { key: "near-me" as const, label: "Near Me", count: "387", href: "/near-me" },
  { key: "more-matches" as const, label: "More Matches", count: undefined, href: "/more-matches" },
];

const searchTabs = [
  { key: "basic-search" as const, label: "Basic Search", href: "/search" },
  { key: "advanced-search" as const, label: "Advanced Search", href: "/search/advanced" },
];

const inboxTabs = [
  { key: "received" as const, label: "Received", href: "/inbox" },
  { key: "accepted" as const, label: "Accepted (7)", href: "/inbox/accepted" },
  { key: "requests" as const, label: "Requests", href: "/inbox/requests" },
  { key: "sent" as const, label: "Sent", href: "/inbox/sent" },
  { key: "contacts" as const, label: "Contacts", href: "/inbox/contacts" },
  { key: "deleted" as const, label: "Deleted", href: "/inbox/deleted" },
];

export default function ShaadiHeader({
  activeTab = "dashboard",
  activePrimaryTab = "my-shaadi",
  secondaryVariant = "default",
  activeMatchesTab = "today-matches",
  activeSearchTab = "basic-search",
  activeInboxTab = "received",
}: ShaadiHeaderProps) {
  return (
    <>
      <header className="h-12 border-b border-[#d83d48] bg-[#e83b47] text-white">
        <div className="mx-auto flex h-full w-full max-w-[1365px] items-center justify-between px-5">
          <div className="flex items-center gap-8">
            <div className="font-brand text-[40px] leading-none">shaadi</div>
            <nav className="hidden gap-6 text-[14px] font-bold md:flex">
              <Link className={activePrimaryTab === "my-shaadi" ? "text-white" : "text-white/90"} href="/">
                My Shaadi
              </Link>
              <Link className={activePrimaryTab === "matches" ? "text-white" : "text-white/90"} href="/today-matches">
                Matches
              </Link>
              <Link className={activePrimaryTab === "search" ? "text-white" : "text-white/90"} href="/search">
                Search
              </Link>
              <Link className={activePrimaryTab === "inbox" ? "text-white" : "text-white/90"} href="/inbox">
                Inbox
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-[13px] font-bold">
            <button className="rounded-[2px] bg-[#f4c15a] px-2.5 py-1 text-[#6f4a00]">Renew Premium</button>
            <span>Help</span>
            <div className="h-6 w-6 rounded-full border border-white bg-[#bc1f30]" />
          </div>
        </div>
      </header>

      <div className="h-8 border-b border-[#d9dce0] bg-[#f8f8f9]">
        {secondaryVariant === "default" ? (
          <div className="mx-auto flex h-full w-full max-w-[1365px] items-center gap-5 px-5 text-[12px] text-[#6f7279]">
            {secondaryTabs.map((tab) => {
              const isActive = tab.key === activeTab;
              const baseClassName = isActive
                ? "border-b border-[#ef3646] pb-1 font-bold text-[#ef3646]"
                : "pb-1";

              if (tab.key === "more") {
                return (
                  <div key={tab.key} className="group relative">
                    <span className={`${baseClassName} cursor-default`}>{tab.label}</span>
                    <div className="pointer-events-none absolute left-1/2 top-full z-30 hidden -translate-x-1/2 pt-3 group-hover:block group-hover:pointer-events-auto">
                      <div className="relative w-[216px] rounded-[2px] border border-[#dfe3ea] bg-white py-2 shadow-[0_6px_18px_rgba(32,40,56,0.22)]">
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-[#dfe3ea] bg-white" />
                        {moreMenuItems.map((item) =>
                          item.href.startsWith("/") ? (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-[18px] py-3 text-[15px] text-[#6f7480] hover:bg-[#fafbfc]"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <div key={item.label} className="px-[18px] py-3 text-[15px] text-[#6f7480] hover:bg-[#fafbfc]">
                              {item.label}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              if (tab.href.startsWith("/")) {
                return (
                  <Link key={tab.key} href={tab.href} className={baseClassName}>
                    {tab.label}
                  </Link>
                );
              }

              return (
                <span key={tab.key} className={baseClassName}>
                  {tab.label}
                </span>
              );
            })}
          </div>
        ) : secondaryVariant === "matches" ? (
          <div className="mx-auto flex h-full w-full max-w-[1365px] items-center gap-5 px-5 text-[11px] text-[#737781]">
            {matchesTabs.map((tab) => {
              const isActive = tab.key === activeMatchesTab;
              const itemContent = (
                <>
                  <span className={isActive ? "font-bold text-[#ef3646]" : "font-semibold text-[#6f7480]"}>{tab.label}</span>
                  {tab.count ? (
                    <span className={`rounded-[3px] px-1 py-[1px] text-[10px] font-bold ${isActive ? "bg-[#2cc0a5] text-white" : "bg-[#eef1f5] text-[#7f848d]"}`}>
                      {tab.count}
                    </span>
                  ) : null}
                </>
              );

              if (tab.href.startsWith("/")) {
                return (
                  <Link key={tab.key} href={tab.href} className={`flex items-center gap-1 pb-1 ${isActive ? "border-b border-[#ef3646]" : ""}`}>
                    {itemContent}
                  </Link>
                );
              }

              return (
                <div key={tab.key} className={`flex items-center gap-1 pb-1 ${isActive ? "border-b border-[#ef3646]" : ""}`}>
                  {itemContent}
                </div>
              );
            })}
          </div>
        ) : secondaryVariant === "search" ? (
          <div className="mx-auto flex h-full w-full max-w-[1365px] items-center gap-5 px-5 text-[12px] text-[#737781]">
            {searchTabs.map((tab) => {
              const isActive = tab.key === activeSearchTab;
              return tab.href.startsWith("/") ? (
                <Link
                  key={tab.key}
                  href={tab.href}
                  className={`pb-1 ${isActive ? "border-b border-[#ef3646] font-bold text-[#ef3646]" : "font-semibold text-[#6f7480]"}`}
                >
                  {tab.label}
                </Link>
              ) : (
                <span
                  key={tab.key}
                  className={`pb-1 ${isActive ? "border-b border-[#ef3646] font-bold text-[#ef3646]" : "font-semibold text-[#6f7480]"}`}
                >
                  {tab.label}
                </span>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto flex h-full w-full max-w-[1365px] items-center gap-5 px-5 text-[12px] text-[#737781]">
            {inboxTabs.map((tab) => {
              const isActive = tab.key === activeInboxTab;
              const className = `pb-1 ${isActive ? "border-b border-[#ef3646] font-bold text-[#ef3646]" : "font-semibold text-[#6f7480]"}`;
              return tab.href.startsWith("/") ? (
                <Link key={tab.key} href={tab.href} className={className}>
                  {tab.label}
                </Link>
              ) : (
                <span key={tab.key} className={className}>
                  {tab.label}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
