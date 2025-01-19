import {Box} from "@chakra-ui/react";
import {PageWrapper} from "@/components/PageWrapper.tsx";

export function BoardPage() {
    return (
        <PageWrapper isLoading={false} headerTitle={'Board'} navItem={'board'}>
            <Box>Board page</Box>
        </PageWrapper>
    )
}