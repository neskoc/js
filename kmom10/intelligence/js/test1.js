/* jshint esversion: 6 */

window.Test1 = (function () {
    "use strict";

    let tools = window.Tools,
        score = 0,
        currentQuestion = 0,
        content = document.getElementById("content"),

        test1Questions = [
            "I vilket land utspelades Rosornas krig på 1400-talet?",
            "Vad är en rosenkrans?",
            "Vilken av dessa växter tillhörrosfamiljen Rosaceae?",
            "Vad är rosfeber?",
            "Vilket vitamin finns det mycket av i nypon?"
        ],
        
        test1Alternativs = [
            [
                "England",
                "Frankrike",
                "Spanien"
            ],
            [
                "Ett radband",
                "En krans i midsommarstången",
                "Ett skägg"
            ],
            [
                "Daggkåpa",
                "Julros",
                "Maskros"
            ],
            [
                "En allergisk reaktion efter stick av rostagg",
                "En bakterieinfektion i huden",
                "En svampsjukdom på rosor"
            ],
            [
                "A-vitamin",
                "B-vitamin",
                "C-vitamin"
            ]
        ],
        
        test1Answers = [0, 0, 0, 1, 2];

    function askNextQuestion() {
        askQuestion(currentQuestion);
    }

    function showResult(correctAnswer) {
        let pContent = "Det rätta svaret är: " + test1Alternativs[currentQuestion][test1Answers[currentQuestion]],
            h1 = "";

        console.log("CorrectAnswer:" + correctAnswer);
        tools.cleanContent();
        if (correctAnswer) {
            h1 = "Rätt svar!";
            pContent = "";
            score += 3;
        } else {
            h1 = "Fel svar!";
        }
        tools.createHeader(h1, pContent);
        if (currentQuestion < test1Answers.length - 1) {
            currentQuestion += 1;
            tools.addButton(askNextQuestion, "Nästa fråga >>");
        } else {
            window.Test.totalScore += score;
            tools.addButton(window.Test2.startTest, "Nästa test >>");
        }
    }

    function createQuestion(questionNr) {
        let questionDiv = document.createElement("div"),
            altDivContainer = document.createElement("div");

        questionDiv.textContent = test1Questions[questionNr];
        content.appendChild(questionDiv);
        questionDiv.classList.add("question");

        test1Alternativs[questionNr].forEach(function(element, index) {
            let altDiv = document.createElement("div");

            altDiv.classList.add("alternative-answer");
            altDiv.innerText = element;
            altDiv.addEventListener("click", function () {
                if (index === test1Answers[questionNr]) {
                    showResult(true);
                } else {
                    showResult(false);
                }
            });
            altDivContainer.appendChild(altDiv);
        });
        content.appendChild(altDivContainer);

    }

    function askQuestion(questionNr) {
        tools.cleanContent();
        createQuestion(questionNr);
    }

    function start() {
        askQuestion(0);
    }

    function startTest () {
        let h1 = "Tipspromenad",
            pContent = `Du kommer få 5 frågor med 3 svarsalternativ var. Varje rätt svar ger 3 poäng. Varje fel svar ger inga poäng.
            Du svarar genom att klicka på något av de angivna alternativen.
            När du är beredd klickar du på start-knappen.`,
            button = document.createElement("button");
        
        score = 0;
        currentQuestion = 0;
        tools.createHeader(h1, pContent);

        tools.addButton(start, "Visa första frågan!");
    }

    return {
        score: score,
        startTest: startTest
    };
})();
