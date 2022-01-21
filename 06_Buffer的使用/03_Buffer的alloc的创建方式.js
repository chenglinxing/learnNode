//通过alloc的方式创建Buffer
const buffer = Buffer.alloc(88);

buffer[0] = 88;
buffer[1] = 136;
buffer[2] = 0x88;
console.log(buffer);
