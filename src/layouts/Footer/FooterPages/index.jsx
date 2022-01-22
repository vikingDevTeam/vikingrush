import{
  FooterPattern,
  FooterLogo
} from '../../../utils/allImgs'

import SectionHeading from "../../../components/SectionHeading"

import '../Footer.scss'

import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'
import TextFooter from '../../../data/data-layout/Footer/data-TextFooter.json'

const FooterPages = ({ClassSpanTitle=""}) => {
    return (

      <footer className="footer-area bg-img mt-5" style={{backgroundImage: `url(${FooterPattern})`}}>
        
        <div className="footer-area bg-img" style={{backgroundImage: `url(${FooterPattern})`}}>
          <div className="footer-content-area demo">
            <div className="container">
              <div className="row ">
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="footer-copywrite-info">
                    <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                      <div className="footer-logo">
                        <a href="#"><img draggable="false" src={FooterLogo} alt="logo" /> </a>
                      </div>
                      <p>VikingDev is a project that was born with the aim of showing the genesis and evolution of software and video game projects, mainly focused on the world of blockchains. Through our channels you can follow every step that characterizes the projects and actively participate in the development!</p>
                    </div>
                  </div>
                </div>

                <div className={"col-12 col-lg-3 col-md-6"}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={"contact_info mt-s text-center fadeInUp"} data-wow-delay="0.3s">
                        <h5>Follow us on</h5>
                        <a href="https://www.twitch.tv/vikingdev"><p>Viking Dev Twitch Channel</p></a>
                        <a href="https://discord.gg/FAM86Ygnd9"><p>Viking Dev Discord Channel</p></a>
                        <a href="https://twitter.com/_VikingDev_"><i className={"fa fa-twitter footpadding"} aria-hidden="true" /></a>
                        <a href="https://www.facebook.com/VikingDevTeam/"><i className={"fa fa-facebook footpadding"} aria-hidden="true" /></a>
                        <a href="https://www.youtube.com/channel/UCVbf-v3DPJh8bYlWQCl3N5A"><i className={"fa fa-youtube footpadding"} aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default FooterPages