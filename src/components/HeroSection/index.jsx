const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      desc="",
      HomeDemo1Or3Or4Or5Or6=true,
      HomeDemo1Or4Or5Or6=true,

    }) => {

  return (
    <section className={ClassSec} id="home">
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head dark">{specialHead}</h3>
                </div>
                <h1>{title}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">{desc}</p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a href="#" className="btn more-btn mr-3">{link1}</a>
                  <a href="#buy" className="btn more-btn">{link2}</a>
                </div>
              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" draggable="false" src={img} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;