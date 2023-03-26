const DIG = require("discord-image-generation");
const fs = require("fs-extra");
module.exports = {
	config: {
		name: "سلاش",
		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "blink images"
		},
		longDescription: {
			vi: "",
			en: ""
		},
		category: "image",
		guide: "{pn}",
		
	},

onStart: async function ({ event, message, getLang, usersData}) {
  if(event.type == "message_reply"){
    let links = []
    
    // جمع الروابط الخاصة بالملفات المرفقة بالرد
    for (var item of event.messageReply.attachments){
      links.push(item.url)
    }
  
    // توليد الصورة المتحركة
    const img = await new DIG.Blink().getImage(250, ...links)
    
    // حفظ الصورة المتحركة المولدة في الملف المؤقت
		const pathSave = `${__dirname}/tmp/Blink.gif`;
		fs.writeFileSync(pathSave, Buffer.from(img));
    
    // إرسال الصورة المتحركة المولدة
		message.reply({
			attachment: fs.createReadStream(pathSave)
		}, () => fs.unlinkSync(pathSave));
	} else {
    // إذا لم يكن الرد يحتوي على ملفات مرفقة، يرسل رسالة تذكيرية
    message.reply("الرجاء الرد على صورة.");
  }
}
};





