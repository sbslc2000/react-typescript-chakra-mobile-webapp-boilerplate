import {Box, Flex} from "@chakra-ui/react";
import {PageLoader} from "@/components/PageLoader.tsx";
import {BottomNavigationBar} from "@/components/BottomNavigationBar.tsx";

export interface PageWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    isLoading?: boolean;
    navItem: string;
}

export function PageWrapper({children, navItem, isLoading = false}: PageWrapperProps) {
    return (
        <Flex
            direction={'column'}
            w={'full'}
        >
            {isLoading ? <PageLoader/> : children}
            <Box h={'150px'}/>
            <BottomNavigationBar navItem={navItem}/>
        </Flex>
    )
}