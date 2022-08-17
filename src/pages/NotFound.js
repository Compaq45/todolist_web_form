import React, {Fragment} from "react";
import {Navigate, Redirect} from "react-router-dom";

export const NotFound = () => {
    return (
        <Fragment>
        <h1>Не шалим</h1>
            <Navigate to="/tasks"/>
        </Fragment>
    )
}