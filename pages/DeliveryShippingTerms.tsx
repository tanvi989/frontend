export default function DeliveryShippingTerms() {
  return (
    <div className="bg-white w-full min-h-screen pt-24">
      <div className="max-w-6xl mx-auto p-6 text-gray-800 leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          SHIPPING POLICY – MULTIFOLKS
        </h1>

        <p className="text-sm text-gray-500 mb-6">Effective Date: 27th July 2025</p>

        {/* Responsible Entity */}
        <p className="mb-4">
          <strong>Entity Responsible:</strong> GA Multilens Limited (trading as
          “MultiFolks”), a company registered in England & Wales, Company No.
          16406960, with its registered office at 2 Leman Street, London, E1W
          9US, United Kingdom.
        </p>

        <p className="mb-6">
          At MultiFolks, we make high-quality eyewear for discerning customers
          across the UK, US, and Europe — and we want your order to reach you
          as quickly and reliably as possible.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. STANDARD SHIPPING – ALWAYS FREE
        </h2>
        <p className="mb-3">
          We provide free standard delivery for all orders to the following
          regions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>United States: 7–14 working days</li>
          <li>United Kingdom: 7–10 working days</li>
          <li>European Union: 7–10 working days</li>
        </ul>
        <p className="mb-4">
          “Working days” exclude weekends and UK public holidays.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. EXPRESS SHIPPING – AVAILABLE AT CHECKOUT
        </h2>
        <p className="mb-3">
          For customers who need their eyewear faster, we offer express delivery
          to most serviceable locations.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>United States: 3-6 working days</li>
          <li>United Kingdom: 3-6 working days</li>
          <li>European Union: 3-6 working days</li>
        </ul>
        <p className="mb-4">
          Express shipping costs are calculated at checkout based on your
          country and delivery postcode. These fees are displayed transparently
          before you confirm your order.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. WHEN THE TIMELINE STARTS
        </h2>
        <p className="mb-4">
          Delivery timelines start only once we have received your complete,
          valid prescription details and your order has been cleared for
          production. If your prescription or order information is incomplete,
          our team will contact you to confirm details, which may delay
          processing.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. CUSTOMS & DELAYS
        </h2>
        <p className="mb-3">
          For customers outside the UK:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Customs inspections or local import procedures may cause additional
            delays beyond the timelines stated above.
          </li>
          <li>
            Such delays are beyond our control and do not qualify as grounds for
            cancellation once the order has shipped.
          </li>
          <li>
            Any applicable customs duties, local taxes, or import fees remain
            the buyer’s responsibility.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. TRACKING YOUR ORDER
        </h2>
        <p className="mb-4">
          Once your order ships, you’ll receive a tracking number by email so
          you can monitor its journey.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. NON-DELIVERY OR DELAYS
        </h2>
        <p className="mb-4">
          We work with trusted international couriers, but sometimes factors
          outside our control (customs, weather, courier issues) can impact
          delivery.
        </p>
        <p className="mb-4">
          If your order is delayed beyond the stated timelines (excluding
          customs-related delays), our customer service team will assist with
          status updates and, where applicable, replacements under our Refund,
          Cancellation & Replacement Policy.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. QUESTIONS OR SUPPORT
        </h2>
        <p className="mb-2">For any delivery-related concerns, contact us:</p>
        <p className="mb-10">
          Email:{" "}
          <strong className="text-red-400 text-sm">
            support@multifolks.com
          </strong>
        </p>
      </div>
    </div>
  );
}
