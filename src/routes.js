import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/wallet",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Wallet/Index")),
  },
  {
    exact: true,
    path: "/gallery",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Gallery/Index")),
  },
  {
    exact: true,
    path: "/gallry-details",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Gallery/Details")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
