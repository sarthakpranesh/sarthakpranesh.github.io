import React, {useState} from 'react';
import {IconButton as IC} from 'ui-neumorphism';
import {Share2} from 'react-feather';
import {useVibrate, useCopyToClipboard} from 'react-use';

//importing components
import Dialog from '../Dialog/index.js';

// importing Styles
import '../../Styles.css';

const IconButton = (props) => {
    const [visible, setVisible] = useState(false);
    const [vibrating, setVibrate] = useState(false);
    const [ , copyToClipboard] = useCopyToClipboard();
    useVibrate(vibrating, [100], false);

    const vibrate = () => {
        setVibrate(true);
    }

    return (
        <div>
            <IC 
                className="cardButtons" 
                text={false} 
                onClick={() => {
                    vibrate();
                    copyToClipboard(props.link);
                    setVisible(true);
                }}>
                <Share2 color="blue" size={24} />
            </IC>
            <Dialog visible={visible} onClose={() => {
                setVisible(false);
                setVibrate(false);
            }} />
        </div>
    )
}

export default IconButton;
