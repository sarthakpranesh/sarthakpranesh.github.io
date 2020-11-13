import React, {Component} from 'react';
import {
    H4,
    H6,
    Alert,
    Carousel,
    Chip,
    CarouselItem,
    Card,
    CardHeader,
    CardAction,
    Body2,
    CardContent,
    CardMedia,
    Button,
    ProgressCircular,
} from 'ui-neumorphism';

// importing components
import IconButton from '../../components/IconButton/index.js';
import ShareButton from '../../components/ShareButton/index.js';

// importing styles
import './styles.css';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.whatILove = [
            {
                color: "#3CDBFB",
                title: "React Native"
            },{
                color: "#8CC84B",
                title: "Nodejs"
            },{
                color: "#4630EB",
                title: "Expo"
            },{
                color: "#FCCA3F",
                title: "Firebase"
            },{
                color: "#4DD0E1",
                title: "Go Lang"
            },{
                color: "#442D22",
                title: "Mongo Atlas"
            },{
                color: "#3771A2",
                title: "Python"
            },{
                color: "#3771A0",
                title: "Mininet"
            },{
                color: "#E44D26",
                title: "HTML5"
            },{
                color: "#7F8B99",
                title: "C Lang"
            },{
                color: "#5C8DBC",
                title: "C++"
            },{
                color: "#092E20",
                title: "Django",
            },{
                color: "#F8981D",
                title: "Java",
            },{
                color: "#2B2E3A",
                title: "Electron Js",
            },{
                color: "black",
                title: "Blogging",
            },{
                color: "red",
                title: "Guitar",
            },{
                color: "green",
                title: "Planting",
            }
        ];
    }

    render () {
        const blogs = this.props.data.liteBlogs;
        const projects = this.props.data.projects;

        return (
            <div className="mainContainer">
                <div className="subContainer homeLandingSection">
                    <Alert className="landingHeading" color='black' type='success' >
                        <H4 className="H4">Sarthak Pranesh</H4>
                    </Alert>
                    <H6>I'm an artist</H6>
                </div>

                <div className="subContainer wrappedContainer">
                    <Alert color='black' type='success' dense >
                        <h2>About Me</h2>
                    </Alert>
                    <h3 className="aboutMeBody">
                        Hello <span role="img" aria-label="hand wave">👋</span>, I am a Software Developer, Technical Blogger and Linux Enthusiast <span role="img" aria-label="penguin">🐧</span>. 
                        I love playing with and creating APIs, especially in Nodejs and Golang. I am 
                        passionate about creating end user application using React Native, JavaFx and 
                        Electron Js. Always interested in distributed computing and learning new technologies.
                        <br />
                        <br />
                        <span role="img" aria-label="heart">❤️</span> Loving Open Source
                    </h3>
                </div>

                <div className="subContainer wrappedContainer">
                    <Alert color='black' type='success' dense >
                        <h2>What I Love To Do</h2>
                    </Alert>
                    <div className="whatIDoChipContainer">
                        {
                            this.whatILove.map((d, index) => {
                                return (
                                    <Chip key={index} label color={d.color} className="whatILoveChips">
                                        <H6 style={{color: d.color}}>{d.title}</H6>
                                    </Chip>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="subContainer wrappedContainer projectContainer">
                    <Alert className="projectTitle" color='black' type='success' dense >
                        <h2>Technical Blogs</h2>
                    </Alert>
                    <Carousel
                                height={540}
                                showArrowsOnHover
                                cycle
                                interval={10000}
                                className="projectCar">
                    {
                        this.props.isLoading === false ? 
                        (
                            blogs.map((d, index) => {
                                return (
                                    <CarouselItem key={index} className="projectCI">
                                        <Card className="projectCard">
                                            <CardHeader
                                                title={<H6>{d.title}</H6>}
                                            />
                                            <CardMedia dark src={d.thumbnail} />
                                            <CardContent>
                                                {
                                                    d.categories.map((category, index) => {
                                                        return (
                                                            <Chip key={index} label className="whatILoveChips">
                                                                <h3>{category}</h3>
                                                            </Chip>
                                                        );
                                                    })
                                                }
                                            </CardContent>
                                            <CardAction className="cardActions">
                                                <Button onClick={() => this.props.openBlogScreen(index)}>Read Blog</Button>
                                            </CardAction>
                                        </Card>
                                    </CarouselItem>
                                );
                            })
                        ) : (
                            <CarouselItem key={1} className="projectCI">
                                <ProgressCircular light indeterminate size={64} width={8} color='var(--primary)' />
                            </CarouselItem>
                        )
                    }
                    </Carousel>
                </div>
                
                <div className="subContainer wrappedContainer projectContainer">
                    <Alert className="projectTitle" color='black' type='success' dense >
                        <h2>My Loved Projects</h2>
                    </Alert>
                    <Carousel
                        showArrowsOnHover
                        cycle
                        interval={10000}
                        className="projectCar">
                        {
                            this.props.isLoading === false ? 
                                (
                                    projects.map((d, index) => {
                                        return (
                                            <CarouselItem  key={index} className="projectCI">
                                                <Card className="projectCard">
                                                    <CardHeader
                                                        title={<H6>{d.title}</H6>}
                                                    />
                                                    <CardContent>
                                                        <Body2>
                                                            {d.about}
                                                        </Body2>
                                                    </CardContent>
                                                    <CardContent className="cardTags">
                                                        {
                                                            d.tags.map((category, index) => {
                                                                return (
                                                                    <Chip key={index} label className="whatILoveChips">
                                                                        <h3>{category}</h3>
                                                                    </Chip>
                                                                );
                                                            })
                                                        }
                                                    </CardContent>
                                                    <CardAction className="cardActions">
                                                        <IconButton onClick={() => window.open(d.link, "_blank")} name="github" />
                                                        <ShareButton link={d.link} />
                                                    </CardAction>
                                                </Card>
                                            </CarouselItem>
                                        );
                                    })
                                ) : (
                                    <CarouselItem key={1} className="projectCI">
                                        <ProgressCircular light indeterminate size={64} width={8} color='var(--primary)' />
                                    </CarouselItem>
                                )
                        }
                    </Carousel>
                </div>
            
                <div className="subContainer wrappedContainer">
                    <Alert color='black' type='success' dense >
                        <h2>Let's Talk</h2>
                    </Alert>
                    <h3 className="aboutMeBody">
                        I am open for chit chat, so lets get in touch or plan a coffee <span role="img" aria-label="coffee">☕️</span>
                    </h3>
                    <div className="socialMediaLinksContainer">
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/sarthakpranesh/", "_blank")} name="linkedin" />
                        <IconButton onClick={() => window.open("https://www.instagram.com/sarthakpranesh/", "_blank")} name="instagram" />
                        <IconButton onClick={() => window.open("https://www.facebook.com/sarthak.pranesh.9/", "_blank")} name="facebook" />
                        <IconButton onClick={() => window.open("https://twitter.com/SarthakPranesh", "_blank")} name="twitter" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScreen;
