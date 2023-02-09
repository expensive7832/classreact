import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Spinner } from "reactstrap"

const Home = React.lazy(() => import("./Pages/Home"))
const Signup = React.lazy(() => import("./Pages/SIgnup"))
const Login = React.lazy(() => import("./Pages/Login"))
const Landing = React.lazy(() => import("./Pages/Landing"))



function App(){
    return(
        <React.Suspense fallback={
            <div className="position-absolute top-50 start-50 translate-middle text-danger">
                <Spinner type="grow"/>
            </div>
        }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Landing/> }/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/signup" element={ <Signup/> }/>
                    <Route path="/login" element={ <Login/> }/>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    )
}


export default App