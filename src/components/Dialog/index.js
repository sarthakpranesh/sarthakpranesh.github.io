import React from 'react';
import {Dialog as Dl, Card, Button} from 'ui-neumorphism';

// importing Styles
import '../../Styles.css';

const Dialog = (props) => {

    return (
        <Dl
            minWidth={300}
            maxWidth={300}
            visible={props.visible}
            persistent={false}
            onClose={props.onClose}
            >
            <Card className="dialogContainer">
                <h4 className="dialogText">Project Link Copied <span role="img" aria-label="Thumbs up">👍</span></h4>
                <Button onClick={props.onClose}>
                    close
                </Button>
            </Card>
        </Dl>
    );
}

export default Dialog;
