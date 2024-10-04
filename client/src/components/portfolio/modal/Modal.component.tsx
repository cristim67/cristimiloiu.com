import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
interface ModalProps {
  modalId: number;
  setGetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modalId, setGetModal }) => {
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
              <a href={item.modalDetails[0].github} target="_blank" rel="noopener noreferrer nofollow">
              <h2 className="heading mb-2">{item.type}</h2>
              </a>
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
                      <a href={details.clientLink} target="_blank" rel="noopener noreferrer nofollow">
                      <span className="ft-wt-600 uppercase">
                        {details.client}
                      </span>
                      </a>
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
                 <a href={item.modalDetails[0].preview} target="_blank" rel="noopener noreferrer nofollow">
                 <img src={item.image} alt="portfolio project demo" />
                 </a>
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
