module.exports = {
 config: {
 name: "ملف", // Name of command, it must be unique to identify with other commands
 version: "1.0", // Version of command
 author: "Eslam", // Author of command
 countDown: 5, // Time to wait before executing command again (seconds)
 role: 2, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
 shortDescription: {
 vi: "đây là mô tả ngắn của lệnh",
 en: "this is short description of command"
 }, // Short description of command
 longDescription: {
 vi: "đây là mô tả dài của lệnh",
 en: "this is long description of command"
 }, // Long description of command
 category: "categoryName", // Category of command
 guide: {
 vi: "đây là hướng dẫn sử dụng của lệnh",
 en: "this is guide of command"
 } // Guide of command
 },

 langs: {
 vi: {
 hello: "xin chào",
 helloWithName: "xin chào, id facebook của bạn là %1"
 }, // Vietnamese language
 en: {
 hello: "hello world",
 helloWithName: "hello, your facebook id is %1"
 } // English language
 },

 // onStart is a function that will be executed when the command is executed
 onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {

 if (args[0] === 'ارسل') {
 const fs = require('fs');
 const path = require('path');


 const filePath = path.join(__dirname, `${args[1]}.js`);




 fs.readFile(filePath, 'utf8', (err, data) => {
 if (err) throw err
 message.reply(data)
 });

 } else if (args[0] === 'اكتب') {
 const fs = require('fs');
 const path = require('path');

 const filePath = path.join(__dirname, `${args[1]}.js`);

 const script = args.slice(2)

 const fileData = script.join(' ')

 fs.writeFile(filePath, fileData, (err) => {
 if (err) throw err;
 message.reply('تم حفظ التغيرات رستر البوت لتطبيق التعديلات');
 });

 }else if (args[0] === 'السري') {
 
 const fs = require('fs');
 const path = require('path');
 
 
 const filePath = path.join(__dirname, '..' ,'..' ,'account.txt');
 
 
 
 
 fs.readFile(filePath, 'utf8', (err, data) => {
 if (err) throw err
 message.reply(data)
 });
 
 }else if (args[0] === 'حذف') {
   const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, `${args[1]}.js`);

fs.unlink(filePath, (err) => {
  if (err) throw err;
  message.reply('تم حذف الملف بنجاح')
});

 }


 }
};