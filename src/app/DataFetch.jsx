


// export async function getServerSideProps() {
//   console.log("getServerSideProps is called")
//   const responce = await fetch("https://dummyjson.com/products")
//   let data = await responce.json()
// //   console.log(data.products)
//   return {
//     props: {
//       data,
//     }
//   }
// }

// export default function DataFetch({ data }) {
//   return (
//     <div className="container">
//       <h1>Product list</h1>
//       <ul className="list-group">
//         {data.products.map((item) => (
//           <li className="list-group-item" key={item.id}>
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React from 'react'

 export  async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data=await data.json()
    return data.products

}



 export default async function DataFetch() {
    let products= await productList()
    console.log(products)

  return (
<h1>Hello</h1>
  )
}




