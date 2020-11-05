import React, {Component} from 'react';
import './Styles.css';
import 'ui-neumorphism/dist/index.css'

// importing configs
import {firebaseAuth} from './config/firebase';

// importing utils
import fetchBlogsMedium from './utils/fetchBlogsMedium';

//  importing all screens
import HomeScreen from './screens/HomeScreen/index';
import BlogScreen from './screens/BlogScreen/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "Home",
      data: {},
      loading: true,
      liteBlogs: [],
      blogs: [],
      user: null,
    }
  }

  componentDidMount() {
    // Sign in User anonymously
    if (this.state.user === null) {
      firebaseAuth.signInAnonymously()
        .then((user) => {
          this.setUser(user);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    fetchBlogsMedium()
      .then((resp) => this.setState(resp))
      .catch((errResp) => this.setState(errResp))
  }

  openBlogScreen = (index) => {
    const {blogs} = this.state;
    this.setScreen("Blog", {blog: blogs[index]});
  }

  setUser =  (user) => {
    this.setState({
      user,
    });
  }

  setScreen = (screen, data = {}) => {
    this.setState({
      screen,
      data, 
    });
  };

  render() {
    const {screen, data, liteBlogs, loading} = this.state;

    switch (screen) {
      case "Home": 
        return <HomeScreen isLoading={loading} openBlogScreen={this.openBlogScreen} setScreen={this.setScreen} data={{liteBlogs, ...data}} />
      case "Blog":
        return <BlogScreen isLoading={loading} setScreen={this.setScreen} data={data} />
      default:
        return <HomeScreen isLoading={loading} openBlogScreen={this.openBlogScreen} setScreen={this.setScreen} data={{liteBlogs, ...data}} />
    }
  }
}

export default App;
