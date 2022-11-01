#! /usr/bin/env node

// var figlet = require("figlet");

// figlet("Hello Monkey", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const ejs = require("ejs");


// inquirer
//   .prompt([
//     {
//       type: "input", //type：input,confirm,list,rawlist,checkbox,password...
//       name: "name", // key 名
//       message: "Your name", // 提示信息
//       default: "my-node-cli", // 默认值
//     },
//   ])
//   .then((answers) => {
//     // 模版文件目录
//     const destUrl = path.join(__dirname, "template");
//     // 生成文件目录
//     // process.cwd() 对应控制台所在目录
//     const cwdUrl = process.cwd();
//     // 从模版目录中读取文件
//     fs.readdir(destUrl, (err, files) => {
//       if (err) throw err;
//       files.forEach((file) => {
//         // 使用 ejs 渲染对应的模版文件
//         // renderFile（模版文件地址，传入渲染数据）
//         ejs.renderFile(path.join(destUrl, file), answers).then((data) => {
//           // 生成 ejs 处理后的模版文件
//           fs.writeFileSync(path.join(cwdUrl, file), data);
//         });
//       });
//     });
//   });

const { program } = require('commander');

// const log = content => console.log(chalk.green(content))
// clear()
// log(figlet.textSync('hello monkey'))

program
.version('0.1.0')
.command('create <name>')
.description('create a new project')
.action(name => { 
    // 打印命令行输入的值
    console.log("project name is " + name)
})

program.parse();