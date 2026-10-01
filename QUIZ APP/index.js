let questions = [
    {
        ques: "What will be the output?\nconsole.log(a);\nvar a = 10;",
        options: [
            "10",
            "undefined",
            "ReferenceError",
            "null"
        ],
        answer: "undefined"
    },

    {
        ques: "What will be the output?\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);",
        options: [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4]",
            "ReferenceError"
        ],
        answer: "[1, 2, 3, 4]"
    },

    {
        ques: "What will happen?\nconsole.log(a);\nlet a = 10;",
        options: [
            "10",
            "undefined",
            "ReferenceError",
            "TypeError"
        ],
        answer: "ReferenceError"
    },

    {
        ques: "What will be the output?\nconsole.log([] == false);",
        options: [
            "true",
            "false",
            "undefined",
            "TypeError"
        ],
        answer: "true"
    },

    {
        ques: "What will be the output?\nlet x = 10;\nfunction test() {\nconsole.log(x);\nlet x = 20;\n}\ntest();",
        options: [
            "10",
            "20",
            "undefined",
            "ReferenceError"
        ],
        answer: "ReferenceError"
    },

    {
        ques: "What will be the output?\nconst obj = { a: 1 };\nconst copy = { ...obj };\ncopy.a = 2;\nconsole.log(obj.a);",
        options: [
            "1",
            "2",
            "undefined",
            "ReferenceError"
        ],
        answer: "1"
    },

    {
        ques: "What will be the output?\nconsole.log(1 + '2' - 1);",
        options: [
            "11",
            "12",
            "2",
            "NaN"
        ],
        answer: "11"
    },

    {
        ques: "What will be the output?\nfunction outer() {\nlet count = 0;\nreturn function() {\ncount++;\nreturn count;\n};\n}\n\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());",
        options: [
            "1, 1",
            "1, 2",
            "0, 1",
            "2, 2"
        ],
        answer: "1, 2"
    },

    {
        ques: "What will be the output?\nconsole.log(typeof foo);\nvar foo = function() {};",
        options: [
            "function",
            "undefined",
            "object",
            "ReferenceError"
        ],
        answer: "undefined"
    },

    {
        ques: "What will be the output?\nconst arr = [1, 2, 3, 4];\nconst result = arr.filter(x => x % 2 === 0).map(x => x * 10);\nconsole.log(result);",
        options: [
            "[10, 30]",
            "[20, 40]",
            "[2, 4]",
            "[1, 3]"
        ],
        answer: "[20, 40]"
    }
];

let btn = document.querySelector("#button");
let ques = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let progress_bar = document.querySelector("#progress-bar");
let progress_count = document.querySelector("#progress-ct");
let option = document.querySelector("#options");
let cans = 0;
let curr = 0;
let answered = false;

function loadQuestion() {
    
    answered = false;
    ques.textContent = questions[curr].ques;

    option1.textContent = questions[curr].options[0];
    option2.textContent = questions[curr].options[1];
    option3.textContent = questions[curr].options[2];
    option4.textContent = questions[curr].options[3];

    progress_count.textContent = curr + 1;

    option.style.backgroundColor = "";
    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    option4.style.backgroundColor = "";

    option1.style.color = "#334155";
    option2.style.color = "#334155";
    option3.style.color = "#334155";
    option4.style.color = "#334155";

    let progress = ((curr + 1) / questions.length) * 100;

    progress_bar.style.width = `${progress}%`;
}



// First question load
loadQuestion();

function checkAnswer(e){
    if (answered) {
        return;
    }

    if(e.target.tagName !== "LI") {
        return;
    }
    answered = true;


    let userans = e.target.textContent;
    let correctAnswer = questions[curr].answer;

    if(userans == questions[curr]["answer"]){
        e.target.style.backgroundColor = "#90EE90"
        e.target.style.color = "black"
        cans++;
        console.log(cans);
    }
    if(userans != questions[curr]["answer"]){
        e.target.style.backgroundColor = "#F08080"
        e.target.style.color = "black"
    }
    if (option1.textContent === correctAnswer) {
            option1.style.backgroundColor = "#90EE90";
            option1.style.color = "black";
    }
    if (option2.textContent === correctAnswer) {
        option2.style.backgroundColor = "#90EE90";
        option2.style.color = "black";
    }
    if (option3.textContent === correctAnswer) {
        option3.style.backgroundColor = "#90EE90";
        option3.style.color = "black";
    }
    if (option4.textContent === correctAnswer) {
        option4.style.backgroundColor = "#90EE90";
        option4.style.color = "black";
    }
    // console.log(e.target.textContent);
}
option.addEventListener('click',(e) => {
    checkAnswer(e);
})

btn.addEventListener("click", () => {

    if (curr >= questions.length - 1) {
        let div = document.createElement("div");

        div.textContent = `🎉 Congratulations! Your score → ${cans}/${questions.length} 🎉`;

        document.querySelector("#outer").appendChild(div);

        btn.style.display = "none";

        return;
    }

    curr++;

    loadQuestion();
    
});




