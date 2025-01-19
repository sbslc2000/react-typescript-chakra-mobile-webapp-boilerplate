import {Box} from "@chakra-ui/react";
import {PageWrapper} from "@/components/PageWrapper.tsx";

export function MyPage() {
    return (
        <PageWrapper isLoading={false} headerTitle={'My Info'} navItem={'my'}>
            <Box>my page</Box>
        </PageWrapper>
    )
}