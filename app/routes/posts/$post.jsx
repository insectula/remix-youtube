import { useParams } from "@remix-run/react";

export default function () {
    const params = useParams();
    return(
        <>
        <h1>
            {params.post}
        </h1>
        
        </>
    )
}