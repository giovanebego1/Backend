// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const chartData = [
  {
    title: "Profit",
    color: {
      backGround: "rgb(238,174,202)",
      backGround: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    },
    value: "200,000 R$",
    series:[
      {
        name: "Total profit",
        data: [50000, 25000,30000,20000,100000]
      }
    ]
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Vendas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Alvo de dispesas",
        data: [31, 40, 28, 51, 42, 109],
      },
    ],
  },
  {
    title: "Recursos Humanos",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Alvo de dispesas",
        data: [10, 100, 50, 70, 80, 30],
      },
    ],
  },
  {
    title: "Marketing",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Alvo de dispesas",
        data: [10, 25, 15, 30, 12, 15],
      },
    ],
  },
];


  export const salseData = [
    { month: 'Jan', expend: 35 }, { month: 'Feb', expend: 28 },
    { month: 'Mar', expend: 34 }, { month: 'Apr', expend: 32 },
    { month: 'May', expend: 40 }, { month: 'Jun', expend: 32 },
    { month: 'Jul', expend: 35 }, { month: 'Aug', expend: 55 },
    { month: 'Sep', expend: 38 }, { month: 'Oct', expend: 30 },
    { month: 'Nov', expend: 25 }, { month: 'Dec', expend: 32 }
];