import { Space_Grotesk } from "next/font/google";

const spaceGrostesk = Space_Grotesk({
    subsets: ['latin'],
    weight : ['300' ,'500']
})

const Form = ({ setCardDetails= ()=>{} , cardDetails={} }) => {

    const handleChange = (key , value) => {
        const temp = {
            ...cardDetails,
        }

        temp[key] = value

        setCardDetails(temp)
    }


  return (
    <div className={`lg:w-1/2 md:2/3 w-full ${spaceGrostesk.className}`}>
      <form className="">
        <div className="relative w-full">
          <label className="block">Card Holder Name</label>
          <input
            type="text"
            placeholder="Card Holder Name"
            className="form-input w-full"
            onChange={(e) => handleChange('cardHolderName' , e.target.value)}
          />
        </div>

        <div className="my-4">
          <label className="block">Card Number</label>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            className="form-input w-full"
            onChange={(e) => handleChange('cardNumber' , e.target.value)}

          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-between w-full">
          <div className="w-full">
            <label>Expiry Date (MM / YY)</label>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="MM" className="form-input w-1/2"
            onChange={(e) => handleChange('month' , e.target.value)}
                />
              <input type="text" placeholder="YYYY" className="form-input w-1/2"
            onChange={(e) => handleChange('year' , e.target.value)}
              
               />
            </div>
          </div>
          <div className="w-full">
            <label className="block">CVV / CVC</label>
            <input type="text" placeholder="e.g 123" className="form-input w-full" 
            onChange={(e) => handleChange('cvv' , e.target.value)}
             />
          </div>
        </div>

        <div className="mt-4">
            <button type='submit' className="btn">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
