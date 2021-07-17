export interface SidebarItem {
    title: string;
    path: string;
    icon: any;
    iconOpen?: any; 
    iconClosed?: any;
    subnav?: SidebarItem[];
}