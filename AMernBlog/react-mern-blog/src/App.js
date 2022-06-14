import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import AddBlog from './components/AddBlog';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Auth />}></Route>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />
            <Route path="/myblogs" element={<UserBlogs />} />
            <Route path="/myblogs/:id" element={<BlogDetail />} />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
