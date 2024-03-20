import React from "react";
import img1 from "../../../assets/img/portfolio/project-1.jpg";
import img2 from "../../../assets/img/portfolio/project-2.jpg";
import portfolioVideo from "../../../assets/img/portfolio/video.mp4";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
interface ModalProps {
  modalId: number;
  setGetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modalId, setGetModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const closeModal = () => {
    setGetModal(false);
  };

  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={closeModal}></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => (
                  <div key={i} className="row open-sans-font">
                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-file-text-o pr-2"></i>
                      Project:{" "}
                      <span className="ft-wt-600 uppercase">
                        {details.project}
                      </span>
                    </div>
                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-user-o pr-2"></i>
                      Client:{" "}
                      <span className="ft-wt-600 uppercase">
                        {details.client}
                      </span>
                    </div>
                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-code pr-2"></i>
                      Language:{" "}
                      <span className="ft-wt-600 uppercase">
                        {details.language}
                      </span>
                    </div>
                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-external-link pr-2"></i>
                      Preview:{" "}
                      <a
                        className="preview-link"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href={details.link}
                      >
                        {details.preview}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <figure className="modal__img">
                {modalId === 2 ? (
                  <iframe
                    src="https://www.youtube.com/embed/7e90gBu4pas"
                    title="YouTube video player"
                    className="youtube-video"
                    allowFullScreen
                  ></iframe>
                ) : modalId === 3 ? (
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt="portfolio project demo" />
                    </div>
                    <div>
                      <img src={img1} alt="portfolio project demo" />
                    </div>
                    <div>
                      <img src={img2} alt="portfolio project demo" />
                    </div>
                  </Slider>
                ) : modalId === 4 ? (
                  <video
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={portfolioVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.image} alt="portfolio project demo" />
                )}
              </figure>
              <button className="close-modal" onClick={closeModal}>
                <img src={CloseImg} alt="portfolio project demo" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
