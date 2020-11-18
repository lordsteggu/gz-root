import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";



const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication(
  '@single-spa/welcome',
  () => System.import('@single-spa/welcome'),
  location => location.pathname === '/'
);

registerApplication(
  '@gz-/app1',
  () => System.import('@gz-/app1'),
  location => location.pathname.startsWith('/app1')
);

registerApplication(
  '@gz/app2',
  () => System.import('@gz/app2'),
  location => location.pathname.startsWith('/app2')
);







applications.forEach(registerApplication);
layoutEngine.activate();
start();
