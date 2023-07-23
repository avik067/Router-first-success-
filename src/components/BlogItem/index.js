import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, author, title, topic, avatarUrl, imageUrl} = details

  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="row-nor list-item">
        <img className="topic-img " src={imageUrl} alt={topic} />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="row-nor">
            <img className="avatar-img" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
