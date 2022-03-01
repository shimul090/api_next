import React from 'react';
import Typography from '@mui/material/Typography';



function Products({product}) {

    return (
        <>
            <Typography variant="h4" color="green">
                {product.title}
            </Typography>
            <Typography variant="h6" color="blue">
                Category:{product.category}
            </Typography>
            <img src={product.image} alt="Paella dish" style={{height:300}} />
            <Typography variant="h6" color="black">
                Price: {product.price}
            </Typography>
            <Typography variant="h4" color="black">
                Description
            </Typography>
            <Typography variant="p" color="black">
                {product.description}
            </Typography>
        </>
    );
}

export default Products;