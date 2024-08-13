import { router } from './router';
import App from './app';

// 挂载app
const app = new App();
const containerDom = document.getElementById('app');
app.attach(containerDom as HTMLElement);

// 启动路由
router.start();