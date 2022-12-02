let noteInput = document.querySelector('#note');
let descInput = document.querySelector('#desc');
let dateInput = document.querySelector('#date');
let tableGrades = []

document.querySelector('#add').addEventListener('click', () => {
    let sum = 0;
    let note = parseFloat(noteInput.value);
    tableGrades.push(note);
    let desc = descInput.value;
    let date = dateInput.value;

    for (const grade of tableGrades) {
        sum += grade;
    }
    let moyenne = sum / tableGrades.length;
    let template = `
                <tr>
                    <td>${note}</td>
                    <td>${desc}</td>
                    <td>${date}</td>
                    <td>${moyenne}</td>
                </tr>
                `;
    document.querySelector('table').innerHTML += template;
});

    //.toFixed(1)