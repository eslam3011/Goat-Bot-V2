module.exports = {
	config: {
		name: "حزورة", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "Eslam", // Author of command
		countDown: 5, // Time to wait before executing command again (seconds)
		role: 0, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "لعبة"
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
		// YOUR CODE HERE
    
              let questions = [
                {
                  question: "ما هو الشيء الذي يمشي بلا أرجل؟ .",
                  answer: "السحاب"
                },
                {
                  question: "ما هو الشيء الذي لا يمكن أن تعطيه إلا بتلقائك؟ .",
                  answer: "الثقة"
                },
                {
                  question: "ما هو الشيء الذي يمشي بالرأس؟ .",
                  answer: "المشط"
                },
                {
                  question: "ما هو الشيء الذي يمشي بلا رجلين؟ .",
                  answer: "الثعبان"
                },
                {
                  question: "ما هو الشيء الذي يأتي دائمًا في النهاية ولكنه لا يأتي أبدًا في البداية؟ حرف الـ",
                  answer: "حرف الياء"
                }
                , {
                  question: "ما هو الشيء الذي يمشي بالرأس ولكن ليس له جسم؟ .",
                  answer: "الشعر"
                }, {
                  question: "ما هو الشيء الذي يأكل ولا يشبع؟ .",
                  answer: "النار"
                }, {
                  question: "ما هو الشيء الذي يستطيع الطيران دون أجنحة؟ .",
                  answer: "الزمن"
                }, {
                  question: "ما هو الشيء الذي يدوّر بلا توقّف ولا يحرك؟ .",
                  answer: "الأرض"
                }, {
                  question: "ما هو الشيء الذي يمشي بسرعة ولكنه لا يترك أثرًا؟ .",
                  answer: "الصوت"
                }, {
                  question: "ما هو الشيء الذي يأتي بسرعة عندما تدعوه ويختفي عندما تناديه؟ .",
                  answer: "الصدى"
                }, {
                  question: "ما هو الشيء الذي يتحرك دائمًا دون أن يتحرّك؟ .",
                  answer: "الوقت"
                }, {
                  question: "ما هو الشيء الذي يأتي ويترك ظلّه خلفه؟ .",
                  answer: "الإنسان"
                }, {
                  question: "ما هو الشيء الذي يمشي وليس له رأس؟ .",
                  answer: "الساعة"
                }, {
                  question: "ما هو الشيء الذي يوجد في السماء ويمكن رؤيته في الأرض؟ .",
                  answer: "السحاب"
                }, {
                  question: "ما هو الشيء الذي يمشي بثلاثة أرجل في الصباح وبأربعة أرجل في المساء؟ .",
                  answer: "الإنسان"
                }, {
                  question: "ما هو الشيء الذي ينمو ويتقلّص ولكنه لا يحرّك؟ ",
                  answer: "الشعر"
                }, {
                  question: "ما هو الشيء الذي تلمسه ولا تراه؟ .",
                  answer: "الهواء"
                }, {
                  question: "ما هو الشيء الذي يكبر كلما تقلص؟ .",
                  answer: "الظل"
                }, {
                  question: "ما هو الشيء الذي يخرج من التفاحة عندما تعصره؟ .",
                  answer: "العصير"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يتحرك بلا رأس؟ .",
                  answer: "المسمار"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يكون مخرجًا ومدخلًا في نفس الوقت؟ .",
                  answer: "الباب"
                }, {
                  question: "ما هو الشيء الذي يتحرك ولكنه لا يترك خلفه أثرًا؟ .",
                  answer: "الضوء"
                }, {
                  question: "ما هو الشيء الذي يأتي في الليل ويختفي في النهار؟ .",
                  answer: "النجوم"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يكسر دون أن يلمسه؟ .",
                  answer: "الصوت"
                }, {
                  question: "ما هو الشيء الذي يمكن أن تعطيه دون أن تملكه؟ .",
                  answer: "النصيحة"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يكون قديمًا وجديدًا في نفس الوقت؟ .",
                  answer: "النقود"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يسمعه الإنسان ولكن لا يمكنه رؤيته؟ .",
                  answer: "الصمت"
                }, {
                  question: "ما هو الشيء الذي يمكن أن تقوم به وأنت تجلس وتستريح؟ .",
                  answer: "النوم"
                }, {
                  question: "ما هو الشيء الذي يحمل الماء ولكنه ليس إناءً؟ .",
                  answer: "السحاب"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يكون نقيضًا للموت؟ .",
                  answer: "الحياة"
                }, {
                  question: "ما هو الشيء الذي يمكن أن تعطيه دون أن تملكه؟ .",
                  answer: "الابتسامة"
                }, {
                  question: "ما هو الشيء الذي يمكن أن يصنعه الإنسان ولكن لا يستطيع رؤيته؟ .",
                  answer: "الصداع"
                }, {
                  question: "ما هو الشيء الذي يمكن أن ينتج الضوء دون أن يكون مصدرًا للحرارة؟ .",
                  answer: "الشمعة"
                },
    
              ];
              let randomIndex = Math.floor(Math.random() * questions.length);
              let randomQuestion = questions[randomIndex].question;
              let answer = questions[randomIndex].answer;
              api.sendMessage(randomQuestion, event.threadID, (err, messageInfo)=>{
                let stopListening = api.listenMqtt((err, event) => {
                if (err) return console.error(err);

                switch (event.type) {
                  case "message":
                    if(event.threadID === messageInfo.threadID){
                      if (event.body === answer) {               api.sendMessage("جميل انت سريع", event.threadID, event.messageID);
                      return stopListening();
                    } else if (event.body === 'حزورة') {
                      return stopListening();
                    }
                    api.markAsRead(event.threadID, (err) => {
                      if (err) console.log(err);
                    });
                    }

                    break;
                }
              });
              });

	}
};