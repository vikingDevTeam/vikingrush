import SectionHeading from "../SectionHeading"
import PricingItem from "./PricingItem"

const SecPrices = ({ClassSec="features section-padding-0-70" , data , ClassSpanTitle}) => {

    return (

      <section className={ClassSec} id="price">
        <div className="container">

          <SectionHeading
            title="Token Prices"
            text="Valknut Token Prices"
            ClassSpanTitle={ClassSpanTitle}
            description="Sale price of the Valknut token during the three phases"
          />          
          <div className="row align-items-center">
            {data && data.map((item , key) => (
              <PricingItem
                type={item.type}
                key={key}
                Round={item.Round}
                dollar={item.dollar}
                bonus={item.bonus}
                minmax={item.minmax}
                maxtoken={item.maxtoken}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecPrices;