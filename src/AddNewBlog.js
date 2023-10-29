import { useState } from "react";



const AddNewBlogs = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [des, setDesc] = useState('');
const handlesubmit = (e)=>{
    e.preventDefault();
    const blog = {title,author,des}
    fetch('http://localhost:3000/blogs',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(
        console.log("new blog added")
    );
}
    return <>
        <div className="container mt-5 w-50">
            <form onSubmit= {handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="auther" className="form-label">Author</label>
                    <input type="text" className="form-control" id="auther" value={author} onChange={(e) => { setAuthor(e.target.value) }} placeholder="Enter auther" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <textarea className="form-control" id="desc" rows="3" value={des} onChange={(e) => { setDesc(e.target.value) }}></textarea>
                </div>
                <div>
                    <button className="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </>
}

export default AddNewBlogs;