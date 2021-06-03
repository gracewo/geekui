import { App } from 'vue';
import Button from './packages/button/index.vue';
import Icon from './packages/icon/index.vue';

function install(app: App) {
  const packages = [Button,Icon];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { Button,Icon };
export default { install, version:'3.0.0-beta.14'};