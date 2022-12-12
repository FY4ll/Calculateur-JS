let Notes = {
    ecp: {
        semestre1: [],
        mod1: [],
        moy: [],
    },
    cie: {
        semestre1: [1,],
        mod1: [],
        moy: [],
    },
    cdb: {
        mathSemestre1: [23,],
        mathSemestre2: [4,],
        mathSemestre3: [5,],
        anglaisSemestre1: [6,],
        anglaisSemestre2: [],
        anglaisSemestre3: [3,],
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

mathanglaisButtons = document.getElementsByName('cbma')
console.log(mathanglaisButtons)
for (const mathanglaisbutton of mathanglaisButtons) {
    mathanglaisbutton.addEventListener("click", function () {
        let value = mathanglaisbutton.value;
        console.log(value);
    });
};
btnAdd.addEventListener('click', function () {
    if (branche == undefined) {
        alert("vous devez choisir une branche!");
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
        Addinggrade(note)
    }
});
function Addinggrade(note) {
    let semestres = Object.keys(Notes[branche])
    console.log(semestres)
    for (const semestre of semestres) {
        Notes[branche][semestre].push(note)
    }
    console.log(Notes[branche]);
}



