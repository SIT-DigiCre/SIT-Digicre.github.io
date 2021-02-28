import React from 'react';
import { Card } from 'react-bootstrap';

const TwitterBlock: React.FC<Props> = (props) => {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title style={{fontSize:25}}>{"- " + props.title + " -"}</Card.Title>

          </Card.Body>
        </Card>
      </div>
    );
  }
  type Props = {
    title: string,
    text: string,
  };
  
  export default TwitterBlock;