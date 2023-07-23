import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogListData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const data = await fetch('https://apis.ccbp.in/blogs')
    const jsonData = await data.json()
    console.log(jsonData)
    const newDataArr = jsonData.map(each => ({
      id: each.id,
      author: each.author,
      title: each.title,
      topic: each.topic,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
    }))

    this.setState({blogListData: newDataArr, isLoading: false})
  }

  render() {
    const {blogListData, isLoading} = this.state
    return (
      <ul>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogListData.map(each => <BlogItem key={each.id} details={each} />)
        )}
      </ul>
    )
  }
}

export default BlogList
