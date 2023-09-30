export interface MenuItem {
    id: number;
    name: string;
    pathURL: string;
    icon: string;
    subItems: MenuItem[]
}