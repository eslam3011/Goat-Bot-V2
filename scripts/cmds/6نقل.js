const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports = {
	config: {
		name: "تئثير",
		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 0,
		shortDescription: "صورة تأثير Affect",
		longDescription: "صورة تأثير Affect",
		category: "صور",
		guide: "{pn} [@tag]"
	},

	onStart: async function ({ event, message, usersData }) {
		const uid = Object.keys(event.mentions)[0]
    if(!uid) return message.reply("يجب عليك منشن شخص")
		const avatarURL = await usersData.getAvatarUrl(uid);
		const img = await new DIG.Affect().getImage(avatarURL);
		const pathSave = `${__dirname}/tmp/${uid}_Trash.png`;
		fs.writeFileSync(pathSave, Buffer.from(img));
		message.reply({
			attachment: fs.createReadStream(pathSave)
		}, () => fs.unlinkSync(pathSave));
	}
};





