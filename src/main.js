// Load tables data from JSON file
let tables = {};

// Function to load tables from JSON
async function loadTables() {
    try {
        const response = await fetch('./src/tables.json');
        tables = await response.json();
        
        // Initialize the application after tables are loaded
        loadAllTables();
    } catch (error) {
        console.error('Error loading tables:', error);
    }
}

let lastHighlighted = {};
let currentPane = 'nature';

// Define which tables belong to each pane
const paneMapping = {
    nature: ['terre', 'ciel', 'eau', 'meteo', 'flore', 'faune', 'element', 'merveille', 'outremonde'],
    civilisation: ['domaine', 'basse_cour', 'donjon', 'nourriture', 'biens', 'luxes', 'drame', 'malheur', 'nouvelles'],
    personne: ['apparence', 'voix', 'personnalite', 'relation', 'desir', 'tache', 'origine', 'maladie', 'heraldique'],
    combat: ['soldat', 'arme', 'manoeuvres', 'conflit', 'duel', 'champ_bataille', 'deploiement', 'strategie', 'evenement']
};

function showPane(pane) {
    // Hide all panes
    document.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
    
    // Show selected pane
    document.getElementById(pane + '-pane').style.display = 'block';
    
    // Update button states
    document.querySelectorAll('.pane-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentPane = pane;
}

function loadAllTables() {
    // Load tables for all panes
    ['nature', 'civilisation', 'personne', 'combat'].forEach(pane => {
        loadTablesForPane(pane);
    });
}

function loadTablesForPane(pane) {
    const suffix = pane === 'nature' ? '' : '-' + (pane === 'civilisation' ? 'civ' : pane === 'personne' ? 'pers' : 'combat');
    
    paneMapping[pane].forEach(category => {
        const table = tables[category];
        const tableBody = document.getElementById(category + '-body' + suffix);
        
        if (tableBody) {
            tableBody.innerHTML = '';
            
            table.data.forEach((row, index) => {
                const rowElement = document.createElement('div');
                rowElement.className = 'table-row';
                rowElement.dataset.category = category;
                rowElement.dataset.pane = pane;
                rowElement.dataset.index = index;
                rowElement.innerHTML = `
                    <div class="row-number">${index + 1}</div>
                    <div class="row-content">${row[0]}</div>
                    <div class="row-content">${row[1]}</div>
                `;
                tableBody.appendChild(rowElement);
            });
        }
    });
}

function rollAllDice() {
    const diceIcon = document.querySelector('.dice-icon');
    diceIcon.classList.add('dice-animation');
    
    setTimeout(() => {
        diceIcon.classList.remove('dice-animation');
    }, 500);

    // Clear previous highlights for current pane
    Object.keys(lastHighlighted).forEach(key => {
        if (lastHighlighted[key] && key.includes(currentPane)) {
            lastHighlighted[key].classList.remove('highlighted');
        }
    });

    const results = {};
    const resultGrid = document.getElementById('result-grid');
    resultGrid.innerHTML = '';

    // Only roll for tables in current pane
    paneMapping[currentPane].forEach(category => {
        const roll = Math.floor(Math.random() * 12) + 1;
        const result = tables[category].data[roll - 1];
        results[category] = { roll, result };
        
        // Highlight row in current pane
        const suffix = currentPane === 'nature' ? '' : '-' + (currentPane === 'civilisation' ? 'civ' : currentPane === 'personne' ? 'pers' : 'combat');
        const rows = document.querySelectorAll(`[data-category="${category}"][data-pane="${currentPane}"]`);
        const highlightKey = category + '-' + currentPane;
        
        if (rows[roll - 1]) {
            lastHighlighted[highlightKey] = rows[roll - 1];
            lastHighlighted[highlightKey].classList.add('highlighted');
        }
        
        // Create result item
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h4>${tables[category].title} (${roll})</h4>
            <div class="result-text">${result[0]} ${result[1]}</div>
        `;
        resultGrid.appendChild(resultItem);
    });

    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
loadTables();
