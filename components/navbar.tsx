import {
	Flex,
	HStack,
	Link,
	Image,
	useBreakpointValue,
	useDisclosure,
	VStack,
	Box,
	Heading,
} from '@chakra-ui/react';

const Navbar = () => {
	const isDesktop = useBreakpointValue({ base: false, md: true });

	return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

const MobileNavbar = () => {
	const { isOpen, onClose, onToggle } = useDisclosure();

	return (
		<Flex
			justifyContent='space-between'
			py={3}
			px={6}
			pos='sticky'
			top='0'
			zIndex='999'
			alignItems='center'
			bg={'#ffffffee'}
		>
			<Link href='/#hero'>
				<Image src={'/images/tree.png'} w={8} h={8} alt='home' />
			</Link>

			<Box zIndex={100} onClick={onToggle}>
				<Box
					className='hamburger-line'
					bgColor={'#000'}
					borderRadius='md'
					transform={isOpen ? 'rotate(-45deg) translate(-10px, 2px)' : 'none'}
				></Box>
				<Box
					className='hamburger-line'
					bgColor={'#000'}
					borderRadius='md'
					opacity={isOpen ? 0 : 1}
				></Box>
				<Box
					className='hamburger-line'
					bgColor={'#000'}
					borderRadius='md'
					transform={isOpen ? 'rotate(45deg) translate(-10px, -2px)' : 'none'}
				></Box>
			</Box>
			<Flex
				className={isOpen ? 'mobile-nav-wrapper open' : 'mobile-nav-wrapper'}
				position='fixed'
				top={0}
				left={0}
				w='100vw'
				h='100vh'
				bgColor={'#1e2026fa'}
				flexDir='column'
				justifyContent='space-between'
				p={6}
				color={'#fff'}
			>
				<Box>
					<Heading textAlign='center' size='2xl' mb={6}>
						Laura Persichini
					</Heading>
					<VStack>
						<Link fontSize='2xl' href='/#hero' onClick={onClose}>
							Home
						</Link>
						<Link fontSize='2xl' href='/#about' onClick={onClose}>
							About Me
						</Link>
						<Link fontSize='2xl' href='/#experience' onClick={onClose}>
							Experience
						</Link>
					</VStack>
				</Box>
			</Flex>
		</Flex>
	);
};

const DesktopNavbar = () => {
	return (
		<Flex
			justifyContent='space-between'
			py={3}
			px={6}
			pos='sticky'
			top='0'
			zIndex='999'
			alignItems='center'
			bg={'#ffffffee'}
		>
			<Link href='/#hero'>
				<Image src={'/images/tree.png'} w={8} h={8} alt='home' />
			</Link>
			<HStack color={'#000'} spacing={14} alignItems='center' justifyContent='space-between'>
			
				
				<Link href='/#about' fontWeight='bold'>
					About Me
				</Link>
				<Link href='/#experience' fontWeight='bold'>
					Experience
				</Link>
			</HStack>
		</Flex>
	);
};

export default Navbar;
