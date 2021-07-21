import { FaMap, FaRuler, FaLayerGroup } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: '',
        path: '/',
        icon: <FaMap />,
    },
    {
        title: '',
        path: '/order',
        icon: <FaRuler />
    },
    {
        title: '',
        path: '/history',
        icon: <FaLayerGroup />
    },
];