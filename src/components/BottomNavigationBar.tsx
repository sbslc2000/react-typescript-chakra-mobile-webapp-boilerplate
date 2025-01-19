import {Box, Flex, Text} from "@chakra-ui/react";
import {
    IoChatbubbleEllipses,
    IoChatbubbleEllipsesOutline,
    IoHomeOutline,
    IoHomeSharp,
    IoPersonOutline,
    IoPersonSharp,
    IoSearchOutline,
    IoSearchSharp
} from "react-icons/io5";
import {useNavigate} from "react-router";
import {IconType} from "react-icons";
import openColor from "open-color";
import {RiShoppingBag4Fill, RiShoppingBag4Line} from "react-icons/ri";

const NavItemList = [
    {
        focusIcon: RiShoppingBag4Fill,
        blurIcon: RiShoppingBag4Line,
        label: 'shop',
        link: '/shop'
    },
    {
        focusIcon: IoSearchSharp,
        blurIcon: IoSearchOutline,
        label: 'search',
        link: '/search',
    },
    {
        focusIcon: IoHomeSharp,
        blurIcon: IoHomeOutline,
        label: 'home',
        link: '/',
    },
    {
        focusIcon: IoChatbubbleEllipses,
        blurIcon: IoChatbubbleEllipsesOutline,
        label: 'board',
        link: '/board',
    },
    {
        focusIcon: IoPersonSharp,
        blurIcon: IoPersonOutline,
        label: 'my',
        link: '/my',
    },
];

export interface BottomNavigationBarProps {
    navItem: string;
}

export function BottomNavigationBar({navItem}: BottomNavigationBarProps) {

    const navigate = useNavigate();

    return <Box h={'54px'} position={{base: 'fixed'}} bottom={0} w={{base: 'full', sm: '375px'}} bg={'white'}>
        <Flex>
            <Flex
                h={'70px'}
                w={{base: 'full', sm: '375px'}}
                bgColor={'white'}
                align={'center'}
                justify={'space-evenly'}
                position={'fixed'}
                bottom={0}
                borderTop={'1px'}
                borderColor={'gray.100'}
                zIndex={3}
            >
                {NavItemList.map((item) => (
                    <NavItem
                        key={item.label}
                        icon={navItem === item.label ? item.focusIcon : item.blurIcon}
                        label={item.label}
                        focus={navItem === item.label}
                        onClick={() => navigate(item.link)}
                    />
                ))}
            </Flex>
        </Flex>
    </Box>
}

export interface NavItemProps {
    icon: IconType,
    label: string;
    focus: boolean;
    onClick: () => void,
}

const NavItem = ({icon: Icon, label, focus, onClick}: NavItemProps) => {
    return (
        <Flex
            direction={'column'}
            align={'center'}
            justify={'center'}
            color={focus ? openColor.gray[7] : openColor.gray[6]}
            p={2}
            cursor={'pointer'}
            onClick={onClick}
        >
            {/* 아이콘 렌더링 */}
            <Icon size={24}/>
            <Text fontSize={'xs'}>{label}</Text>
        </Flex>
    );
};
