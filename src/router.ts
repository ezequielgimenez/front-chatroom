import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
  { path: "/", component: "init-welcome" },
  { path: "/signIn", component: "init-page" },
  { path: "/chat", component: "chat-page" },
]);
