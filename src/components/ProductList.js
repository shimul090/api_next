import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Products from './Products';
import SortProduct from './SortProduct';
import BasicButtons from './BasicButtons';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProductList({productList, getDetails, setSortOrder, addItem, deleteItem}) {
	return(
		<>
			<Container>
				<Box sx={{ flexGrow: 1 }} style={{marginTop:'3rem'}}>
					<Grid container spacing={2}>
						<Grid item md={6}>
							<Item>
								<SortProduct setSortOrder={setSortOrder} />
							</Item>
						</Grid>
						<Grid item md={6}>
							<Item>
								<BasicButtons addItem={addItem} />
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						{
							productList.map(product => {
		        				return (
					            	<Grid item md={3} style={{marginTop:'3rem'}} key={product.id}>
					            		<Item>
					                		<Products product={product} getDetails={getDetails} deleteItem={deleteItem} />
					                	</Item>
					            	</Grid>
		        				);
		    				})
						}
					</Grid>
				</Box>
			</Container>
		</>
	);

}

export default ProductList;