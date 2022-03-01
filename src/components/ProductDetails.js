import React from 'react';

import DetailProduct from './DetailProduct';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function ProductDetails({prodDetails, showProductList}) {
	return (
		<Container maxWidth="sm" style={{marginTop:'3rem'}}>
				<DetailProduct product={prodDetails}/>
	      <Button style={{marginTop:'3rem', float:'right'}} variant="contained" onClick={() => showProductList()}>Back</Button>
		</Container>
	);
}

export default ProductDetails;



