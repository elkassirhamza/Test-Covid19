const questionsList = [{
        text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 1,
        type: 1,

    },
    {
        text: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
        choices: `<label for="numerique">degrée</label>
    <input type="text"  id="numerique" >`,
        number: 2,
        type: 2,

    },
    {
        text: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 3,
        type: 1,
    },
    {
        text: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 4,
        type: 1,
    },
    {
        text: 'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 5,
        type: 1,
    },
    {
        text: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 6,
        type: 1,
    },
    {
        text: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 7,
        type: 1,
    },
    {
        text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 8,
        type: 1,
    },
    {
        text: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 9,
        type: 1,
    },
    {
        text: 'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 10,
        type: 1,
    },
    {
        text: `Quel est votre âge ? 
    Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: `<label for="numerique">ans</label>
    <input type="text" id="numerique" name="choice">`,
        number: 11,
        type: 2,
    },
    {
        text: `Quel est votre taille ? 
    Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<label for="numerique">cm</label>
    <input type="text" id="numerique" name="choice">`,
        number: 12,
        type: 2,
    },
    {
        text: `Quel est votre poids ?
    Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<label for="numerique">kg</label>
    <input type="text" id="numerique" name="choice">`,
        number: 13,
        type: 2
    },
    {
        text: `Avez-vous de l’hypertension artérielle mal équilibrée ?
    Ou avez-vous une maladie cardiaque ou vasculaire ?
    Ou prenez vous un traitement à visée cardiologique ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>
    <label for="sspas">Ne sait pas</label>
    <input type="radio" id="sspas" value="sspas" name="choice" >`,
        number: 14,
        type: 1
    },
    {
        text: `Êtes-vous diabétique ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 15,
        type: 1
    },
    {
        text: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 16,
        type: 1
    },
    {
        text: `Avez-vous une maladie respiratoire ?
    Ou êtes-vous suivi par un pneumologue ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 17,
        type: 1
    },
    {
        text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 18,
        type: 1
    },
    {
        text: `Avez-vous une maladie chronique du foie ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 19,
        type: 1
    },
    {
        text: `Êtes-vous enceinte ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>
    <label for="sspas">Non applicable</label>
    <input type="radio" id="sspas" value="sspas" name="choice" >`,
        number: 20,
        type: 1
    },
    {
        text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>
    <label for="sspas">Ne sait pas</label>
    <input type="radio" id="sspas" value="sspas" name="choice" >`,
        number: 21,
        type: 1
    },
    {
        text: `Prenez-vous un traitement immunosuppresseur ?
    C’est un traitement qui diminue vos défenses contre les infections.
    Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
        choices: `<label for="oui">Oui</label>
    <input type="radio" value="oui" id="oui" name="choice"><br>
    <label for="non">Non</label>
    <input type="radio" id="non" value="non" name="choice"><br>
    <label for="sspas">Ne sait pas</label>
    <input type="radio" id="sspas" value="sspas" name="choice">`,
        number: 22,
        type: 1
    }
];


let lancer = document.querySelector("#btn_1");
let preamble = document.querySelector("#preambule");
let quest = document.querySelector("#question_1");
let quest1 = document.querySelector(".question_1");
let goldpoint = document.querySelector(".active");
const questionText = document.querySelector('.questions__text');
const suivant = document.querySelector('.btn_next');
const precedente = document.querySelector('.btn-return');
const form = document.querySelector('.questions__form');
let conseil = document.querySelector('.consei');



let counter = 0;
let arr2 = [];

lancer.addEventListener("click", function () {

    preamble.style.display = "none";
    quest1.style.display = "block";
    quest.style.display = "block";
    goldpoint.style.animation = "mymove .5s forwards";
    counter += 1;
    changeTextQuest(counter);
    console.log(counter);

    console.log(form);
});


function changeTextQuest(compteur) {

    let currentQuestion = questionsList.find((ques) => {
        return ques.number == compteur;

    });

    // let inputs = document.querySelector('input');

    questionText.textContent = currentQuestion.text;
    form.innerHTML = currentQuestion.choices;

}

suivant.addEventListener('click', () => {
    conseil.style.display = "none";
    let details = document.querySelector('#numerique');
    if (form.children[1].id === 'numerique') {

        if (details.value === "") {
            alert("Enter valid number")
            return;
        } else {
            arr2.push(details.value);
            console.log(details.value);
            counter += 1;
        }

    } else if (questionsList[counter - 1].type === 1) {
        var valeur = document.querySelector('input[name=choice]:checked').value;
        arr2.push(valeur);
        counter += 1;
    };
    console.log(arr2);

    // counter += 1;

    if (counter >= 1) {
        precedente.style.display = "block";
    }

    changeTextQuest(counter);
    console.log(form);
});

precedente.addEventListener('click', () => {
    counter -= 1;

    if (counter <= 1) {
        precedente.style.display = "none";
    }
    arr2.pop();
    console.log(arr2)
    changeTextQuest(counter);
});






/*

if (isNaN(details.value)) {
alert("check input");
console.log(isNaN(details.value));*/