import { useState } from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
    const blogs = props.blogsData;

    return <>
        <div className="container mt-3 w-50">
            {blogs.map((blogs) => (
                <div className="card" key={blogs.id}>
                    <div className="card-header">
                            {blogs.author}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">{blogs.tittle}</p>
                        <Link to={`/blog/${blogs.id}`}>
                            <button className="btn btn-primary">Go somewhere</button>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </Link>
                        
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default Home;