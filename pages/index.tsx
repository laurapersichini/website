import { Box, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import About from '../components/about';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Experience } from '../components/experience';

const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<Box>
			<Navbar />
			<Stack maxW='1400px' margin='0 auto' w={{ base: '90vw', sm: '80vw' }}>
				<Hero />
				<About />
				<Experience />
				<Footer />
			</Stack>
		</Box>
	);
};

export default Home;
