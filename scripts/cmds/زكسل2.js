module.exports = {
 config: {
 name: "اا",
		 version: "1.0",
	 	author: "",
		 countDown: 5,
	 	role: 0,
		 shortDescription: "تجاهله",
	 	longDescription: "تجاهله",
		 category: "النظام",
 },
	onStart: async function (){},
	onChat: async function ({ event , message}) {

let saved =[ "ماذا تريد","انا هنا حبيبتي ","منور اخي","كيف حالك ","كيف اساعدك","ماذا تريد يا غبي","بحبك ","بيكي هتعطل","انا لي اسم والله"]

if (event.body && event.body.toLowerCase() == "زكسل") return message.reply(saved[Math.floor(Math.random()*saved.length)]);
  }
};