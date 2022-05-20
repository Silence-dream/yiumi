#!/usr/bin/env node

const {
  program
} = require('commander');

program
  .version(require('../package.json').version, '-v, -V', '输出当前框架的版本')
  .description('这是21天短文，挑战手写前端框架的产物框架')
  .usage('<command> [options]')
  .parse(process.argv)

program.command("help")
.alias("-h")
.description("帮助命令")
.action(function(name,other){
  console.log(`
  框架支持的命令
  version,-v,-V 输出当前版本
  help,-h 输出帮助
  `);
})
.parse(process.argv)