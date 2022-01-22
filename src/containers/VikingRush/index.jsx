import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import { Services } from '../../data/data-containers/VikingRushData/data-Services.js';
import SecPricesInfo from '../../data/data-containers/VikingRushData/data-SecPricesInfo.json';
import FeaturesOtherTop from '../../data/data-containers/VikingRushData/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/VikingRushData/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/VikingRushData/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/VikingRushData/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/VikingRushData/data-FaqInfo.json';

import {
        HomeDemo4Wwhitepaper,
        VikingRushAbout
        } from '../../utils/allImgs'

import './style/VikingRush.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import SecPrices from '../../components/SecPrices'

import Features2 from '../../components/Features2'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'

import OurServices from './OurServices'

const VikingRushContainer = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="VIKING RUSH" />
        <SecHeroSection
            ClassSec="hero-section moving section-padding"
            ClassDiv="col-12 col-lg-6 col-md-12"
            specialHead="Viking Rush Per Twitch"
            title="Endless Run Play2Earn NFT Game and Decenteralized ICO"
            link1="Whitepaper"
            link2="Buy Token"
            desc="Get the favor of the gods and earn tokens! Raise Your Horns! till Valhalla!"
            img={VikingRushAbout}
        />
        <SecPrices
            ClassSec="features section-padding-100-70"
            data={SecPricesInfo}
        />
        <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        />
        <TokenDistribution 
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        {/*<OurServices data={Services} />*/}
        <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
      </div>
    );
};

export default VikingRushContainer