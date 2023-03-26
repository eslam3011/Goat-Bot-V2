const axios = require('axios');

module.exports = {
	config: {
		name: "مانجا",
		aliases: ["مانغا"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 0,
		shortDescription: "الحصول على معلومات المانجا",
		longDescription: "البحث والحصول على معلومات المانجا",
		category: "أنمي",
		guide: "{pn} {{<name>}}"
	},

	onStart: async function ({ message, args }) {
		const name = args.join(" ");
		if (!name)
			return message.reply(`⚠️ | الرجاء إدخال اسم الشخصية!`);
		else {
			const BASE_URL = `https://api.safone.me/anime/manga/search?query=${name}`;
			try {
				let res = await axios.get(BASE_URL)


				let res2 = res.data

				let titl = res2.title.english + " " + res2.title.native
				let statu = res2.status
				let dura = res2.duration
				let episode = res2.episodes
				let startDat = res2.startDate.day + "/" + res2.startDate.month + "/" + res2.startDate.year
				let endDat = res2.endDate.day + "/" + res2.endDate.month + "/" + res2.endDate.year
				let genre = res2.genres
				let studio = res2.studios
				let score = res2.averageScore
				let desc = res2.description
				let typ = res2.type
				let img = res2.imageUrl

				const form = {
					body: `===「 معلومات المانجا 」===`
						+ `\n\n🔰 الاسم: ${titl}`
						+ `\n\n♻️ الحالة: ${statu}`
						+ `\n📕 النوع: ${typ}`
						+ `\n✅ عدد الحلقات: ${episode}`
						+ `\n🕙 المدة: ${dura}`
						+ `\n⭐ التقييم: ${score}`
						+ `\n📅 تاريخ البدء: ${startDat}`
						+ `\n📅 تاريخ الانتهاء: ${endDat}`
						+ `\n\n💾 الأنواع: ${genre}`
						+ `\n\n📺 الاستوديو: ${studio}`
						+ `\n\n🔉 الوصف: ${desc}`

				};
				if (img)
					form.attachment = await global.utils.getStreamFromURL(img);
				message.reply(form);
			} catch (e) { message.reply(`🥺 غير موجود`) }

		}
	}
};
