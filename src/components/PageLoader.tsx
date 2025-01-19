import {Flex, Spinner} from "@chakra-ui/react";
import openColor from "open-color";

export function PageLoader() {
    return (
        <Flex w={'full'} h={'100vh'} justify={'center'} align={'center'}>
            <Spinner
                color={openColor.blue[7]}
                size={'xl'}
            />
        </Flex>
    );
}