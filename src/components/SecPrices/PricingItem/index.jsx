const PricingItem = ({ type, Round, dollar, bonus, maxtoken, minmax }) => {

    return (
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <div className="pricing-item ">
          <h4>{Round}</h4> 
          {type===1 && <div className="pricing">on February 1<sup>st</sup> from 9 pm utc <br/>for 3 hours</div>}
          {type===2 && <div className="pricing">starts on February 2<sup>nd</sup> <br/>to ends on February 13<sup>th</sup></div>}
          {type===3 && <div className="pricing">starts on February 14<sup>th</sup> <br/>to ends on February 28<sup>th</sup></div>}
          
          <span>{dollar}</span>
          
          <div className="pricing">{minmax}</div>
          <div className="pricing">{maxtoken}</div>
          
          <label><strong>{bonus} bonus</strong></label>
        </div>
      </div>
    );
}

export default PricingItem;