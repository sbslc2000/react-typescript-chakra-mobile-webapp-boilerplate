import {Box} from "@chakra-ui/react";
import {PageWrapper} from "@/components/PageWrapper.tsx";

export function SearchPage() {
    return (
        <PageWrapper isLoading={false} headerTitle={'Search'} navItem={'search'}>
            <Box>search page</Box>
        </PageWrapper>
    )
}