// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
import { getLatestProducts } from '@/lib/actions/product.actions';
import ProductList from '@/components/shared/product/product-list';

const Homepage = async() => {
	// await delay(2000); // Simulate a delay of 2 second for test

  const latestProducts = await getLatestProducts()

	return (
		<>
			<ProductList
				data={latestProducts}
				title="Newest Arrivals"
				limit={4}
			/>
		</>
	);
};

export default Homepage;
