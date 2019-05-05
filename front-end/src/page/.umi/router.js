import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../pro/Login.jsx').default,
    "exact": true
  },
  {
    "path": "/card",
    "component": require('../demo/CardTest.jsx').default,
    "exact": true
  },
  {
    "path": "/home",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/home/helloworld",
        "component": require('../demo/HelloWorld.jsx').default,
        "exact": true
      },
      {
        "path": "/home/card",
        "component": require('../demo/CardTest.jsx').default,
        "exact": true
      },
      {
        "path": "/home/cards",
        "component": require('../demo/CardsWithoutModel.jsx').default,
        "exact": true
      },
      {
        "path": "/home/puzzlecards",
        "component": require('../demo/puzzlecards.jsx').default,
        "exact": true
      },
      {
        "path": "/home/analyze",
        "component": require('../pro/dashboard/Analyze.jsx').default,
        "exact": true
      },
      {
        "path": "/home/monitor",
        "component": require('../pro/dashboard/Monitor.jsx').default,
        "exact": true
      },
      {
        "path": "/home/workspace",
        "component": require('../pro/dashboard/Workspace.jsx').default,
        "exact": true
      },
      {
        "path": "/home/basicForm",
        "component": require('../pro/form/BasicForm.jsx').default,
        "exact": true
      },
      {
        "path": "/home/stepedForm",
        "component": require('../pro/form/StepedForm.jsx').default,
        "exact": true
      },
      {
        "path": "/home/proForm",
        "component": require('../pro/form/ProForm.jsx').default,
        "exact": true
      },
      {
        "path": "/home/searchTable",
        "component": require('../pro/list/SearchTable.jsx').default,
        "exact": true
      },
      {
        "path": "/home/standradList",
        "component": require('../pro/list/StandradList.jsx').default,
        "exact": true
      },
      {
        "path": "/home/cardList",
        "component": require('../pro/list/CardList.jsx').default,
        "exact": true
      },
      {
        "path": "/home/searchList",
        "component": require('../pro/list/SearchList.jsx').default,
        "exact": true
      },
      {
        "path": "/home/basicDetails",
        "component": require('../pro/details/BasicDetails.jsx').default,
        "exact": true
      },
      {
        "path": "/home/success",
        "component": require('../pro/result/Success.jsx').default,
        "exact": true
      },
      {
        "path": "/home/failure",
        "component": require('../pro/result/Failure.jsx').default,
        "exact": true
      },
      {
        "path": "/home/personalSetting",
        "component": require('../pro/person/PersonalSetting.jsx').default,
        "exact": true
      },
      {
        "path": "/home/personalCenter",
        "component": require('../pro/person/PersonalCenter.jsx').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/oumatsu/Desktop/my-projects/umi-test/front-end/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/oumatsu/Desktop/my-projects/umi-test/front-end/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
