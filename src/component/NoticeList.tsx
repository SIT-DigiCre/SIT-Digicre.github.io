import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";
import { NoticesItem } from "../common";

const NoticeList: React.FC<Props> = (props) => {
  const style = {};

  return (
    <ListGroup className="overflow-auto" style={{ height: 450 }}>
      {props.noticesItemList.map((noticesItem: NoticesItem) => (
        <ListGroup.Item>{noticesItem.date + " - " + noticesItem.text}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};
type Props = {
  noticesItemList: NoticesItem[];
};

export default NoticeList;
