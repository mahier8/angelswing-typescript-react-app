
import { FaMap, FaRuler, FaLayerGroup } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        path: '/',
        icon: <FaMap />,
    },
    {
        path: '/order',
        icon: <FaRuler />
    },
    {
        path: '/history',
        icon: <FaLayerGroup />
    },
];