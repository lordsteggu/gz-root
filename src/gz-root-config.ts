import { registerApplication, start } from "single-spa";

registerApplication(
  "@gz-/app1",
  () => System.import("@gz-/app1"),
  (location) => location.pathname.startsWith("/app1")
);

registerApplication(
  "@gz/app2",
  () => System.import("@gz/app2"),
  (location) => location.pathname.startsWith("/app2")
);

start();
