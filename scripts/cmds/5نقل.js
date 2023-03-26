module.exports = {
  config: {
    name: "السجن",
    version: "1.0",
    author: "NIB",
    countDown: 1,
    role: 0,
    shortDescription: "تمكين / تعطيل السجن",
    longDescription: "",
    category: "boxcontrol",
    guide: "{pn} {{[تشغيل | إيقاف]}}",
    envConfig: {
      deltaNext: 5
    }
  },

  onStart: async function ({ message, event, threadsData, args }) {
    let antiout = await threadsData.get(event.threadID, "settings.antiOut");

    if (antiout === undefined) {
      await threadsData.set(event.threadID, true, "settings.antiOut");
    }
    
    console.log(await threadsData.get(event.threadID, "settings.reSend"));

    if (!["تشغيل", "إيقاف"].includes(args[0])) {
      return message.reply("يُرجى كتابة 'تشغيل' أو 'إيقاف'");
    }

    await threadsData.set(event.threadID, args[0] === "تشغيل", "settings.antiOut");

    return message.reply(`تم تحويل السجن ${args[0] === "تشغيل" ? "إلى حالة التشغيل" : "إلى حالة الإيقاف"}`);
  }
};
