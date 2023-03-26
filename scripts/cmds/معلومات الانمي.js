const axios = require('axios');

module.exports = {
	config: {
		name: "الانمي",
		aliases: ["anime, manga, news"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 0,
		shortDescription: "get anime news",
		longDescription: "",
		category: "anime",
		guide: "{pn}"
	},

	onStart: async function ({ message, args }) {
		const BASE_URL = `https://api.safone.tech/anime/news?limit=9`;
		try {
			let res = await axios.get(BASE_URL)


			let res2 = res.data

			let titl = res2.results[0].title
			let desc = res2.results[0].description
			let img = res2.results[0].imageUrl

			let titl1 = res2.results[1].title
			let desc1 = res2.results[1].description
			let img1 = res2.results[1].imageUrl

			let titl2 = res2.results[2].title
			let desc2 = res2.results[2].description
			let img2 = res2.results[2].imageUrl

			let titl3 = res2.results[3].title
			let desc3 = res2.results[3].description
			let img3 = res2.results[3].imageUrl

			let titl4 = res2.results[4].title
			let desc4 = res2.results[4].description
			let img4 = res2.results[4].imageUrl

			let titl5 = res2.results[5].title
			let desc5 = res2.results[5].description
			let img5 = res2.results[5].imageUrl

			let titl6 = res2.results[6].title
			let desc6 = res2.results[6].description
			let img6 = res2.results[6].imageUrl

			let titl7 = res2.results[7].title
			let desc7 = res2.results[7].description
			let img7 = res2.results[7].imageUrl

			let titl8 = res2.results[8].title
			let desc8 = res2.results[8].description
			let img8 = res2.results[8].imageUrl


			const form = {
				body: `===「اخبار الانمي」===`
					+ `\n\n🔰 الاسم: ${titl}`
					+ `\n🔉 وصف: ${desc}`

					+ `\n\n🔰 الاسم: ${titl1}`
					+ `\n🔉 وصف: ${desc1}`

					+ `\n\n🔰 الإسم: ${titl2}`
					+ `\n🔉 وصف: ${desc2}`

					+ `\n\n🔰 الاسم: ${titl3}`
					+ `\n🔉 وصف: ${desc3}`

					+ `\n\n🔰 الاسم: ${titl4}`
					+ `\n🔉:وصف: ${desc4}`

					+ `\n\n🔰 الاالاسم: ${titl5}`
					+ `\n🔉 وصف: ${desc5}`

					+ `\n\n🔰 الاسم: ${titl6}`
					+ `\n🔉 وصف: ${desc6}`

					+ `\n\n🔰 الاسم: ${titl7}`
					+ `\n🔉 وصف: ${desc7}`

					+ `\n\n🔰 الاسم: ${titl8}`
					+ `\n🔉 وصف: ${desc8}`

			};
			if (img) {
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);
				form.attachment[1] = await global.utils.getStreamFromURL(img1);
				form.attachment[2] = await global.utils.getStreamFromURL(img2);
				form.attachment[3] = await global.utils.getStreamFromURL(img3);
				form.attachment[4] = await global.utils.getStreamFromURL(img4);
				form.attachment[5] = await global.utils.getStreamFromURL(img5);
				form.attachment[6] = await global.utils.getStreamFromURL(img6);
				form.attachment[7] = await global.utils.getStreamFromURL(img7);
				form.attachment[8] = await global.utils.getStreamFromURL(img8);


			}
			message.reply(form);
		} catch (e) { message.reply('🥺 لا نتائج') }

	}
};