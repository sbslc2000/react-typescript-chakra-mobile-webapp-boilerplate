import {Box, Flex, Image, Text, useBreakpointValue} from "@chakra-ui/react";
import openColor from 'open-color';
import logo from '../assets/react.svg'

export interface MobileFrameWrapperProps {
    children: React.ReactNode,
}

export function MobileFrameWrapper({children}: MobileFrameWrapperProps) {
    const isWideScreen = useBreakpointValue({base: false, sm: true});
    return (
        <Flex bg={openColor.gray[1]} w={'100vw'} className={'no-drag'}>
            <Flex m={'0 auto'} w={{base: 'full', sm: 'auto'}}>
                {isWideScreen &&
                    <Flex align={'center'} w={'360px'}>
                        <AppDescription/>
                    </Flex>
                }
                <Box
                    w={{base: 'full', sm: '375px'}}
                    h={'100vh'}
                    overflowY={'scroll'}
                    bg={openColor.gray[0]}
                    className={'hide-scrollbar'}
                >
                    {children}
                </Box>
            </Flex>
        </Flex>
    )
}

export function AppDescription() {
    return (
        <Flex
            direction={'column'}
            align={'center'}
            bg={'white'}
            borderRadius={'2xl'}
            boxShadow={'xs'}
            px={10}
            py={6}
        >
            <Image src={logo} w={'72px'} h={'64px'} m={3}/>
            <Text fontSize={'lg'} color={openColor.gray[8]} fontWeight={'600'}>
                App Name Here
            </Text>
            <Text fontSize={'md'} color={openColor.gray[7]}>
                Description for your app
            </Text>
        </Flex>
    );
}