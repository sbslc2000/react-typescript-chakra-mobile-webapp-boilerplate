import {Flex} from "@chakra-ui/react";
import {PageWrapper} from "@/components/PageWrapper.tsx";

export function HomePage() {
    return (
        <PageWrapper isLoading={false} headerTitle={'Home'} navItem={'home'}>
            <Flex gap={3} direction={'column'} mx={3}>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    Hello, World!
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    Vite
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    React
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    Typescript
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    Chakra-ui
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    boilerplate
                </Flex>
                <Flex bg={'white'} w={'full'} h={'120px'} boxShadow={'xs'} borderRadius={'md'} justify={'center'}
                      align={'center'}>
                    2025.01.19
                </Flex>
            </Flex>
        </PageWrapper>
    )
}