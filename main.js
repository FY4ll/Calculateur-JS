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
let cbButton = document.getElementsByName('CB')
let cgButton = document.getElementsByName('cg')
mathanglaisButtons = document.getElementsByName('cbma')
for (const branchebutton of brancheButtons) {
    branchebutton.addEventListener("click", function () {
        branche = branchebutton.value
        removetable()
        loadTable()
    });
}

for (const mathanglaisbutton of mathanglaisButtons) {
    mathanglaisbutton.addEventListener("click", function () {
        let value = mathanglaisbutton.value;
        indexSemestre = value

    });
}
for (const semestre of cbButton) {
    semestre.addEventListener('click', function () {
        indexSemestre = indexSemestre.replace(/[1-8]/g, '');
        indexSemestre += semestre.value;
        removetable()
        loadTable()
    });
}
for (const semestre of cgButton) {
    semestre.addEventListener('click', function () {
        indexSemestre = indexSemestre.replace(/[1-8]/g, '');
        indexSemestre += semestre.value;
    });
}
btnAdd.addEventListener('click', function () {
    if (branche == undefined) {
        alert("vous devez choisir une branche!");
    } else {
        let note = noteInput.value;
        Notes[branche][indexSemestre].push(parseFloat(note));
        let noteInsert = `
                <tr>
                    <td>${note}</td>
                    <td>${average()}</td>
                </tr>
                    `
        table.innerHTML += noteInsert;
    }
});
function removetable() {
    let tablenum = table.rows.length
    if (tablenum >= 2) {
        for (var i = 1; i < tablenum; i++) {
            table.deleteRow(1);

        }
    }
}
function loadTable() {
    for (i = 0; i < Notes[branche][indexSemestre].length; i++) {
        let Template = `
         <tr>
             <td>${Notes[branche][indexSemestre][i]}</td>
             <td>${Notes[branche][indexSemestre][i]}</td>
         </tr>
             `
        table.innerHTML += Template
    }
}
function average() {
    let totalnote = 0;
    for (const note of Notes[branche][indexSemestre]) {
        totalnote += note
    }
    totalnote = totalnote / Notes[branche][indexSemestre].length;
    console.log(totalnote)
    return totalnote;
}

