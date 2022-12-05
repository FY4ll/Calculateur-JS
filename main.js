let Notes = {
    ecp: {
        semestre1: [],
        mod1: [],
        moy: [],
    },
    cie: {
        semestre1: [],
        mod1: [],
        moy: [],
    },
    cdb: {
        mathSemestre1: [],
        mathSemestre2: [],
        mathSemestre3: [],
        anglaisSemestre1: [],
        anglaisSemestre2: [],
        anglaisSemestre3: [],
        anglaisSemestre4: [],
        anglaisSemestre5: [],
        moy: [],
    },
    cg: {
        cultGSemestre1: [],
        cultGSemestre2: [],
        cultGSemestre3: [],
        cultGSemestre4: [],
        cultGSemestre5: [],
        cultGSemestre6: [],
        cultGSemestre7: [],
        cultGSemestre8: [],
        moy: [],
    },
    tpi: {
        semestre1: [],
        mod1: [],
        moy: [],
    },
};

let branche;
let module;
let date;
let btnAdd = document.querySelector('#add');
let table = document.querySelector('table');
let noteInput = document.getElementById('note')
let descInput = document.querySelector('#desc')
let dateInput = document.querySelector('#date')
let brancheButtons = document.getElementsByClassName('branchselector')
console.log(branche)


for (const branchebutton of brancheButtons) {
    branchebutton.addEventListener("click", function () {
        branche = branchebutton.value
        console.log(branche);
    });
}
// let semestreButtons = document.getElementsByName('semestre')
// console.log(semestreButtons)
// for (const semestrebutton of semestreButtons) {
//     semestrebutton.addEventListener("click", function () {
//         let value = semestrebutton.value
//         console.log(value);
//     });
// };
let mathanglaisButtons = document.getElementsByName('cbma')
console.log(mathanglaisButtons)
for (const mathanglaisbutton of mathanglaisButtons) {
    mathanglaisbutton.addEventListener("click", function () {
        let value = mathanglaisbutton.value;
        console.log(value);
    });
};
btnAdd.addEventListener('click', function () {
    if (branche == undefined) {
        alert("vous devez choisir une branche");
    } else {
        let note = noteInput.value;
        let desc = descInput.value;
        let date = dateInput.value;
        let template = `
                <tr>
                    <td>${note}</td>
                    <td>${desc}</td>
                    <td>${date}</td>
                </tr>
                    `
        table.innerHTML += template;
        console.log(branche);
        Notes[branche].semestre1.push(note);
        console.log(Notes[branche].semestre1);
    }
});

function average() {

}

