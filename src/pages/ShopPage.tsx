import {Box} from "@chakra-ui/react";
import {PageWrapper} from "@/components/PageWrapper.tsx";

export function ShopPage() {
    return (
        <PageWrapper isLoading={false} headerTitle={'Shop'} navItem={'shop'}>
            <Box>Shop page</Box>
        </PageWrapper>
    )
}