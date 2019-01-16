/**
 * 让前端觉得如获神器的不是NodeJS能做网络编程，而是NodeJS能够操作文件。
 * 小至文件查找，大至代码编译，几乎没有一个前端工具不操作文件。换个角度讲，几乎也只需要一些数据处理逻辑，再加上一些文件操作，
 * 就能够编写出大多数前端工具。本章将介绍与之相关的NodeJS内置模块。
 */
const fs = require('fs')
// 小文件拷贝
copy = (src, des) => {
  // fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。
  fs.writeFileSync(des, fs.readFileSync(src))
}
// 大文件拷贝
copyBigFile = (src, des) => {
  //fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，
  // 并且用pipe方法把两个数据流连接了起来。管道 
  fs.createReadStream(src).pipe(fs.createWriteStream(des))

}
main = (argv) => {
  copy(argv[0], argv[1])
}
//  process是一个全局变量，可通过process.argv获得命令行参数。
//  由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。
main(process.argv.slice(2))

/**
 * js 本身只有字符串数据类型,没有二进制数据类型,node 提供了一个 Buffer 构造函数来对二进制数据进行操作,
 * 除了可以读取文件得到 buffer 实例之外,还可以构造得到实例
 */
const bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])
let binStr = bin.toString('utf-8') // hello
const bin1 = new Buffer('hello', 'urf-8') // <Buffer 68 65 6c 6c 6f>
console.log('hello world')