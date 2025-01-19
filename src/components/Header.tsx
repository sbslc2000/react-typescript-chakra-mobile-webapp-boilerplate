import {useNavigate} from "react-router";
import {Box, Flex, IconButton} from "@chakra-ui/react";
import openColor from "open-color";
import {IoArrowBackOutline} from "react-icons/io5";

export interface HeaderProps {
    title: string;
}

export function Header({title}: HeaderProps) {
    const navigate = useNavigate();

    return (
        <Flex
            as={'header'}
            zIndex={'99'}
            w={{base: 'full', sm: '375px'}}
            top={0}
            position={{base: 'sticky', sm: 'fixed'}}
            h={'54px'}
            bg={openColor.gray[0]}
            justify={'left'}
            align={'center'}
        >
            <IconButton bg={'transparent'} onClick={() => navigate(-1)} zIndex={99}>
                <IoArrowBackOutline/>
            </IconButton>
            <Box position={'absolute'} textAlign={'center'} w={'full'} color={openColor.gray[8]} fontSize={'16px'}>
                {title}
            </Box>
        </Flex>
    )
}