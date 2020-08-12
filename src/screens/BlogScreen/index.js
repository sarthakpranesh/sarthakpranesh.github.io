import React, {Component} from 'react';
import {IconButton} from 'ui-neumorphism'
import {ArrowLeft} from 'react-feather';

// importing styles
import './styles.css';
import '../../Styles.css';

class BlogScreen extends Component {
    constructor(props) {
        super(props);

        this.blog = this.props.data.blog;
    }

    componentDidMount(){
        document.getElementById('blog-content').innerHTML = this.blog.content;
        window.scroll(0,0);
    }

    render() {

        return (
            <div className="mainContainer">
                <IconButton
                    onClick={() => this.props.setScreen("Home")}
                    className="backArrow"
                    text={false}
                    size='large'
                    color='var(--warning)'
                    >
                    <ArrowLeft size={24} />
                </IconButton>
                <div className="blogContent" id="blog-content">
                </div>
            </div>
        );
    }
}

export default BlogScreen;
