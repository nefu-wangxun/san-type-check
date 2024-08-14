import moduleAInfo = require('./a');

// 直接加载
// console.log(moduleAInfo.name);

// 懒加载
export function loadA() {
    const _moduleAInfo: typeof moduleAInfo = require('./a');
    console.log('b: A模块被懒加载');
}