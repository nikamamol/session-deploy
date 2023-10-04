//  "use client"

// // import Page from '@/Login/Page'
// import Link from 'next/link'
// import styles from './page.module.css'
// // import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'
// // import { useState } from 'react'

// export default function Home() {
// const router = useRouter()
// //  const [count,setCount]=useState(0)
//   return (
//     <main>
//    <h1>Event ,Function and state</h1>
// <Link href="/home">Go to Home Page</Link><br></br>
// <br></br>
// <Link href="/about">Go to About Page</Link><br></br>
// <br></br>
// <button onClick={()=>router.push("/contact")}>Go To Contact Page</button>
//     </main>
//   )
// }


import React from 'react'
import Child from './Child'
import DataFetch from './DataFetch'
// import { Children } from 'react/cjs/react.development'

function Page() {
  return (
    <div>
      <h1>Hello</h1>
    <DataFetch/>
    </div>
  )
}

export default Page



