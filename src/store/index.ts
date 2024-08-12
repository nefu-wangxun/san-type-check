import {Store, connect} from 'san-store';
import {builder} from 'san-update';

const museumStore = new Store({
    initData: {
        demoName: '.san文件, ts语法检测'
    },
    actions: {
        updateDemoName(demoName) {
            return builder().set('demoName', demoName);
        }
    }
});

const storeConnect = (store, data) => {
    return (target) => {
        return connect(store, data)(target);
    }
}

export {
    museumStore,
    storeConnect
}