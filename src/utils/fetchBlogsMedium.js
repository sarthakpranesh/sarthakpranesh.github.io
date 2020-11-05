// Retrieve blog posts from Medium 
const fetchBlogsMedium = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sarthakpranesh08')
            .then((d) => d.json())
            .then((data) => {
                const liteBlogs = data.items.map((blog) => {
                    return {title: blog.title, thumbnail: blog.thumbnail, categories: blog.categories};
                })
                resolve({
                    blogs: data.items,
                    liteBlogs: liteBlogs,
                    loading: false,
                })
            })
            .catch((err) => {
                console.log("Error while fetching Medium Blogs: ", err.message);
                reject({
                    blogs: [],
                    liteBlogs: [],
                    loading: false,
                })
            })
    })
}

export default fetchBlogsMedium;