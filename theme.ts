import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'light',
};

const components = {
	Link: {
		baseStyle: (props: StyleFunctionProps) => ({}),
	},
};

const styles = {
	global: (props: any) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			bg: '#fff',
		},
	}),
};

const theme = extendTheme({ config, styles, components });

export default theme;
