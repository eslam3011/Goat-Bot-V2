const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
	config: {
		name: "غلاف",
		version: "1.0",
		author: "@Tas33n.",
		countDown: 5,
		role: 0,
		shortDescription: "إنشاء صورة بنر فيسبوك",
		longDescription: "",
		category: "image",
		guide: {
			en: "{p}{n} <الاسم> | <الاسم الفرعي> | <العنوان> | <الهاتف> | <البريد الإلكتروني> | <اللون> \n\n  لا تنسا اخي ادخل المعلومات بل الانجليزي كي لا يحدث خطأ ",
		}
	},

	onStart: async function ({ message, args, event, api }) {
		const info = args.join(" ");
		if (!info){
			return message.reply(`- هل نسيت إدخال المعلومات!`);
		}else {
			const msg = info.split("|");
			const name = msg[0];
			const subname = msg[1];
			const address = msg[2];
			const phone = msg[3];
			const email = msg[4];
			const color1 = msg[5];
			const color = color1.replace(/^\s+|\s+$/gm,'');
			const img = (`https://api2.misfitsdev.xyz/fbcover/v1?name=${name}&subname=${subname}&address=${address}&uid=${event.senderID}&sdt=${phone}&email=${email}&color=${color}`);
			const form = {
				body: ``
			};
			form.attachment = []
			form.attachment[0] = await global.utils.getStreamFromURL(img);
			message.reply(form);
		}
	}
};
