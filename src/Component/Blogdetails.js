import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const [data, setdata] = useState(null)

  const { title } = useParams();
  const history = useHistory();
   console.log(title)
   useEffect(() => {
    fetch("http://localhost:4000/blogdetails/"+title)
      .then(res => {return res.json()})
      .then(data => setdata(data))
      .then(()=>{
        console.log('2'+title)
      })
}, [])

  const handleDelete = () => {
    fetch("http://localhost:4000/blogdetails/"+title, {
      method: 'DELETE'
    }).then(() => {
      console.log('deleted')
      history.push('/')
      }
    )
  }

  return (
    <div className="blog-details">
      {data && (
        <article>
          <h2>{ data.title }</h2>
          <p>written by { data.author }</p>
          <div>{ data.body }</div>
          {<button type='submit' onClick={handleDelete}>delete</button>}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;