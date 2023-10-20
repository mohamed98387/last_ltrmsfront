import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "MENUITEMS.MENU.TEXT",
    isTitle: true,
  },
  {
    id: 2,
    label: "MENUITEMS.ADMIN.TEXT",
    icon: "mdi mdi-account-cog",

    subItems: [
      {
        id: 21,
        label: "MENUITEMS.ADMIN.LIST.USER",
        link: "/user-list",
        parentId: 2,
      },
      {
        id: 22,
        label: "MENUITEMS.ADMIN.LIST.ROLE",
        link: "/role-list",
        parentId: 2,
      },
      {
        id: 23,
        label: "MENUITEMS.ADMIN.LIST.PERMISSION",
        link: "/permission-list",
        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    label: "MENUITEMS.DASHBOARDS.TEXT",
    icon: "bxs-bar-chart-alt-2",
  },
  {
    id: 4,
    label: "Ressources Externes",
    icon: "mdi mdi-account-arrow-right",

    subItems: [
      {
        id: 41,
        label: "MENUITEMS.EXTERN.LIST.AGENCE",
        link: "/agence-list",
        parentId: 4,
      },
      {
        id: 42,
        label: "MENUITEMS.EXTERN.LIST.VEHICULE",
        link: "/vehicule-list",
        parentId: 4,
      },
      {
        id: 43,
        label: "MENUITEMS.EXTERN.LIST.CHAUFFEUR",
        link: "/chauffeur-list",
        parentId: 4,
      },
    ],
  },
  {
    id: 5,
    label: "Ressources Internes",
    icon: "mdi mdi-account-arrow-left",

    subItems: [
      {
        id: 51,
        label: "MENUITEMS.INTERN.LIST.PS",
        link: "/plant-section-list",
        parentId: 5,
      },
      {
        id: 52,
        label: "MENUITEMS.INTERN.LIST.SEGMENT",
        link: "/segment-list",
        parentId: 5,
      },
      {
        id: 53,
        label: "MENUITEMS.INTERN.LIST.EMPLOYEE",
        link: "/employes-list",
        parentId: 5,
      },
      {
        id: 54,
        label: "MENUITEMS.INTERN.LIST.CIRCUIT",
        link: "/circuit-list",
        parentId: 5,
      },
      {
        id: 55,
        label: "MENUITEMS.INTERN.LIST.STATION",
        link: "/station-list",
        parentId: 5,
      },
    ],
  },
  {
    id: 6,
    label: "MENUITEMS.PLAN.TEXT",
    icon: "mdi mdi-view-list",

    subItems: [
      {
        id: 61,
        label: "MENUITEMS.PLAN.LIST.HEBDO",
        link: "/hebdomadaire",
        parentId: 6,
      },

      {
        id: 62,
        label: "MENUITEMS.PLAN.LIST.EVENT",
        link: "javascript:void(0);",
        parentId: 6,
      },
      {
        id: 63,
        label: "MENUITEMS.PLAN.LIST.AUDIT",
        link: "javascript:void(0);",
        parentId: 6,
      },
    ],
  },
  {
    id: 7,
    label: "MENUITEMS.FACTURE.TEXT",
    icon: "bx bx-receipt",
  },
  {
    id: 8,
    label: "MENUITEMS.COTISATION.TEXT",
    icon: "bx bx-dollar-circle",
  },
  {
    id: 9,
    label: "MENUITEMS.MAP.TEXT",
    icon: "bx bxs-map",
  },
];
