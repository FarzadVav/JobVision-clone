import {ReactNode} from "react";
import {ConfigProvider} from "antd";

type AntDesignConfigProps = {
	children: ReactNode
}
const AntDesignConfig = ({children}: AntDesignConfigProps) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#5660f2',
					colorBgBase: '#fff',
					colorWhite: '#fff',
					colorText: '#121315',
					colorError: '#fa5555',
					colorWarning: '#E1BC29',
					colorSuccess: '#45c26f',
					colorInfo: '#0fa5e9'
				},
				components: {
					Button: {
						controlHeight: 43,
						paddingContentHorizontal: 24,
						paddingContentVertical: 8,
						borderRadius: 5
					},
					Input: {
						controlHeight: 43,
						paddingContentHorizontal: 24,
						paddingContentVertical: 8,
						borderRadius: 5
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntDesignConfig;