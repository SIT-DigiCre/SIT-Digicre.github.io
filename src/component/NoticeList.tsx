import React, { useState } from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
import { NoticesItem } from '../common';

const NoticeList: React.FC<Props> = (props) => {
  return (
    <div>
      <ListGroup>
        {
          props.noticesItemList.map((noticesItem: NoticesItem) => (
            <ListGroup.Item>
              {noticesItem.date + " - " + noticesItem.text}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}
type Props = {
  noticesItemList: NoticesItem[];
};

export default NoticeList;