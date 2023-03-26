const axios = require('axios');

module.exports = {
	config: {
		name: "ملصق",
		aliases: ["waifu, neko"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 0,
		shortDescription: "الحصول على Waifu عشوائي ",
longDescription: "",
		category: "anime",
		guide: "{pn} {{<name>}}"
	},

	onStart: async function ({ message, args }) {
		const name = args.join(" ");
		if (!name)

			try {
				let res = await axios.get(`https://api.waifu.pics/sfw/waifu`)


				let res2 = res.data
				let img = res2.url

				const form = {
					body: `354097`

				};
				if (img)
					form.attachment = await global.utils.getStreamFromURL(img);
				message.reply(form);
			} catch (e) {
				message.reply(`🥺  لا نتائج`)
			}


		else {

			try {
				let res = await axios.get(`https://api.waifu.pics/sfw/${name}`)


				let res2 = res.data
				let img1 = res2.url

				const form = {
					body: `   「 𝔀𝓪𝓲𝓯𝓾  」   `

				};
				if (img1)
					form.attachment = await global.utils.getStreamFromURL(img1);
				message.reply(form);
			} catch (e) { message.reply(`🥺اكتب ملصق واختار نوع  , neko, shinobu, megumin, bully, cuddle, cry, kiss, lick, hug, awoo, pat, smug, bonk, yeet, blush, smile, wave, highfive, handhold, nom, bite, glomp, slap, kill, kick, happy, wink, poke, dance, cringe `) }

		}
	}
};