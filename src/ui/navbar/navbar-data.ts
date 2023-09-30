import { MenuItem } from "../../interfaces/MenuItemType";

export const drawerWidth = 240;



export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: 'Inicio',
        pathURL: '/',
        icon: 'home',
        subItems: []
    },
    {
        id:2,
        name: 'Turnos',
        pathURL: '/turnos',
        icon: 'schedule',
        subItems: []
    },
    {
        id: 3,
        name: 'Clases',
        pathURL: '/clases',
        icon: 'sports_tennis',
        subItems: [
            {
                id: 4,
                name: 'Tipos de clases',
                icon: '',
                pathURL: '/tipos-de-clases',
                subItems: [],
            }
        ]
    },
    {
        id: 5,
        name: 'Niveles',
        pathURL: '/levels',
        icon: 'assessment',
        subItems: []
    },
    {
        id: 6,
        name: 'Canchas',
        pathURL: '/canchas',
        icon: 'airplay',
        subItems: []
    },
    {
        id: 7,
        name: 'Personas',
        pathURL: '/personas',
        icon: 'group',
        subItems: [
            {
                id: 8,
                name: 'Tipos de personas',
                pathURL: '/tipos-de-personas',
                icon: '',
                subItems: []
            },
            {
                id: 9,
                name: 'Grupos de personas',
                pathURL: '/grupos-de-personas',
                icon: '',
                subItems: []
            }
        ]
    },
    
];
