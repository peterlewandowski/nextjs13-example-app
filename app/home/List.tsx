// 'use client'

// import { useEffect, useState } from "react";

async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', /* {next: {revalidate: 30 }} */ {cache: 'no-store'});
    
    if(!response.ok) {
        throw new Error("failed to fetch data");
    }
    
    return response.text();
}

export default async function List() {

    const data = await getData();
    const dataObj = JSON.parse(data);

    return(
        <>
            {JSON.stringify(data)}
        </>
    )
}

// export default function List() {
        
//         const [data, setData] = useState<any[]>([]);
        
//         useEffect(() => {
//             getData().then((data) => {
//                 setData(data);
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }, []);
        
//         return (
//             <div>
//                 <h1>Posts</h1>
//                 {data.map((post) => {
//                     return (
//                         <div key={post.id}>
//                             <h2>{post.title}</h2>
//                             <p>{post.body}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
// }