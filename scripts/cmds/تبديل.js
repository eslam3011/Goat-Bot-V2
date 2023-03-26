module.exports = {
	config: {
		name: "تبديل", 
		version: "1.0", 
		author: "Eslam", 
		countDown: 5, 
		role: 2, 
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, 
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		},
		category: "categoryName",
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} 
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

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {

    const fs = require('fs');
 const path = require('path');

 const filePath = path.join(__dirname, '..' ,'..' ,'account.txt');


 const fileData = args.join(' ')

 fs.writeFile(filePath, fileData, (err) => {
 if (err) throw err;
 message.reply('تم حفظ التغيرات رستر البوت لتطبيق التعديلات');
 });

	}
};