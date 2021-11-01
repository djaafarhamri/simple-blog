import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    

    const handleSubmit = (e) => {
        setIsPending(true)
        e.preventDefault();
        fetch("http://localhost:4000/create" , {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title,
                body,
                author
            })
        }).then(() => {
            console.log("blog added");
            setIsPending(false);
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                placeholder="title"
                required
                value={ title }
                onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea 
                type="text" 
                placeholder="body"
                required
                value={ body }
                onChange={(e) => {setBody(e.target.value)}}
                />
                <label>Blog author:</label>
                <input
                    type="text" 
                    placeholder="author"
                    required                    
                    value={ author }
                    onChange={(e) => {setAuthor(e.target.value)}}
                />
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;