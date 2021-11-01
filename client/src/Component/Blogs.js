import { Link } from 'react-router-dom';

const Blogs = ({blogs}) => {
   
    return (
        <div className='blogs'>
            <h1>All Blogs!!!</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key ={blog._id}>
                    <Link to={`/blogs/${blog.title}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    <p><br></br></p>
                </div>
            ))}
        </div>
    )
}
export default Blogs;