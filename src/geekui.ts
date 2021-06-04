import { App } from 'vue';
import Button from './packages/button/index.vue';
import Icon from './packages/icon/index.vue';
import Cell from './packages/cell/index.vue';
import Toast from './packages/toast/index.vue';
import Switch from './packages/switch/index.vue';

function install(app: App) {
  const packages = [Button,Icon,Cell,Toast,Switch];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { Button,Icon,Cell,Toast,Switch };
export default { install, version:'3.0.0-beta.14'};