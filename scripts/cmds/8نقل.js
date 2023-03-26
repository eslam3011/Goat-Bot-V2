module.exports = {
	config: {
		name: "lyrics",
		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "كلمات الاغنية"
		},
		longDescription: {
			vi: "",
			en: "البحث عن كلمات الأغاني"
		},
		category: "",
		guide: "{pn} <إسم الأغنية> ",
		
		
	},

onStart: async function ({ api, event, message, args, getLang }) {


const lyricsFinder = require('lyrics-finder');
  let abc = args.join(" ")
  let def = abc.split("|")
    let lyrics = await lyricsFinder(args.join(" ")) || "لا نتائج!";
    console.log(lyrics);
api.sendMessage(`${lyrics}`, event.threadID, event.messageID);


  
}
    }