const axios = require('axios');

module.exports = {
	config: {
		name: "تنفيز",
		aliases: ["execute"],
		version: "1.0",
		author: "@tas33n",
		countDown: 5,
		role: 2,
		shortDescription: "تنفيذ الأوامر",
		longDescription: "",
		category: "Owner",
		guide: "{pn} {{<say>}}"
	},

	onStart: async function ({ api, message, args, event}) {
    try {
    let gid = args[0]
 args.shift()

api.sendMessage(args.join(" "),  gid)
				
			} catch (e) {
        console.log(e)
        message.reply(`🥺الملقم مشغول `) }

	}
};

