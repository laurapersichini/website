import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { decorationColor, decorationColorDark } from './hero';

type ExperienceInfo = {
	date: string;
	companyName: string;
	positionName: string;
	description: string;
	imagePath: string;
	removeExtraBottomLine?: boolean;
};

export const Experience = () => {
	return (
		<Box id='experience'>
			<Heading mt='64px' textDecor='underline' textDecorationColor={decorationColor}>
				Experience
			</Heading>
			<Box mt={6}>
				<SingleExperience
					date='Jan - Apr 2023'
					companyName='Nuclear Promise X'
					positionName='Product Manager'
					description='Worked to digitize manual processes by managing a cross-functional team through releases of 3 main projects.'
					imagePath='/images/npx.png'
				/>
				<SingleExperience
					date='May - Aug 2022'
					companyName='View the Space (Lane)'
					positionName='Frontend Engineer'
					description='Developed features that focused on enhancing the tenant-landlord experience across North America.  '
					imagePath='/images/vts.jpeg'
				/>
				<SingleExperience
						date='Sept - Dec 2021'
						companyName='DarwinAI'
						positionName='Full Stack Developer'
						description='Built out user-facing features for a defect-detection image viewer. '
						imagePath='/images/darwinai.jpeg'
				/>
				<SingleExperience
					date='Jan - Apr 2021'
					companyName='Maplesoft'
					positionName='Quality Assurance Analyst'
					description='Tested the flagship product -- Maple -- to identify bugs and areas for improvement across three platforms.  '
					imagePath='/images/maplesoft.png'
					removeExtraBottomLine={true}
				/>
			</Box>
		</Box>
	);
};

const SingleExperience = ({
	companyName,
	date,
	description,
	imagePath,
	positionName,
	removeExtraBottomLine = false,
}: ExperienceInfo) => {
	return (
		<Flex>
			<Box w='20%'>
				<Text>{date}</Text>
			</Box>
			<Box ml={2} mr={6} position='relative'>
				<Box w='8px' h='8px' bgColor={decorationColorDark} borderRadius='50%' position='absolute'></Box>
				<Box w='2px' h='100%' bgColor={decorationColorDark} position='absolute' left='3px'></Box>
			</Box>
			<Box pb={removeExtraBottomLine ? 0 : 8} w='80%'>
				<Flex justifyContent='space-between'>
					<Box>
						<Text fontSize='lg'>{companyName}</Text>
						<Text fontSize='lg' fontWeight='bold'>
							{positionName}
						</Text>
					</Box>
					<Image alt='' src={imagePath} h={12} />
				</Flex>
				<Text>{description}</Text>
			</Box>
		</Flex>
	);
};
