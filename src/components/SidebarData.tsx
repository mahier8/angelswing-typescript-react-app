import {
    AiOutlineHistory,
    AiOutlineHome,
} from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
    },
    {
        title: 'Order',
        path: '/order',
        icon: <FaOpencart />
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
];