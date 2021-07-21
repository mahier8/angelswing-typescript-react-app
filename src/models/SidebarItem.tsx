export interface SidebarItem {
    path: string;
    icon: any;
    subnav?: SidebarItem[];
}