const axios = require('axios');

module.exports = {
	config: {
		name: "cont",
		aliases: ["cont, cpa"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 0,
		shortDescription: "الحصول على بيانات حاوية",
		longDescription: "",
		category: "لا فائدة منه",
		guide: "{pn} {{<رقم الحاوية>}}"
	},

	onStart: async function ({ message, args }) {
		const name = args.join(" ");
		if (!name)
			return message.reply(`⚠️ | يرجى إدخال رقم الحاوية!`);
		else {
			const BASE_URL = `http://portauthor.cf/cont.php?id=${name}`;
			try {
				let res = await axios.get(BASE_URL)
				let res2 = res.data

				let cnt = res2.cont
				let inf = res2.info

				const form = {
					body: `===「معلومات الحاوية」===`
						+ `\n\n🔰 رقم الحاوية: ${cnt}`
						+ `\n\n♻️ ${inf}`

				};
				message.reply(form);
			} catch (e) { message.reply(`🥺 لم يتم العثور عليه`) }

		}
	}
};
