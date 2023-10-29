import useFetch from "./customeHooks/useFetch";
import { useParams } from "react-router-dom";
const EditBlog = () =>{
    const {id} = useParams();
    const {data:blogs,error} = useFetch('http://localhost:3000/blogs/' + id);
    return <>
    <h1>
       {blogs && (
        <div className="card" key={blogs.id}>
        <div className="card-header">
                {blogs.author}
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">{blogs.tittle}</p>
        </div>
    </div>
       )}
    </h1>
    </>
}

export default EditBlog;