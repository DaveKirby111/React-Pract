export default function Product() {

//     const products = [
//         {
//             id:1,
//             name: "Laptop"
//         },

//         {
//             id:2,
//             name: "Playstation"
//         },

//         {
//             id:3,
//             name: "Xbox"
//         }, 
// ];

//     const prodList = products.map((product) => (
//     <p key={product.id}>
//         {product.id}: {product.name}
//         </p>
//     ));


const products = [
    "Laptop",
    "Playstation",
    "Xbox"
];

const prodList = products.map((product, index) => (
    <p key={index}>
       {index + 1}: {product}
    </p>
));

    return <div> {prodList} </div>;
}