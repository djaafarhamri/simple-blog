import Blogs from './Blogs';
import { useEffect, useState } from 'react';


const Home = () => {
    const [data, setdata] = useState(null)
    useEffect(() => { 
        fetch("http://localhost:4000/blogs")
          .then(res => {return res.json()})
          .then(data => setdata(data))
    }, [])                      
    data && console.log(data[2])
    return(
        <div className='blogs'>
            {data && <Blogs blogs={data}/>}
        </div>
    )
}
export default Home;