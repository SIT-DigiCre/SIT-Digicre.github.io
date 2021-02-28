import React, { useState, useEffect } from 'react';
import { Carousel, Modal,ResponsiveEmbed } from 'react-bootstrap';
import { CarouselItem } from '../common';

const SlideViewer: React.FC<Props> = (props) => {
  const [index, setIndex] = useState(0);
  const [youtube, setYoutube] = useState("");
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }
  const slideViewItemOnClick = () => {
    const targetCarouselItem = props.carouselItemList[index];
    if (targetCarouselItem.youtube !== "") {
      setYoutube(targetCarouselItem.youtube);
    }
  }
  const imageStyle: ImageStyle = {
    objectFit: "cover"
  }
  type ImageStyle = {
    objectFit: "cover" | "fill" | "none" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "contain" | "scale-down" | undefined;
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
          props.carouselItemList.map((carouselItem: CarouselItem) => (
            <Carousel.Item onClick={slideViewItemOnClick}>
              <ResponsiveEmbed aspectRatio="16by9"><img
                className="d-block w-100"
                src={"./image/" + carouselItem.image_name + ".png"}
                alt="First slide"
                style={imageStyle}
              /></ResponsiveEmbed>
            </Carousel.Item>
          ))
        }
      </Carousel>
      <Modal
        size="lg"
        show={youtube !== ""}
        onHide={() => setYoutube("")}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src={youtube} allowFullScreen></iframe>
          </ResponsiveEmbed>
        </Modal.Body>
      </Modal>
    </div>

  );
}
type Props = {
  carouselItemList: CarouselItem[];
};

export default SlideViewer;