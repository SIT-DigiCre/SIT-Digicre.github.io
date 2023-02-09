import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";
import { NoticesItem } from "../common";

const NoticeList: React.FC<Props> = (props) => {
  const style = {};

  return (
    <ListGroup className="overflow-auto notices" style={{ height: 450 }}>
      {props.noticesItemList.map((noticesItem: NoticesItem) => (
        noticesItem.url !== undefined ?
          (
            <a href={noticesItem.url} target="_blank" rel="noopener noreferrer" style={{ color: "SteelBlue"}}>
              <ListGroup.Item >{noticesItem.date + " - " + noticesItem.text}</ListGroup.Item>
            </a>
          )
          :
          (
            <ListGroup.Item >{noticesItem.date + " - " + noticesItem.text}</ListGroup.Item>
          )
      ))
      }
    </ListGroup >
  );
};
type Props = {
  noticesItemList: NoticesItem[];
};

export default NoticeList;
