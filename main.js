let Notes = {
    ecp: {
        Semestre1: [],
    },
    cie: {
        Semestre1: [],
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
        Semestre1: [],
    },
};
let indexSemestre = "Semestre1"
let branche;
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
        changetable()
    });
}

for (const mathanglaisbutton of mathanglaisButtons) {
    mathanglaisbutton.addEventListener("click", function () {
        let value = mathanglaisbutton.value;
        console.log(value);
        indexSemestre = value

    });
}
for (const semestre of cbButton) {
    semestre.addEventListener('click', function () {
        indexSemestre = indexSemestre.replace(/[1-5]/g, '');
        indexSemestre += semestre.value;
        console.log(indexSemestre)
    });
}

btnAdd.addEventListener('click', function () {
    if (branche == undefined) {
        alert("vous devez choisir une branche!");
    } else {
        let note = noteInput.value;
        let date = dateInput.value;
        let noteInsert = `
                <tr>
                    <td>${note}</td>
                    <td>${date}</td>
                </tr>
                    `
        table.innerHTML += noteInsert;
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
console.log(indexSemestre.length)
function changetable() {
    index = 0
    let template = `
                <tr>
                    <td>${index}</td>
                </tr>
                    `
    let tablenum = table.rows.length
    console.log(tablenum)
    for (i = 0; 1 < Notes[branche][indexSemestre].length; i++) {
        index = Notes[branche][indexSemestre][i];
        table.innerHTML += template;
    }
    console.log('index test');
    console.log(indexSemestre);

}