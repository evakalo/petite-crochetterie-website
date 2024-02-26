import termsStyles from "../styles/Terms.module.css";

export default function Terms() {
  return (
    <main className={termsStyles.termsWrapper}>
      <div>
        {" "}
        <h2>Terms and Conditions</h2>
        <ol>
          <li className={termsStyles.listHeader}> Shipping:</li>
          <ol type="a">
            <li>
              Shipping to the UK is provided free of charge for all orders.
            </li>
            <li>
              International shipping costs are the responsibility of the buyer
              and will be calculated at checkout.
            </li>
          </ol>
          <li className={termsStyles.listHeader}> Returns:</li>
          <ol type="a">
            <li>
              Due to the custom and handmade nature of the toys, all sales are
              final, and I do not accept returns or exchanges.
            </li>
            <li>
              I strive to ensure the highest quality in every creation; however,
              if you encounter any issues with your order, please contact me,
              and I will do my best to address your concerns.
            </li>
          </ol>
          <li className={termsStyles.listHeader}> Colour Variation:</li>
          <ol type="a">
            <li>
              Please note that colours may appear differently on computer
              screens compared to the finished product due to variations in
              screen settings and lighting. I make every effort to accurately
              represent the colours of my crochet toys in product photos;
              however, slight discrepancies may occur.
            </li>
          </ol>
          <li className={termsStyles.listHeader}> Shipping Times:</li>
          <ol type="a">
            <p>
              By placing an order with Petite Crochetterie, you agree to adhere
              to these terms and conditions. If you have any questions or
              require further clarification, please don't hesitate to contact me
              before making your purchase. Thank you for choosing Petite
              Crochetterie!
            </p>
          </ol>
          <ol type="a">
            <li>
              While I strive to process and ship orders in a timely manner,
              please allow for up to 3 weeks for production before your order is
              dispatched.
            </li>
            <li>
              International shipping times may vary depending on destination and
              customs clearance procedures.
            </li>
          </ol>
          <li className={termsStyles.listHeader}> Communication:</li>
          <ol type="a">
            <li>
              I will communicate with you throughout the order process to
              provide updates on the status of your purchase and to address any
              questions or concerns you may have.
            </li>
          </ol>
        </ol>
      </div>
    </main>
  );
}
