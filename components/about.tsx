import { Box, Flex, Heading, Image, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { decorationColor } from './hero';

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='64px' textDecor='underline' textDecorationColor={decorationColor}>
				About Me
			</Heading>
			<Flex
				alignItems='center'
				mt={4}
				flexDirection={{
					base: 'column',
					md: 'row',
				}}
			>
				<Image
					alt=''
					src={'/images/portugal.jpeg'}
					w={{ base: '60%', md: '30%' }}
					style={{ aspectRatio: '1' }}
					borderRadius='10%'
					m={4}
				/>
				<Stack ml={{ base: 0, md: 8 }} spacing={4}>
					<Text>
					Hey there, I’m Laura! I’m a product manager who loves to problem-solve and consider how products can better address the pain points experienced by their users.   

					</Text>
					<Text>
					I’m currently in my third year of Systems Design Engineering at the University of Waterloo and seeking internship opportunities for Fall 2023 in product related roles.
					</Text>
					<Box mt={6}>
						<Text fontSize='lg' fontWeight='bold'>
							Some of my current goals and interests are...
						</Text>
						<UnorderedList>
							<ListItem>
								Completing my 3A term of engineering this summer in Waterloo.
							</ListItem>
							<ListItem>
								Training for a marathon (spring 2024 in Toronto). 
							</ListItem>
							<ListItem>
								Preparing for an exchange term in Sweden next year.
							</ListItem>
							<ListItem>
								Planning ProdCon 2023 with the UW Product Management Club. 
							</ListItem>
							<ListItem>
								Spending time with family, camping, and improving my baking skills.
							</ListItem>
						</UnorderedList>
					</Box>
				</Stack>
			</Flex>
		</Box>
	);
};

export default About;
