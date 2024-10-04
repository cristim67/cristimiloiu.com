import React, { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal.component";

interface PortfolioItem {
  id: number;
  type: string;
  image: string;
  tag: string[];
  delayAnimation: string;
}

const Portfolio: React.FC = () => {
  const [getModal, setGetModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(1);

  const handleModal = (id: number) => {
    setGetModal(true);
    setModalId(id);
  };

  const renderPortfolioItems = (filterType: string) => {
    return PortfolioData
      .filter(
        (item: PortfolioItem) => filterType === "All" || item.tag[0].toLowerCase() === filterType.toLowerCase()
      )
      .map((item: PortfolioItem) => {
        const { id, type, image, delayAnimation } = item;

        return (
          <div
            key={id}
            data-aos="fade-right"
            data-aos-delay={delayAnimation}
          >
            <div
              className="tab-content"
              onClick={() => handleModal(id)}
            >
              <img src={image} alt="portfolio project demo" />
              <h3>
                <span className="content-title">{type}</span>
              </h3>
            </div>
          </div>
        );
      });
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>All</Tab>
            <Tab>Website</Tab>
            <Tab>Article</Tab>
            <Tab>Machine Learning</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {renderPortfolioItems("All")}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {renderPortfolioItems("website")}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {renderPortfolioItems("article")}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {renderPortfolioItems("machine learning")}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;