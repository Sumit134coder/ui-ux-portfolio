import { Space_Grotesk } from "next/font/google";

const spaceGrostesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500"],
});

const Form = ({
  setCardDetails = () => {},
  cardDetails = {},
  onSuccess = () => {},
}) => {
  const handleChange = (key, value) => {
    const temp = {
      ...cardDetails,
    };

    if (key === "cardHolderName") {
      temp[key] = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (key === "cardNumber") {
      temp[key] = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    } else if (["month", "year", "cvv"].includes(key)) {
      temp[key] = value.replace(/\D/g, "");
    } else {
      temp[key] = value;
    }

    setCardDetails(temp);
  };

  return (
    <div className={`lg:w-1/2 md:2/3 w-full ${spaceGrostesk.className}`}>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          onSuccess();
        }}
      >
        <div className="relative w-full">
          <label className="block">Card Holder Name</label>
          <input
            type="text"
            required
            placeholder="Card Holder Name"
            className="form-input w-full"
            value={cardDetails?.cardHolderName}
            onChange={(e) => handleChange("cardHolderName", e.target.value)}
          />
        </div>

        <div className="my-4">
          <label className="block">Card Number</label>
          <input
            type="text"
            required
            value={cardDetails?.cardNumber}
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={19}
            className="form-input w-full"
            onChange={(e) => handleChange("cardNumber", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-between w-full">
          <div className="w-full">
            <label>Expiry Date (MM / YY)</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="MM"
                value={cardDetails?.month}
                maxLength={2}
                required
                className="form-input w-1/2"
                onChange={(e) => handleChange("month", e.target.value)}
              />
              <input
                type="text"
                placeholder="YY"
                value={cardDetails?.year}
                maxLength={2}
                required
                className="form-input w-1/2"
                onChange={(e) => handleChange("year", e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block">CVV / CVC</label>
            <input
              type="text"
              value={cardDetails?.cvv}
              placeholder="e.g 123"
              maxLength={3}
              required
              className="form-input w-full"
              onChange={(e) => handleChange("cvv", e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
