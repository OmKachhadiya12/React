import React, { useEffect, useState } from "react";

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/OmKachhadiya12')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[]);


    return(
        <div className="text-center bg-gray-600 m-4 text-white text-3xl p-4">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github;