import logo from './logo.svg';
import Home from './Home';
import Header from './header';
import { useState, useEffect } from 'react';
import useFetch from './customeHooks/useFetch';


function App() {
     const {data,error} = useFetch('http://localhost:3000/blogs');
      return <>
            <Header />
            {error &&  <div className='alert alert-danger m-2 w-50 text-center'>{error}</div>}
            {data && <Home blogsData={data}  />}

      </>
}

export default App;
