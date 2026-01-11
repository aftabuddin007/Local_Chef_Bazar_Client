import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ 1 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          What is LocalChefBazaar?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          LocalChefBazaar is an online marketplace that connects local home cooks
          with customers looking for fresh, homemade meals. Users can explore
          daily menus, place orders, make secure payments, and track orders in
          real time.
        </div>
      </div>

      {/* FAQ 2 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          How can I order food from LocalChefBazaar?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          To place an order, create an account, browse available meals, check
          chef availability, and add items to your cart. Once confirmed, you can
          complete payment securely and track your order status.
        </div>
      </div>

      {/* FAQ 3 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          How can home cooks sell food on LocalChefBazaar?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Home cooks can register as a seller and list their meals with prices,
          availability, and descriptions. This allows them to earn money from
          their home kitchen without needing a physical restaurant.
        </div>
      </div>

      {/* FAQ 4 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          Is online payment safe on LocalChefBazaar?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Yes. LocalChefBazaar uses secure payment gateways to protect user
          payment information. All transactions are encrypted to ensure safety
          and privacy.
        </div>
      </div>

      {/* FAQ 5 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          Can I track my food order in real time?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Yes. After placing an order, customers can track the preparation and
          delivery status of their meals directly from their dashboard in real
          time.
        </div>
      </div>

      {/* FAQ 6 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl"
      >
        <div className="collapse-title font-semibold">
          Does LocalChefBazaar support ratings and reviews?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Yes. Customers can rate meals and leave reviews after completing an
          order. This helps maintain quality and allows other users to make
          informed choices.
        </div>
      </div>
    </section>
  );
};

export default FAQ;
