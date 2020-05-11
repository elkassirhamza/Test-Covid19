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
Ceci, afin de calculer un  de risque spécifique.`,
        choices: `<input type="text" id="numerique" name="choice">
<label for="numerique">ans</label>`,
        number: 12,
        type: 2,
    },
    {
        text: `Quel est votre taille ? 
Afin de calculer l’indice de masse corporelle qui est un  influençant le risque de complications de l’infection.`,
        choices: `<input type="text" id="numerique" name="choice">
<label for="numerique">cm</label>`,
        number: 13,
        type: 2,
    },
    {
        text: `Quel est votre poids ?
Afin de calculer l’indice de masse corporelle qui est un  influençant le risque de complications de l’infection.`,
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
const pointQuestionnaire = document.querySelector(".questionnaire");
const pointInfo = document.querySelector(".informations");
const pointResult = document.querySelector(".resu");
const questionText = document.querySelector('.questions__text');
const suivant = document.querySelector('.btn_next');
const precedente = document.querySelector('.btn-return');
const form = document.querySelector('.questions__form');
const conseil = document.querySelector('.consei');
const progressBar = document.querySelector('.progressBar');
const resultat = document.querySelector('.resultt')
const textResult = document.querySelector('.afficheResult')
const restart = document.querySelector('.btnRestart')

let counter = 0;
let arr2 = [];

lancer.addEventListener("click", function () {
    pointInfo.classList.add('hide');
    pointQuestionnaire.classList.remove('hide');
    preamble.style.display = "none";
    quest1.style.display = "block";
    quest.style.display = "block";
    progressBar.style.display = "block";

    counter += 1;
    changeTextQuest(counter);
    proBar(counter);
    console.log(counter);
    console.log(form);
});
restart.addEventListener('click', () => {
    arr2 = [];
    pointResult.style.display = 'none';
    pointQuestionnaire.style.display = 'block';
    resultat.style.display = 'none';
    quest.style.display = 'block';
    progressBar.style.display = 'block';
    suivant.firstElementChild.textContent = 'question suivant';
    counter = 1;
    changeTextQuest(counter);
    proBar(counter);

});

function changeTextQuest(compteur) {
    let currentQuestion = questionsList.find((ques) => {
        return ques.number == compteur;
    });

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
        } else if (counter == 2 && (details.value < 34 || details.value > 41)) {
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

    };
    console.log(arr2);


    if (counter > 1) {
        precedente.style.display = "block";
    }
    if (counter === 23) {
        suivant.firstElementChild.textContent = 'Afficher resultat';
    }
    if (counter === 13 && (arr2[11] < 15)) {
        pointQuestionnaire.style.display = "none";
        pointResult.classList.remove('hide');
        quest.style.display = "none";
        resultat.style.display = "block";
        progressBar.style.display = "none"

        textResult.firstElementChild.textContent =
            'Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15';
    }
    if (counter === 24) {
        pointQuestionnaire.style.display = "none";
        pointResult.classList.remove('hide');
        quest.style.display = "none";
        resultat.style.display = "block";
        progressBar.style.display = "none"
        triereponces();
        showResult()
    }


    changeTextQuest(counter);
    proBar(counter);
    console.log(form);
});

precedente.addEventListener('click', () => {
    if (counter == 1) {
        precedente.style.display = "none";
    }
    if (counter <= 23) {
        suivant.firstElementChild.textContent = 'question suivant';
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



////////////////////////////////////////////////////////////////
let tabSymptome = [];
let tabPronostique = [];
let tabMajeur = [];
let tabMineur = [];

let nombSypmtome = 0;
let nombPronos = 0;
let nombMin = 0;
let nombMaj = 0;

// let age = arr2[11];
//syptome//

// let fievre = arr2[0] == 'oui';
// let toux = arr2[2] == 'oui';
// let courbatures = arr2[3] == 'oui';
// let malGorge = arr2[4] == 'oui';
// let diarrhee = arr2[5] == 'oui';

triereponces = () => {
    for (let i = 0; i < arr2.length; i++) {

        if ((i == 11) || (i >= 14 && i <= 22)) {
            tabPronostique.push(arr2[i])
        }
        if ((i == 1) || (i == 7) || (i == 10)) {
            tabMineur.push(arr2[i])
        }
        if ((i == 1) || (i == 8) || (i == 9)) {
            tabMajeur.push(arr2[i])
        }
    }

    for (let i = 0; i < tabPronostique.length; i++) {
        if ((tabPronostique[i] == 'oui') || (tabPronostique[i] >= 70)) {
            nombPronos++;
        }
    }
    for (let i = 0; i < tabMineur.length; i++) {
        if ((tabMineur[i] >= 39) || (tabMineur[i] >= 'oui') || (tabMineur[i] == 'Fatigué') || (tabMineur[i] == 'Trop fatigué')) {
            nombMin++;
        }
    }
    for (let i = 0; i < tabMajeur.length; i++) {
        if ((tabMajeur[i] <= 35.4) || (tabMajeur[i] == 'oui')) {
            nombMaj++;
        }
    }
    showResult();
}

function showResult() {
    if (arr2[0] === 'oui' || (arr2[2] == 'oui' && arr2[4] == 'oui') || (arr2[2] == 'oui' && arr2[3] == 'oui')) {

        if ((nombMaj >= 1) || ((nombPronos >= 1) && (nombMin >= 2))) {
            textResult.firstElementChild.textContent = 'veuillez appeler le numéro 141';
        } else if (((nombPronos >= 1) && (nombMaj == 0)) || (nombMin == 1)) {
            textResult.firstElementChild.textContent = 'téléconsultation ou médecin généraliste ou visite à domicile1';
        } else if ((nombPronos == 0) && (nombMaj == 0) && (nombMin == 0) && arr2[11] > 50) {
            textResult.firstElementChild.textContent = 'téléconsultation ou médecin généraliste ou visite à domicile2';
        } else if ((nombPronos == 0) && (nombMaj == 0) && (nombMin == 0) && arr2[11] < 50) {
            textResult.firstElementChild.textContent = 'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.';
        } else if ((arr2[11] <= 50) && (nombMin >= 1)) {
            textResult.firstElementChild.textContent = 'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes';
        } 
    }else {
        textResult.firstElementChild.textContent = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
    }
}