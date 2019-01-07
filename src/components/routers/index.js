import Index from "../index.jsx";
import News from "../news.jsx";
import Not404 from "../not404";
import Users from "../users/users.jsx";
import ChangeInfo from "../users/changeinfo.jsx";
import Address from "../users/address.jsx";
import Message from "../users/message.jsx";
const routers = [
  {
    exact: true,
    path: "/",
    component: Index
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/users",
    component: Users,
    routres: [
      {
        exact: true,
        path: "/users/",
        component: ChangeInfo
      },
      {
        path: "/users/address",
        component: Address
      },
      {
        path: "/users/msg",
        component: Message
      },
      {
        path: "/users/*",
        component: Not404
      }
    ]
  },
  {
    path: "*",
    component: Not404
  }
];
export default routers;
