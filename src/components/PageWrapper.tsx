import {Box, Flex} from "@chakra-ui/react";
import {PageLoader} from "@/components/PageLoader.tsx";
import {Header} from "@/components/Header.tsx";
import {BottomNavigationBar} from "@/components/BottomNavigationBar.tsx";

export interface PageWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    isLoading?: boolean;
    navItem: string;
}

export function PageWrapper({children, headerTitle, navItem, isLoading = false}: PageWrapperProps) {
    return (
        <Flex
            direction={'column'}
            w={'full'}
        >
            <Header title={headerTitle}/>
            <Box h={'54px'}/>
            {isLoading ? <PageLoader/> : children}
            <Box h={'150px'}/>
            <BottomNavigationBar navItem={navItem}/>
        </Flex>
    )
}