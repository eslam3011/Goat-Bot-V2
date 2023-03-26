module.exports = {
	config: {
		name: "بروفايل", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "NTKhang", // Author of command
		countDown: 5, // Time to wait before executing command again (seconds)
		role: 0, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, // Short description of command
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		}, // Long description of command
		category: "categoryName", // Category of command
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} // Guide of command
	},

	langs: {
		vi: {
			hello: "xin chào",
			helloWithName: "xin chào, id facebook của bạn là %1"
		}, // Vietnamese language
		en: {
			hello: "hello world",
			helloWithName: "hello, your facebook id is %1"
		} // English language
	},

	// onStart is a function that will be executed when the command is executed
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
		// YOUR CODE HERE, use console.log() to see all properties in variables above


		// getLang is a function to get language of command

		// getLang without parameter is a function to get language of command without parameter
		 const { getStreamFromURL } = global.utils;
const avatarUrl = await usersData.getAvatarUrl(event.senderID);
message.reply({
body : '',
attachment : await getStreamFromURL(avatarUrl)
})
		// getLang with parameter is a function to get language of command with parameter (delete // in line below to test)
		// message.reply(getLang("hello", event.senderID));

	}
};