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
} from 'ui-neumorphism';

// importing components
import IconButton from '../../components/IconButton/index.js';
import ShareButton from '../../components/ShareButton/index.js';

// importing styles
import './styles.css';

const myProjects = [
    {
        title: "Cosmos",
        body: 
        "Cosmos is an open source project made and maintained by the community. The project aims to provide a dedicated platform for it's users to have there own personal dedicated social media for there friend and work circle. We achieve this by utilizing Boxes. Inside of each box you add users by there email that are relevant to that box. This helps you focus and share content in relevant groups to whom that information matters.",
        link: "https://github.com/sarthakpranesh/cosmos.ReactNative",
    },{
        title: "Formilio",
        body:
        "The goal behind formilio is to provide an open source form generation tool ( like google forms ), keeping in mind ease of access and usability. Using Formilio is simple and straight forward, you create a form and the app will provide you with a unique url. You can share this url to collect responses.",
        link: "https://github.com/sarthakpranesh/formilioReactNative",
    },{
        title: "Toy Neural Network",
        body:
        "A small library that has it's own Matrix implementation and a 3 layered (input, hidden, output) Neural Network which utilizes this Matrix implementation. This is just a toy library that I created for revisiting my knowledge on the topic of Neural Networks and help me better myself at GO programming language.",
        link: "https://github.com/sarthakpranesh/nnGo",
    },{
        title: "Genetic Flappy Bird",
        body:
        "A small project which shows the beauty Genetic Algorithms and how they can be used. This small project was build using a small custom implementation of Neural Network, P5js and Bootstrap. The same can be replicated using tensorflow.js. The main reason behind using custom implementation of Neural Network was that it is more light weight and can be easily tweaked further for a specific problem.",
        link: "https://github.com/sarthakpranesh/geneticFlappyBird.io",
    },{
        title: "Enigma 6.0",
        body: 
        "Enigma is an online cryptic hunt conducted every year by IEEE VIT Vellore. Participants have to solve a series of mind boggling questions to win cash prizes! The 6th edition of Enigma saw me work in the backend team for the development of micro service architecture for hosting the event. The architecture consisted of 3 micro services maintaining three data tables and 1 micro service working as an API to fulfill requests.",
        link: "https://github.com/IEEE-VIT/enigma6",
    },{
        title: "Flappy RNB",
        body: "A simple, clean and classic Flappy Bird app made with React-Native cross platform framework. It utilizes the popular react-native-game-engine and also uses the well known js library call Matter JS.",
        link: "https://github.com/sarthakpranesh/flappyBird",
    },{
        title: "Covid 19",
        body: "The year of 2020 marked a devastating breakout of a killer virus called Corona. The Covid-19  variant of this virus recked havoc in the globe forcing countries to go under full lockdown. This app lets people see the latest trends related to this virus outbreak and also provides necessary contact information of the emergency helpline numbers.",
        link: "https://github.com/sarthakpranesh/Covid19-ReactNative",
    },{
        title: "MonsoonVibe",
        body: "This is one of my very first projects, a simple, easy to use Weather App. Nothing to fancy but aimed towards Environmental concerns including Global Warming and Deforestation. The aim of the project was to drive people's attention towards rapid climate changes taking place.",
        link: "https://github.com/sarthakpranesh/monsoonvibe-react-native",
    },{
        title: "Text - Generator",
        body: "This project is targeted to help kids suffering from dyslexia frame proper grammatical sentence by looking at the help text provided at the top. The project uses a NLP model build with love using keras and trained on a huge dataset so that it gets as close as the actual sentence that the kid wants to write helping them know the correct grammes before hand so they can frame proper sentences and learn.",
        link: "https://nlp-project-frontend.now.sh",
    },
]

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
        ]
    }

    componentDidMount() {
        console.log('Mounted');
    }

    render () {
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
                            this.whatILove.map((d) => {
                                return (
                                    <Chip label color={d.color} className="whatILoveChips">
                                        <H6 style={{color: d.color}}>{d.title}</H6>
                                    </Chip>
                                );
                            })
                        }
                    </div>
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
                                myProjects.map((d) => {
                                    return (
                                        <CarouselItem className="projectCI">
                                            <Card className="projectCard">
                                                <CardHeader
                                                    title={<H6>{d.title}</H6>}
                                                />
                                                <CardContent>
                                                    <Body2>
                                                        {d.body}
                                                    </Body2>
                                                </CardContent>
                                                <CardAction className="cardActions">
                                                    <IconButton onClick={() => window.open(d.link, "_blank")} name="github" />
                                                    {/* <IconButton name="heart" /> */}
                                                    <ShareButton link={d.link} />
                                                </CardAction>
                                            </Card>
                                        </CarouselItem>
                                    );
                                })
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
