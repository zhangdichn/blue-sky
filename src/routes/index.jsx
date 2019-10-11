import App from '../App';
import Login from '../pages/login';
import Index from '../pages/index';
import Detail from '../pages/detail';

const routeConfig = [
  { path: '/',
    component: App,
    // indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'index', component: Index },
      { path: 'detail', component: Detail },
      // { path: 'about', component: About },
      // { path: 'inbox',
      //   component: Inbox,
      //   childRoutes: [
      //     { path: '/messages/:id', component: Message },
      //     { path: 'messages/:id',
      //       onEnter: function (nextState, replaceState) {
      //         replaceState(null, '/messages/' + nextState.params.id)
      //       }
      //     }
      //   ]
      // }
    ]
  }
];

export default routeConfig;
