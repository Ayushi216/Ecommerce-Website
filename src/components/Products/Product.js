import React from "react";

import AvailableProducts from "./AvailbleProducts";

const Product = (props) => {
    return <section>
        <div>
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <h1>{props.price}</h1>
        </div>
    </section>
}

export default Product;