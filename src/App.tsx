import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./assets/css/header.scss"
import "./assets/css/main.scss"
import "./assets/css/auxillary.css"
import ErrorBoundary from "./components/ErrorBoundary"
import RootElement from "./components/RootElement"
import HomePage from "./components/HomePage"
import ContactPage from "./components/ContactPage"
import WorkPage from "./components/GalleryPage"
import GalleryPage from "./components/GalleryPage"
import EventPage from "./components/EventsPage"

const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        element: <RootElement />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/gallery",
                element: <GalleryPage />
            },
            {
                path: "/events",
                element: <EventPage />
            },
        ]
    }
])

const App = () => {
    
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App