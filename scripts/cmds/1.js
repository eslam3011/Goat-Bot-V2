module.exports = {
	config: {
		name: "خرا", // Name of command, it must be unique to identify with other commands
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

         const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the highest mountain in the world?",
    answer: "Mount Everest"
  },
  {
    question: "What is the largest country in the world?",
    answer: "Russia"
  }
];

// Shuffle the questions array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffle(questions);
  api.setOptions({ listenEvents: true });

  const askQuestion = () => {
    // Get the next question
    const question = questions.pop();

    if (!question) {
      // No more questions, end the game
      api.sendMessage("That's all for now! Thanks for playing!", event.threadID);
      return listenEmitter.stopListening();
    }

    // Ask the question
    api.sendMessage(question.question, event.threadID);

    // Listen for the answer
    const listenEmitter = api.listen((err, event) => {
      if (err) return console.error(err);

      if (event.type === "message" && event.body === question.answer) {
        // Correct answer, send a message and stop listening
        api.sendMessage("Great!", event.threadID);
        listenEmitter.stopListening();
      }
    });
  };

  // Start the game by asking the first question
  askQuestion();
    

	}
};