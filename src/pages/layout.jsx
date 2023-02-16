import React from 'react'
import {Outlet} from "react-router-dom"

const layout = () => {
    return (
        <div>
        <Home />
        <Outlet />
        </div>
    )
}

export default layout;