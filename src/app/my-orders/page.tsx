import ShaadiHeader from "@/components/ShaadiHeader";

const quickLinks = [
  "Shortlists & more",
  "New Matches",
  "My Matches",
  "Near Me",
  "Add Saved Searches",
  "My Help",
];

const orders = [
  {
    orderId: "#176795394456",
    amount: " 13110.00",
    paymentMode: "UPI",
    status: "Activated",
    date: "09-Jan-2026",
  },
  {
    orderId: "#176795039510",
    amount: " 13110.00",
    paymentMode: "-",
    status: "Order Cancelled",
    date: "09-Jan-2026",
  },
];

export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-[#ececef]">
      <ShaadiHeader activeTab="more" />

      <main className="flex w-full items-start px-4 py-3 [&>section:first-child]:min-w-0 [&>section:first-child]:flex-1 [&>div:first-child]:min-w-0 [&>div:first-child]:flex-1">
        <div className="w-[105px] border border-[#d9dce1] bg-[#f7f8fa]">
          <div className="border-b border-[#e5e8ec] bg-[#eef0f3] px-2 py-1.5 text-[14px] font-bold text-[#4f545d]">Quick Links</div>
          <div className="space-y-1 px-2 py-2 text-[12px] leading-5 text-[#7a7f88]">
            {quickLinks.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
          <div className="border-t border-[#e7eaee] px-2 py-2 text-[12px] text-[#8a8f96]">
            <p className="font-bold text-[#5f656e]">Profile ID Search</p>
            <div className="mt-1 flex gap-1">
              <input className="h-5 w-14 border border-[#cfd5dc] bg-white px-1 text-[12px]" defaultValue="Enter Profile ID" />
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

        <section className="ml-3 w-[560px]">
          <header className="mb-2">
            <h1 className="text-[36px] font-bold leading-8 text-[#4a4f58]">My Orders</h1>
          </header>

          <div className="border border-[#dadde2] bg-white">
            <div className="grid grid-cols-[140px_70px_105px_95px_95px_20px] border-b border-[#ebedf0] bg-[#f7f8fa] px-2 py-1.5 text-[12px] font-bold text-[#5f656e]">
              <span>Order</span>
              <span>Amount</span>
              <span>Mode of Payment</span>
              <span>Status</span>
              <span>Date</span>
              <span />
            </div>

            {orders.map((order, index) => (
              <div
                key={order.orderId}
                className={`grid grid-cols-[140px_70px_105px_95px_95px_20px] items-center px-2 py-1.5 text-[12px] text-[#6f757d] ${
                  index !== orders.length - 1 ? "border-b border-[#ebedf0]" : ""
                }`}
              >
                <span className="font-semibold text-[#18aac9]">{order.orderId}</span>
                <span>{order.amount}</span>
                <span>{order.paymentMode}</span>
                <span className={order.status === "Activated" ? "font-semibold text-[#63a740]" : "font-semibold text-[#e45c66]"}>{order.status}</span>
                <span>{order.date}</span>
                <span className="text-[#9aa0a8]"></span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[12px] leading-5 text-[#6f757d]">
            <p>
              <span className="font-bold text-[#63a740]"> Activated</span> - We have received payment for your order, and the order has been executed.
            </p>
            <p>
              <span className="font-bold text-[#63a740]"> Payment Pending</span> - We have received your order, but are still awaiting the payment.
            </p>
            <p>
              <span className="font-bold text-[#e45c66]"> Order Cancelled</span> - We have cancelled your order either because you requested us to do so, or because we did not receive payment or because it was a duplicate order.
            </p>
          </div>

          <p className="mt-5 max-w-[520px] text-[12px] leading-5 text-[#6f757d]">
            If you need any further help or information please feel free to Write to Customer Support or call us at +91-8805091111 with your Order ID and specifying the problem.
          </p>
        </section>

        <aside className="ml-2 w-[220px] border border-[#d9dbdf] bg-[#f4f5f7]">
          <div className="h-4 border-b border-[#e6e8eb] bg-white text-right text-[12px] text-[#8f9399]">I am Online</div>
          <div className="h-[330px] px-2 py-1 text-[12px] leading-5 text-[#7d8188]">
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
              ].map((name, index) => (
                <p key={`${name}-${index}`}> {name}</p>
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
        <p className="mt-1"> 1996-2026 Shaadi.com - The World&apos;s No.1 Matchmaking Service</p>
      </footer>
    </div>
  );
}

