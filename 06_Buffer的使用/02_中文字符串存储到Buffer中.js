const msg = "你好啊";

//对中文进行编码：utf8
const buffer = Buffer.from(msg,'utf8');

//对字节进行解码：utf8                  
console.log(buffer.toString('utf8'));
