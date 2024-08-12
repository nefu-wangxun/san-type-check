import {Component} from 'san';

export default class App extends Component {
    static template =`
        <div>
            <!-- 路由组件的挂载位置 -->
            <div id="main" s-ref="mainDom"></div>
        </div>
    `;
    static components = {
    };
    initData() {
        return {
        };
    }
    attached() {
        let a;
        console.log('App: ', this.data.get());
        // console.log(a.length);
        // doCompileCheck();
    }
}