let Notes = {
    ecp: {
        semestre1: [],
    },
    cie: {
        semestre1: [],
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
    },
    tpi: {
        semestre1: [],
    },
};
let indexSemestre;
let branche;
let module;
let btnAdd = document.querySelector('#add');
let table = document.querySelector('table');
let noteInput = document.getElementById('note')
let dateInput = document.querySelector('#date')
let brancheButtons = document.getElementsByClassName('branchselector')
let cbButton = document.getElementsByName('semestre')
mathanglaisButtons = document.getElementsByName('cbma')
for (const branchebutton of brancheButtons) {
    branchebutton.addEventListener("click", function () {
        branche = branchebutton.value
        console.log(branche);
    });
}


for (const mathanglaisbutton of mathanglaisButtons) {
    mathanglaisbutton.addEventListener("click", function () {
        let value = mathanglaisbutton.value;
        console.log(value);
        indexSemestre = value
        for (const semestre of cbButton) {
            semestre.addEventListener('click', function () {
                indexSemestre += semestre.value;
                console.log(indexSemestre)
            });
        }
    });
}


btnAdd.addEventListener('click', function () {
    if (branche == undefined) {
        alert("vous devez choisir une branche!");
    } else {
        let note = noteInput.value;
        let date = dateInput.value;
        let average;
        let template = `
                <tr>
                    <td>${note}</td>
                    <td>${date}</td>
                </tr>
                    `
        table.innerHTML += template;
        Addinggrade(note)
    }
});
function Addinggrade(note) {
    parseFloat(note)
    let semestres = Object.keys(Notes[branche])
    Notes[branche][indexSemestre].push(note);
    console.log(Notes[branche][indexSemestre]);
    console.log(Notes);
}

