// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await data.json()
    const newOb = {
      id: jsonData.id,
      author: jsonData.author,
      title: jsonData.title,
      content: jsonData.content,
      topic: jsonData.topic,
      avatarUrl: jsonData.avatar_url,
      imageUrl: jsonData.image_url,
    }
    this.setState({blogData: newOb})

    console.log(jsonData)
  }

  render() {
    const {blogData} = this.state
    const {id, author, title, content, topic, avatarUrl, imageUrl} = blogData
    return (
      <div className="col-nor">
        <h1>{title}</h1>
        <div className="row-nor">
          <img className="avatar-img" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="topic-img " src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
