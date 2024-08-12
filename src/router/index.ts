import {router, Link} from 'san-router';
import Forum from '@/pages/forum';

// 路由规则
const routes = [
    {rule: '/', Component:  Forum}
];

// 注册路由规则
routes.forEach(item => {
    router.add({
        ...item,
        target: '#main'
    });
});

const routerWatch = () => {
    router.setMode('hash');
    router.listen(e => {
        console.log('routerWatch: ', e);
    });
}
routerWatch();

export {router, Link};