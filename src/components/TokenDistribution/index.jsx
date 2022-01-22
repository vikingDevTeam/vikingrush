import {
  HomeDemo1Distribution
} from "../../utils/allImgs"

import './TokenDistribution.css'

import SectionHeading from "../SectionHeading"

const TokenDistribution = ({data , ClassSpanTitle}) => {

    return (

      <section className="token-distribution section-padding-100-85" id="distribution">
        <div className="container">
          <SectionHeading
            title="Tokenomics"
            text="Valknut Distribution"
            ClassSpanTitle={ClassSpanTitle}
            description="Hundred billion VLK tokens will be allocated according to the following categories"
          />

          <div className="distribution-center row align-items-center">
            <div className="col-lg-8 col-sm-12">
              <div>
                <h2 className="text-center mb-30" data-aos="fade-up" data-aos-delay="0.3s">Funds Allocation</h2>
                <img draggable="false" src={HomeDemo1Distribution} className="center-block" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );

}

export default TokenDistribution