import React, {Component} from 'react';
import {ProgressCircular} from 'ui-neumorphism';
import './Styles.css';
import 'ui-neumorphism/dist/index.css'

//  importing all screens
import HomeScreen from './screens/HomeScreen/index.js';
import BlogScreen from './screens/BlogScreen/index.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "Home",
      data: {},
      loading: true,
      liteBlogs: [],
      blogs: [],
    }
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sarthakpranesh08')
      .then((d) => d.json())
      .then((data) => {
          const liteBlogs = data.items.map((blog) => {
            return {title: blog.title, thumbnail: blog.thumbnail, categories: blog.categories};
          })
          this.setState({
            blogs: data.items,
            liteBlogs,
            loading: false,
          })
      })
      .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          })
      })
  }

  openBlogScreen = (index) => {
    const {blogs} = this.state;
    this.setScreen("Blog", {blog: blogs[index]});
  }

  setScreen = (screen, data = {}) => {
    this.setState({
      screen,
      data, 
    });
  };

  render() {
    const {screen, data, liteBlogs, loading} = this.state;
    if (loading) {
      return (
        <div className="mainContainer" style={{height: '100vh'}}>
          <ProgressCircular indeterminate color='var(--primary)' />
        </div>
      );
    }
    switch (screen) {
      case "Home": 
        return <HomeScreen openBlogScreen={this.openBlogScreen} setScreen={this.setScreen} data={{liteBlogs, ...data}} />;
      case "Blog":
        return <BlogScreen setScreen={this.setScreen} data={data} />;
      default:
        return <HomeScreen />;
    }
  }
}

export default App;
