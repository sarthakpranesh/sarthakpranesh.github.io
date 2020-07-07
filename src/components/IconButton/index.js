import React, {useState} from 'react';
import {IconButton as IC} from 'ui-neumorphism';
import {GitHub, Heart, Share2, Linkedin, Instagram, Facebook, Twitter} from 'react-feather';
import {useVibrate} from 'react-use';

const IconButton = (props) => {
    const [vibrating, setVibrate] = useState(false);
    useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], false);

    const renderIcon = () => {
        const {name} = props;
        switch (name) {
            case "github": 
                return <GitHub size={24} />;
            case "heart":
                return <Heart size={24} color="red" />
            case "share":
                return <Share2 size={24} color="blue" />
            case "linkedin":
                return <Linkedin size={24} />
            case "instagram":
                return <Instagram sizd={24} />
            case "facebook":
                return <Facebook size={24} />
            case "twitter":
                return <Twitter size={24} />
            default:
                return null;
        }
    }

    const vibrate = () => {
        setVibrate(true);
    }

    return (
        <IC 
            className="cardButtons" 
            text={false} 
            onClick={props.onClick ? props.onClick : vibrate}>
            {
                renderIcon()
            }
        </IC>
    )
}

export default IconButton;
