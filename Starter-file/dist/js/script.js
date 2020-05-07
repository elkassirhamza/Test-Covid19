const questionsList = [{
        text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
        choices: `<div class="radio_1">
                <div class="option">  
                <input type="radio" value="oui" id="oui" name="choice">
                    <label for="oui">Oui</label>
                </div >
                <br>
                <div class="option">
                    <input type="radio" id="non" value="non" name="choice">
                     <label for="non">Non</label> 
                </div>
         </div>`,
        number: 1,
        type: 1,

    },
    {
        text: 'quelle est votre température ?',
        choices: `<input type="number" placeholder="37" id="numerique" >
        <label for="numerique">degrée</label>`,
        number: 2,
        type: 2,

    },
    {
        text: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 3,
        type: 1,
    },
    {
        text: 'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?',
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 4,
        type: 1,
    },
    {
        text: 'Avez-vous un mal de gorge apparu ces derniers jours ?',
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 5,
        type: 1,
    },
    {
        text: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 6,
        type: 1,
    },
    {
        text: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
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
        text: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 9,
        type: 1,
    },
    {
        text: 'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?',
        choices: `<label for="oui">Oui</label>
                    <input type="radio" value="oui" id="oui" name="choice"><br>
                    <label for="non">Non</label>
                    <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 10,
        type: 1,
    },
    {
        text: 'Comment vous sentez-vous ? ',
        choices: `<div class="fourchoices">
		<div class="choices">
		<label for="fatigue">Fatigué</label>
		<input type="radio" value="fatigué" id="fatigue" name="choice"><br>
		</div>
		<div class="choices">
		<label for="bien">Bien</label>
		<input type="radio" id="bien" value="bien" name="choice"><br>
		</div>
	</div>
	<div class="fourchoices">
		<div class="choices">
		<label for="trop-fatigue">Trop fatigué</label>
		<input type="radio" value="trop-fatigué" id="trop-fatigue" name="choice"><br>
	</div>
		<div class="choices">
		<label for="moyen">Moyen</label>
		<input type="radio" id="moyen" value="moyen" name="choice"><br>
	</div>
	</div>`,
        number: 11,
        type: 1,
    },
    {
        text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: `<input type="text" id="numerique" name="choice">
        <label for="numerique">ans</label>`,
        number: 12,
        type: 2,
    },
    {
        text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<input type="text" id="numerique" name="choice">
        <label for="numerique">cm</label>`,
        number: 13,
        type: 2,
    },
    {
        text: `Quel est votre poids ?
Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: `<input type="text" id="numerique" name="choice">
        <label for="numerique">kg</label>`,
        number: 14,
        type: 2
    },
    {
        text: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
        choices: `<label for="oui">Oui</label>
                <input type="radio" value="oui" id="oui" name="choice"><br>
                <label for="non">Non</label>
                <input type="radio" id="non" value="non" name="choice"><br>
                <label for="sspas">Ne sait pas</label>
                <input type="radio" id="sspas" value="sspas" name="choice" >`,
        number: 15,
        type: 1
    },
    {
        text: `Êtes-vous diabétique ?`,
        choices: `<label for="oui">Oui</label>
                <input type="radio" value="oui" id="oui" name="choice"><br>
                <label for="non">Non</label>
                <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 16,
        type: 1
    },
    {
        text: `Avez-vous ou avez-vous eu un cancer ?`,
        choices: `<label for="oui">Oui</label>
                <input type="radio" value="oui" id="oui" name="choice"><br>
                <label for="non">Non</label>
                <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 17,
        type: 1
    },
    {
        text: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ?
        Ou êtes-vous suivi par un pneumologue ?`,
        choices: `<label for="oui">Oui</label>
            <input type="radio" value="oui" id="oui" name="choice"><br>
            <label for="non">Non</label>
            <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 18,
        type: 1
    },
    {
        text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
        choices: `<label for="oui">Oui</label>
                <input type="radio" value="oui" id="oui" name="choice"><br>
                <label for="non">Non</label>
                <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 19,
        type: 1
    },
    {
        text: `Avez-vous une maladie chronique du foie ?`,
        choices: `<label for="oui">Oui</label>
                <input type="radio" value="oui" id="oui" name="choice"><br>
                <label for="non">Non</label>
                <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 20,
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
        number: 21,
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
        number: 22,
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
        number: 23,
        type: 1
    }
];


const lancer = document.querySelector("#btn_1");
const preamble = document.querySelector("#preambule");
const quest = document.querySelector("#question_1");
const quest1 = document.querySelector(".question_1");
// let goldpoint = document.querySelector(".active");
const pointQuestionnaire = document.querySelector(".questionnaire");
const pointInfo = document.querySelector(".informations");
const questionText = document.querySelector('.questions__text');
const suivant = document.querySelector('.btn_next');
const precedente = document.querySelector('.btn-return');
const form = document.querySelector('.questions__form');
const conseil = document.querySelector('.consei');

const progressBar = document.querySelector('.progressBar');



let counter = 0;
let arr2 = [];

lancer.addEventListener("click", function () {
    pointInfo.classList.add('hide');
    pointQuestionnaire.classList.remove('hide');
    preamble.style.display = "none";
    quest1.style.display = "block";
    quest.style.display = "block";
    progressBar.style.display = "block";
    // goldpoint.style.animation = "mymove .5s forwards";
    counter += 1;
    changeTextQuest(counter);
    proBar(counter);


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
    if (form.children[0].id === 'numerique') {

        if (details.value === "") {
            alert("Enter valid number")
            return;
        } else if (counter == 2 && (details.value < 36 || details.value > 41)) {
            alert('Entrer your temperature');
            return;
        } else if (counter === 12 && (details.value > 110)) {
            alert("l'age doit etre inferieure a 110");
            return;
        } else if (counter === 13 && (details.value < 100 || details.value > 200)) {
            alert('Enter taille entre 100 et 200');
            return;
        } else if (counter === 14 && (details.value < 40 || details.value > 200)) {
            alert('Poids etre 40 et 200');
            return;
        } else {
            arr2.push(details.value);
            console.log(details.value);
            counter += 1;
        }
    } else if (questionsList[counter - 1].type === 1) {
        var valeur = document.querySelector('input[name=choice]:checked').value;
        if (valeur === 'non' && counter === 1) {
            arr2.push(valeur);
            arr2.push('37');
            counter += 2;
        } else {
            arr2.push(valeur);
            counter += 1;
        }
        // arr2.push(valeur);
        // counter += 1;
    };
    console.log(arr2);

    // counter += 1;

    if (counter >= 1) {
        precedente.style.display = "block";
    }

    changeTextQuest(counter);
    proBar(counter);
    console.log(form);
});

precedente.addEventListener('click', () => {
    if (counter <= 1) {
        precedente.style.display = "none";
    }

    if (counter === 3 && arr2[0] === 'non') {
        counter -= 1;
        arr2.pop();
        precedente.style.display = "none";
    }

    counter -= 1;

    arr2.pop();
    console.log(arr2)
    changeTextQuest(counter);
    proBar(counter);
});
const progression = document.querySelector('.progress')
const questNumber = document.querySelector('.prognum')

function proBar(pourcent) {
    progression.style.width = `${ 100 / 23 * pourcent}%`;
    questNumber.textContent = `${pourcent}/23`
}



/*

if (isNaN(details.value)) {
alert("check input");
console.log(isNaN(details.value));*/