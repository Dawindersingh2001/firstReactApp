import logo from './logo.svg';
import Home from './Home';
import Header from './header';
import { useState, useEffect } from 'react';
import useFetch from './customeHooks/useFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditBlog from './EditBlog';
import AddNewBlogs from './AddNewBlog';
function App() {
      const { data, error } = useFetch('http://localhost:3000/blogs');
      console.log(data);
      return <>
            <Router>
                  <Header />
                  {error && <div className='alert alert-danger m-2 w-50 text-center'>{error}</div>}
                  <Routes>
                     <Route exact path='/' element={data && <Home blogsData={data} />}>
                        </Route>
                        <Route exact path='/blog/:id' element={<EditBlog/>}>
                        </Route>
                        <Route path = '/new' element = {<AddNewBlogs/>}>
                        </Route>
                  </Routes>
            </Router>
      </>
}

export default App;
