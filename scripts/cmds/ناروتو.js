module.exports = {
	config: {
		name: "ناروتو",
		aliases: ["شيبودن"],
		version: "1.0",
		author: "همم",
		countDown: 20,
		role: 0,
		shortDescription: "صور أنمي ",
		longDescription: "",
		category: "",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = ["https://i.ibb.co/8jfy9qQ/xva213.jpg","https://i.ibb.co/Yyh0g8K/xva213.jpg","https://i.ibb.co/Yyh0g8K/xva213.jpg","https://i.ibb.co/KjKcfqL/xva213.jpg","https://i.ibb.co/dmwxZRK/xva213.jpg","https://i.ibb.co/vXZSKQN/xva213.jpg","https://i.ibb.co/qC2xQ5K/xva213.jpg","https://i.ibb.co/4fjKdPY/xva213.jpg","https://i.ibb.co/vXZSKQN/xva213.jpg","https://i.ibb.co/wN6T2Rx/xva213.jpg","https://i.ibb.co/4fjKdPY/xva213.jpg","https://i.ibb.co/wN6T2Rx/xva213.jpg","https://i.ibb.co/QHVDjKP/xva213.jpg","https://i.ibb.co/vjRNwcp/xva213.jpg","https://i.ibb.co/vjRNwcp/xva213.jpg","https://i.ibb.co/7zCYkXj/xva213.jpg","https://xva213.jpg/i.ibb.co/yyFrCTC","https://i.ibb.co/x6LCdbL/xva213.jpg","https://i.ibb.co/x6LCdbL/xva213.jpg","https://i.ibb.co/5YtCgQz/xva213.jpg","https://i.ibb.co/x6LCdbL/xva213.jpg","https://i.ibb.co/HDKcYpn/xva213.jpg","https://i.ibb.co/1Lc1yj4/xva213.jpg","https://i.ibb.co/zXJ7vSC/xva213.jpg","https://i.ibb.co/bgkXDwG/xva213.jpg","https://i.ibb.co/QHZNfk5/xva213.jpg","https://i.ibb.co/FYFMMQx/xva213.jpg","https://i.ibb.co/ZLZRKt0/xva213.jpg","https://i.ibb.co/9bymMCx/xva213.jpg","https://i.ibb.co/nqpXTFf/xva213.jpg","https://i.ibb.co/Zg8HcV2/xva213.jpg","https://i.ibb.co/zXJ7vSC/xva213.jpg","https://i.ibb.co/XyT0LWN/xva213.jpg","https://i.ibb.co/vYwFj8Q/xva213.jpg"]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
 attachment: await global.utils.getStreamFromURL(img)
})
}
}