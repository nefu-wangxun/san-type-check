import {Component} from 'san'

export default class Forum extends Component {
    static template =`
        <div>
            {{ demoName }}
        </div>
    `;
    static components = {
    };
    initData() {
        return {
            demoName: '.san文件ts语法检测'
        };
    }
    attached() {
        console.log('Forum: ', this.data.get());
    }
}