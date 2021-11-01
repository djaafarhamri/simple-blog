import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>that page cannot be found</p>
            <Link to='/'>back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;