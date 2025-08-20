// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';

const Homepage = () => {
	// await delay(2000); // Simulate a delay of 2 second for test
	return (
		<>
			<ProductList
				data={sampleData.products}
				title="Newest Arrivals"
				limit={4}
			/>
		</>
	);
};

export default Homepage;
