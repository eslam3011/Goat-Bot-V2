const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "وميض",
    version: "1.1",
    author: "NIB",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      ar: "الوميض بالصور"
    },
    longDescription: {
      vi: "",
      ar: "إنشاء صور متحركة تومض باستخدام صور الملف الشخصي"
    },
    category: "صورة",
    guide: "{pn} قم بعمل منشن للأشخاص الذين تريد إنشاء الصورة لهم",

  },

  onStart: async function ({ event, message, getLang, usersData}) {
    // جلب قائمة المستخدمين الذين تم الإشارة إليهم
    let ids = Object.keys(event.mentions);
    
    // جلب روابط صور الملف الشخصي لكل من المستخدمين الذين تم الإشارة إليهم وإضافتها إلى قائمة الروابط
    let links = [];
    links.push(await usersData.getAvatarUrl(event.senderID));
    for (var item of ids) {
      links.push(await usersData.getAvatarUrl(item));
    }
    
    // إنشاء الصورة المتحركة التي تومض باستخدام الصور المحددة
    const img = await new DIG.Blink().getImage(150, ...links);
    
    // حفظ الصورة المتحركة على القرص الثابت
    const pathSave = `${__dirname}/tmp/Blink.gif`;
    fs.writeFileSync(pathSave, Buffer.from(img));
    
    // إرسال الصورة المتحركة كرد على الرسالة الأصلية
    message.reply({
      attachment: fs.createReadStream(pathSave)
    }, () => fs.unlinkSync(pathSave));
  }
};


