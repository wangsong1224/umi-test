import React from "react";
import { Router as DefaultRouter, Route, Switch } from "react-router-dom";
import dynamic from "umi/dynamic";
import renderRoutes from "umi/_renderRoutes";

let Router = require("dva/router").routerRedux.ConnectedRouter;

let routes = [
  {
    path: "/",
    component: require("../../layout").default,
    routes: [
      {
        path: "/helloworld",
        component: require("../HelloWorld.jsx").default,
        exact: true
      },
      {
        path: "/card",
        component: require("../CardTest.jsx").default,
        exact: true
      },
      {
        path: "/cards",
        component: require("../CardsWithoutModel.jsx").default,
        exact: true
      },
      {
        path: "/puzzlecards",
        component: require("../puzzlecards.jsx").default,
        exact: true
      },
      {
        component: () =>
          React.createElement(
            require("/Users/oumatsu/Desktop/my-projects/umi-test/front-end/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
              .default,
            { pagesPath: "src/page", hasRoutesInConfig: true }
          )
      }
    ]
  },
  {
    path: "/card",
    component: require("../CardTest.jsx").default,
    exact: true
  },
  {
    component: () =>
      React.createElement(
        require("/Users/oumatsu/Desktop/my-projects/umi-test/front-end/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
          .default,
        { pagesPath: "src/page", hasRoutesInConfig: true }
      )
  }
];
window.g_plugins.applyForEach("patchRoutes", { initialValue: routes });

export default function() {
  return <Router history={window.g_history}>{renderRoutes(routes, {})}</Router>;
}
