import { useState } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

//styles
import './assets/scss/app.scss'

//views
import Home from './views/Home';
import Project from './views/Project';
import Error from './views/Error';
import { useParams } from 'react-router-dom';

const App = () => {


    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route

        loader = {
            ({ params }) => {
                console.log(params["*"]);
            }
        }
        element = { < Project / > }
        path = "projects/:id" /
        >
        <
        Route path = '*'
        element = { < Error / > }
        /> <
        /Routes> <
        /BrowserRouter>
    )


}

export default App