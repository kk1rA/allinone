import About from "../pages/About";
import Postidpage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  {path: '/about', component: <About/>, exact: true},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <Postidpage/>, exact: true},
]