import About from "../pages/About";
import Login from "../pages/Login";
import Postidpage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Memes from "../pages/Memes";

export const privateRoutes = [
  {path: '/about', component: <About/>, exact: true},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <Postidpage/>, exact: true},
  {path: '/memes', component: <Memes/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
]