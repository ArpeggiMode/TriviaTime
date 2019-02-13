var panel = $("#quiz-area");


var questions = [{
  question: "Which presidential candidate won the popular vote in the 2016 American presidential election?",
  answers: ["Pence", "Trump", "Clinton", "Obama"],
  rightAnswer: "Clinton"
}, {
  question: "Which of these animals is not found in a zoo?",
  answers: ["Dolphin", "Penguin", "Bald Eagle", "Orange Tabby Cat"],
  rightAnswer: "Orange Tabby Cat"
}, {
  question: "Which TV station popularized broadcasting Japanese animation in the US?",
  answers: ["Hallmark", "BBC", "Nickelodeon", "Cartoon Network"],
  rightAnswer: "Cartoon Network"
}, {
  question: "Which artist released the hit song, \"I'll Be There\"?",
  answers: ["The Jackson 5", "Steely Dan", "The Cure", "Britney Spears"],
  rightAnswer: "The Jackson 5"
}, {
  question: "Which popular Disney movie featured the song, \"Go The Distance\"?",
  answers: ["Aladdin", "The Little Mermaid", "Mulan", "Hercules"],
  rightAnswer: "Hercules"
}, {
  question: "What did Richard Nixon say in response to allegations of his involvement with the Watergate scandal?",
  answers: ["No.", "You talkin' to me?", "I'm not a crook!", "No further questions."],
  rightAnswer: "I'm not a crook!"
}, {
  question: "What is Sonic The Hedgehog's favorite food?",
  answers: ["Chili Dog", "Milkshake", "Pizza", "Cheeseburger"],
  rightAnswer: "Chili Dog"
}, {
  question: "Which of these men were one of the founding fathers?",
  answers: ["Abraham Lincoln", "Martin Luther King Jr.", "Thomas Jefferson", "Johnny Appleseed"],
  rightAnswer: "Thomas Jefferson"
}];

var timer;

var trivia = {

  right: 0,
  wrong: 0,
  counter: 120,

  countdown: function() {
    trivia.counter--;
    $("#counter-number").html(trivia.counter);
    if (trivia.counter === 0) {
      console.log("TIME UP");
      trivia.done();
    }
  },

  start: function() {
    timer = setInterval(trivia.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].rightAnswer) {
        trivia.right++;
      }
      else {
        trivia.wrong++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.right + "</h3>");
    panel.append("<h3>Inright Answers: " + this.wrong + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.wrong + this.right)) + "</h3>");
  }
};



$(document).on("click", "#start", function() {
  trivia.start();
});


$(document).on("click", "#done", function() {
  trivia.done();
});
