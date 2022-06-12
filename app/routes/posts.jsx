import { Outlet } from "@remix-run/react";

export default function () {
    return(
        <>
        <h1>
            Posts here
        </h1>
        <Outlet/>
        </>
    )
}