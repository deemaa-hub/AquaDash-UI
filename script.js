const projects = [
    { name: "Dropbox Design System", hours: 34, progress: 15, img: "https://via.placeholder.com/30" },
    { name: "Slack Team UI Design", hours: 47, progress: 35, img: "https://via.placeholder.com/30" },
    { name: "GitHub Satellite", hours: 120, progress: 75, img: "https://via.placeholder.com/30" }
];

const tableBody = document.getElementById('table-body');
const updateBtn = document.getElementById('updateBtn');
const cardValues = document.querySelectorAll('.card-value');
const addCardBtn = document.getElementById('addCardBtn');
const cardsContainer = document.querySelector('.row.g-3');

function populateTable() {
    tableBody.innerHTML = '';

    projects.forEach(project => {
        const row = `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${project.img}" alt="logo" class="rounded-circle me-2">
                        ${project.name}
                    </div>
                </td>
                <td>${project.hours}</td>
                <td><span class="badge bg-light text-dark">--</span></td>
                <td>
                    <div class="progress" style="height: 5px;">
                        <div class="progress-bar bg-primary" style="width: ${project.progress}%"></div>
                    </div>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function updateCards() {
    const currentCardValues = document.querySelectorAll('.card-value');
    currentCardValues.forEach(card => {
        const randomNumber = Math.floor(Math.random() * 50000);
        card.innerText = randomNumber.toLocaleString();
    });
}

function addNewCard() {
    const newCardCol = document.createElement('div');
    newCardCol.className = 'col-md-3';

    newCardCol.innerHTML = `
        <div class="card stats-card p-3">
            <div class="d-flex justify-content-between">
                <div>
                    <h6 class="text-muted">New Widget</h6>
                    <h3 class="card-value">0</h3>
                    <small class="text-muted">New Task</small>
                </div>
                <div class="text-danger fs-2">⚙️</div>
            </div>
        </div>
    `;

    cardsContainer.appendChild(newCardCol);
}

updateBtn.addEventListener('click', () => {
    updateCards();
    populateTable();
    alert("Data updated successfully!");
});

addCardBtn.addEventListener('click', addNewCard);

populateTable();