// Load tables data from JSON file
let tables = {};

// Function to load tables from JSON
async function loadTables() {
    try {
        const response = await fetch('./src/tables.json');
        tables = await response.json();
        
        // Initialize the application after tables are loaded
        generatePanes();
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

// Define column headers for each table
const columnHeaders = {
    terre: ['Caractère', 'Paysage'],
    ciel: ['Ton', 'Texture'],
    eau: ['Ton', 'Texture'],
    meteo: ['Description', 'Élément'],
    flore: ['Nature', 'Forme'],
    faune: ['Nature', 'Forme'],
    element: ['Nature', 'Forme'],
    merveille: ['Thème', 'Élément'],
    outremonde: ['Caractère', 'Paysage'],
    domaine: ['Style', 'Caractéristique'],
    basse_cour: ['Style', 'Caractéristique'],
    donjon: ['Pièce maîtresse', 'Décoration'],
    nourriture: ['Qualité', 'Type'],
    biens: ['Thème', 'Type'],
    luxes: ['Rareté', 'Type'],
    drame: ['Thème', 'Détail'],
    malheur: ['Description', 'Incident'],
    nouvelles: ['Sujet', 'Humeur'],
    apparence: ['Physique', 'Tenue'],
    voix: ['Ton', 'Manière'],
    personnalite: ['Comportement', 'Intérêt'],
    relation: ['État', 'Connexion'],
    desir: ['Ambition', 'Motif'],
    tache: ['Action', 'Sujet'],
    origine: ['Éducation', 'Souvenir'],
    maladie: ['Descripteur', 'Symptôme'],
    heraldique: ['Palette', 'Symbole'],
    soldat: ['Qualité', 'Type'],
    arme: ['Descripteur', 'Caractéristique'],
    manoeuvres: ['Action', 'Intention'],
    conflit: ['Dispute', 'Statut'],
    duel: ['Stipulation', 'Tournure'],
    champ_bataille: ['Caractéristique', 'Détail'],
    deploiement: ['Style', 'Formation'],
    strategie: ['Plan', 'Tournure'],
    evenement: ['Sujet', 'Événement']
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
        const headers = columnHeaders[category];
        resultItem.innerHTML = `
            <h4>${tables[category].title} (${roll})</h4>
            <div class="result-text">${headers[0]}: ${result[0]}, ${headers[1]}: ${result[1]}</div>
        `;
        resultGrid.appendChild(resultItem);
    });

    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}

// Function to generate all panes dynamically
function generatePanes() {
    const tablesContainer = document.getElementById('tables-panes');
    tablesContainer.innerHTML = '';
    
    // Define pane configurations
    const paneConfigs = {
        nature: { name: 'nature', displayName: 'Nature', visible: true },
        civilisation: { name: 'civilisation', displayName: 'Civilisation', visible: false },
        personne: { name: 'personne', displayName: 'Personne', visible: false },
        combat: { name: 'combat', displayName: 'Combat', visible: false }
    };
    
    // Generate each pane
    Object.values(paneConfigs).forEach(paneConfig => {
        const pane = createPane(paneConfig);
        tablesContainer.appendChild(pane);
    });
}

// Function to create a single pane
function createPane(paneConfig) {
    const pane = document.createElement('div');
    pane.className = 'pane';
    pane.id = `${paneConfig.name}-pane`;
    pane.style.display = paneConfig.visible ? 'block' : 'none';
    
    const tablesGrid = document.createElement('div');
    tablesGrid.className = 'tables-grid';
    
    // Get tables for this pane
    const paneTables = paneMapping[paneConfig.name];
    
    paneTables.forEach(tableKey => {
        if (tables[tableKey]) {
            const tableContainer = createTableContainer(tableKey, paneConfig.name);
            tablesGrid.appendChild(tableContainer);
        }
    });
    
    pane.appendChild(tablesGrid);
    return pane;
}

// Function to create a single table container
function createTableContainer(tableKey, paneName) {
    const table = tables[tableKey];
    const headers = columnHeaders[tableKey];
    const suffix = getSuffixForPane(paneName);
    
    const container = document.createElement('div');
    container.className = 'table-container';
    
    // Create table header
    const header = document.createElement('div');
    header.className = 'table-header';
    header.textContent = table.title;
    container.appendChild(header);
    
    // Create subheader
    const subheader = document.createElement('div');
    subheader.className = 'table-subheader';
    
    const numberCell = document.createElement('div');
    numberCell.className = 'subheader-cell';
    numberCell.textContent = '#';
    subheader.appendChild(numberCell);
    
    headers.forEach(headerText => {
        const headerCell = document.createElement('div');
        headerCell.className = 'subheader-cell';
        headerCell.textContent = headerText;
        subheader.appendChild(headerCell);
    });
    
    container.appendChild(subheader);
    
    // Create table body
    const body = document.createElement('div');
    body.id = `${tableKey}-body${suffix}`;
    container.appendChild(body);
    
    return container;
}

// Helper function to get suffix for pane
function getSuffixForPane(paneName) {
    switch (paneName) {
        case 'civilisation': return '-civ';
        case 'personne': return '-pers';
        case 'combat': return '-combat';
        default: return '';
    }
}

// Initialize
loadTables();
