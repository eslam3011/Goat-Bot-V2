const axios = require('axios');

module.exports = {
	config: {
		name: "حبيبة",
		aliases: ["addwaifu"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 2,
		shortDescription: "اضافة حبيبة لروبوت الحريم",
		longDescription: "",
		category: "ملوك الحريم",
		guide: "{pn} waifu الاسم"
	},

	onStart: async function ({ message, args, event }) {
		const name = args.join(" ");
		let url = encodeURIComponent(event.messageReply.attachments[0].url)

		try {
			let res = await axios.get(`https://api.misfitsdev.xyz/harem/upload.php?uid=${event.senderID}&name=${name}&url=${url}`)
			let res2 = res.data

			const form = {
				body: res2.status.toString()
			};
			message.reply(form);
		} catch (e) {
			console.log(e)
			message.reply('🥺 خطأ')
		}

	}
};
