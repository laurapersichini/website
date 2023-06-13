import { Box, Flex, Heading, Icon, Text, Image, Link } from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { useRouter } from 'next/router';

export const decorationColorLight = '#47c9803b';
export const decorationColorDark = '#8cd196';
export const decorationColor = '#baeac1';

const Hero = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push('#about');
	};

	return (
		<Flex id='hero' h='100vh' direction='column' justifyContent='center' alignItems='center'>
			<Image alt='' src={'/images/headshot.png'} boxSize='15vmin' borderRadius='50%' />

			<Heading
				variant='h1'
				size='4xl'
				fontWeight='normal'
				textDecor='underline'
				textDecorationColor={decorationColor}
			>
				Laura Persichini
			</Heading>
			<Text variant='h2' fontSize='3xl' fontWeight='light'>
				Product Manager
			</Text>

			<Box mt={6} boxShadow='md' bgColor={decorationColorLight} px={4} py={2} borderRadius={4}>
				<Flex alignItems='center'>
					<Icon color='#0077b5' as={BsLinkedin} mr={2} />
					<Link href='https://www.linkedin.com/in/laura-persichini' isExternal>
						@laurapersichini
					</Link>
				</Flex>
				<Flex alignItems='center'>
					<Icon color='#000' as={AiOutlineMail} mr={2} />
					<Link href='mailto:lpersich@uwaterloo.ca?subject=Interest From Your Portfolio Website&body=Hi Laura,' isExternal>
						lpersich@uwaterloo.ca
					</Link>
				</Flex>
				<Text>Reach out for an updated resume</Text>
			</Box>

			<Icon
				as={HiChevronDoubleDown}
				boxSize='12'
				mt='15vh'
				cursor='pointer'
				onClick={handleClick}
			/>
		</Flex>
	);
};

export default Hero;
