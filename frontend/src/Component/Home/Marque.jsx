import {
  expresslogo,
  python,
  htmllogo,
  csslogo,
  nodelogo,
  jslogo,
  phplogo,
  mongologo,
  javalogo,
  reactlogo,
} from "../../Assets/Index";
import Marquee from "react-fast-marquee";
const Marque = () => {
  const imgSrc = [
    { img: expresslogo, alt: "expresslogo" },
    { img: python, alt: "python" },
    { img: htmllogo, alt: "htmllogo" },
    { img: csslogo, alt: "csslogo" },
    { img: nodelogo, alt: "nodelogo" },
    { img: jslogo, alt: "jslogo" },
    { img: phplogo, alt: "phplogo" },
    { img: mongologo, alt: "mongologo" },
    { img: javalogo, alt: "javalogo" },
    { img: reactlogo, alt: "reactlogo" },
  ];

  return (
    <>
      <section
        className="our-clients mega-section wow fadeInUp"
        id="our-clients"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInUp",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="sec-heading centered">
            <div className="content-area ">
              <h6
                className="titler wow fadeInUp"
       
                style={{
                  visibility: "visible",
                  fontSize: "1.8rem",
                  marginTop: "15px",
                }}
              >
                Driving Innovation and Success with Advanced Technology
                Solutions
              </h6>
            </div>
          </div>

          <Marquee speed={100}  delay={5}>
            {imgSrc.map((val, item) => {            
              return (
                <div className="client-logo " key={item}>
                  <img className="img-fluid logo" src={val.img} alt={val.alt}/>
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Marque;
