module.exports = {
    config: {
        name: "اقتباس",
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

let saved =[
    "النجاح هو القدرة على الذهاب من هزيمة إلى هزيمة دون فقدان الحماس.",
    "العمل الجاد يقود دائمًا إلى النجاح، لكن بدون نزاهة، لا يوجد نجاح حقيقي.",
    "لا يمكن تحقيق النجاح دون التضحية ببعض الأشياء الثمينة.",
    "إن الشيء الوحيد الذي يقف بينك وبين حلمك هو القصة التي ترويها لنفسك بشأن سبب عدم إمكانية تحقيقه.",
    "لا تتوقف عن العمل الشاق. يأتي النجاح لأولئك الذين يواصلون العمل بعد أن يشعروا بالملل.",
    "تذكر دائمًا أن النجاح لا يأتي بالليل، فقد تحتاج إلى العمل بجدية لفترة طويلة قبل أن تصل إلى هدفك.",
    "التغيير هو القاعدة الوحيدة الدائمة في الحياة. لذلك، فإن الشخص الذي يتكيف أفضل هو الشخص الذي ينجح.",
    "لن تكون قادرًا على الوصول إلى القمة إذا لم تبدأ من الأسفل.",
    "النجاح هو الحصول على ما تريد، ولكن السعادة هي الاستمتاع بما تحصل عليه.",
    "لا يوجد شيء مستحيل. الكلمة نفسها تقول \"أنا ممكن\".",
    "لا تخف من الفشل. في الواقع، يمكن أن يكون الفشل بمثابة الخطوة الأولى نحو النجاح.",
    "لا يوجد شيء مستحيل. إذا كان حلمك واضحًا ومحددًا، فإن العالم بأسره سيعمل معك لتحقيقه.",
    "إن الشخص الناجح هو الشخص الذي يستطيع أن يبني جسرًا من الحجارة التي رماها الآخرون عليه.",
 "لا تدع شيئًا يعيق طريقك نحو الأمام.", "التكيف هو المفتاح إلى النجاح.",  "التكرار هو أم الحكمة.",  "الأشياء العظيمة لا تأتي من خلال الراحة.",  "لا يمكن أن يتحقق النجاح إذا لم يتم اتخاذ المخاطر.",  "النجاح هو النتيجة الطبيعية للعمل الجاد.",  "القدرة على التحمل تعتبر أهم سمة تميز الإنسان الناجح.",  "الرغبة الشديدة هي السر وراء النجاح.",  "لا تسمح لشخص ما بجعلك تشعر بأنك غير كافٍ.",  "الثقة بالنفس هي مفتاح النجاح.",  "إذا لم تتمكن من شيء، فابحث عن شخص يمكنه مساعدتك.",  "العمل الجاد يفوق العبقرية.",  "التفاؤل هو المفتاح الحقيقي إلى النجاح.",  "النجاح هو الحصول على ما تريده، والسعادة هي الاستمتاع بما حصلت عليه.",  "الاستعداد هو المفتاح إلى الثقة.",  "الإيمان بالنفس هو أول سر النجاح.",  "المستحيل هو مجرد كلمة واحدة، والحياة مليئة بالإمكانيات.",  "الاستمرارية هي السر الأكبر للنجاح.",  "اعمل بذكاء، وليس بجهد.",  "لا تفشل في التخطيط، ولا تخطط للفشل."

]

if (event.body && event.body.toLowerCase() == "اقتباس") return message.reply(saved[Math.floor(Math.random()*saved.length)]);
}
};






