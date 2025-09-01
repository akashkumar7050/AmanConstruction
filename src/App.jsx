import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar /> <Home />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar /> <About />
      </>
    },
    {
      path: "/blog",
      element: <>
        <Navbar /> <Blog />
      </>
    },
    {
      path: "/contact",
      element: <>
        <Navbar /> <Contact/>
      </>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App