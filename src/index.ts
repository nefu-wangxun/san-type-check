import { router } from './router';
import App from './app';
import * as ts from 'typescript';
// const { resolve, PROJECT_PATH } = require('@scripts/constants.js');

const compiler = ts.createProgram([
    './pages/forum/index.ts'
], {});

// const sourceFiles = compiler.getSourceFiles();

// console.log(
//     sourceFiles.map(item => item.fileName)
// );

// 挂载app
const app = new App();
const containerDom = document.getElementById('app');
app.attach(containerDom as HTMLElement);

// 启动路由
router.start();