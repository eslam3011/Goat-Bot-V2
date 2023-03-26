const axios = require('axios');

module.exports = {
	config: {
		name: "شخصية",
		aliases: ["شخصية"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 0,
		shortDescription: "الحصول على بيانات الشخصية",
		longDescription: "البحث والحصول على معلومات الشخصية",
		category: "أنمي",
		guide: "{pn} {{<الاسم>}}"
	},

	onStart: async function ({ message, args }) {
		const name = args.join(" ");
		if (!name)
			return message.reply(`⚠️ | يرجى إدخال اسم الشخصية!`);
		else {
			const BASE_URL = `https://api.safone.tech/anime/character?query=${name}`;
			try {
				let res = await axios.get(BASE_URL)

				let res2 = res.data
				let nm = res2.name.full + " " + res2.name.native
				let gen = res2.gender
				let ag = res2.age
				let heit = res2.height
				let anim = res2.media.edges[0].node.title.romaji + " 🇯🇵 " + res2.media.edges[0].node.title.native
				let desc = res2.description
				let img = res2.image.large
				const form = {
					body: `===「 معلومات الشخصية 」===`
						+ `\n\n👤 الاسم: ${nm}`
						+ `\n🚻 الجنس: ${gen}`
						+ `\n🗓️ العمر: ${ag}`
						+ `\n👖 الطول: ${heit}`
						+ `\n\n📺 الأنمي والمانجا: ${anim}`
						+ `\n\n🔉 الوصف: ${desc}`
				};
				if (img)
					form.attachment = await global.utils.getStreamFromURL(img);
				message.reply(form);
			} catch (e) { message.reply(`🥺 لم يتم العثور على الشخصية`) }
		}
	}
};



