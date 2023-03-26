module.exports = {
	config: {
		name: "هنتاي",
		aliases: ["هنتاي"],
		version: "1.0",
		author: "همم",
		countDown: 20,
		role: 2,
		shortDescription: "صور أنمي ",
		longDescription: "",
		category: "",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	    var link = [
"https://i.postimg.cc/RZmK5RBc/160.jpg", "https://i.postimg.cc/CxvTTcqt/12.jpg",
"https://i.postimg.cc/Yq9zD8tj/54.jpg",
"https://i.postimg.cc/RZmK5RBc/160.jpg",
"https://i.postimg.cc/52fYk2Bg/28.jpg",
"https://i.postimg.cc/T2QZPjG2/41.jpg",
"https://i.postimg.cc/Wp9HV26h/8.jpg",
"https://i.postimg.cc/YSfdskC2/25.jpg",
"https://i.postimg.cc/FHXg5qqY/79.jpg",
"https://i.postimg.cc/GhGgykns/15.jpg",
"https://i.postimg.cc/5t0mnzTg/26.jpg",
"https://i.postimg.cc/GpWsGsCH/82.jpg",
"https://i.postimg.cc/ryJKFHKd/116.jpg",
"https://i.postimg.cc/FzWrb2LD/152.jpg",
"https://i.postimg.cc/pXmRbc8M/155.jpg",
"https://i.postimg.cc/7LVpTS7N/292.jpg",
"https://i.postimg.cc/FHmvdr8N/339.jpg",
"https://i.postimg.cc/cCqjpTN0/364.jpg",
"https://i.postimg.cc/SscVMhwb/194.jpg",
"https://i.postimg.cc/bJPk42F4/500.jpg",
"https://i.postimg.cc/KY21YhrM/604.jpg",
"https://i.postimg.cc/dV80pSPt/644.jpg"]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  attachment: await global.utils.getStreamFromURL(img)
})
}
}
		