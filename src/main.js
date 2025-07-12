const tables = {
    terre: {
        title: "TERRE",
        data: [
            ["Aride", "Marécage"],
            ["Sec", "Lande"],
            ["Gris", "Escarpement"],
            ["Clairsemé", "Pics"],
            ["Acéré", "Forêt"],
            ["Grouillant", "Vallée"],
            ["Immobile", "Collines"],
            ["Moelleux", "Pré"],
            ["Envahi", "Marais"],
            ["Vivace", "Lacs"],
            ["Détrempé", "Clairières"],
            ["Luxuriant", "Plaine"]
        ]
    },
    ciel: {
        title: "CIEL",
        data: [
            ["Scintillant", "Aurore"],
            ["Violet", "Brume"],
            ["Saphir", "Marbre"],
            ["Pâle", "Lueur"],
            ["Ardent", "Ondulations"],
            ["Ivoire", "Tourbillon"],
            ["Ardoise", "Stries"],
            ["Rose", "Moucheté"],
            ["Doré", "Rayons"],
            ["Sanglant", "Piliers"],
            ["Brillant", "Chatoiement"],
            ["Encré", "Houle"]
        ]
    },
    eau: {
        title: "EAU",
        data: [
            ["Cristallin", "Soie"],
            ["Sarcelle", "Rides"],
            ["Nacré", "Abîme"],
            ["Bourbeux", "Remous"],
            ["Cobalt", "Écume"],
            ["Verdâtre", "Miroir"],
            ["Givré", "Déferlante"],
            ["Sombre", "Verre"],
            ["Verdoyant", "Ressac"],
            ["Argenté", "Rapides"],
            ["Émeraude", "Embruns"],
            ["Jade", "Bulles"]
        ]
    },
    meteo: {
        title: "MÉTÉO",
        data: [
            ["Doux", "Pluie"],
            ["Fuyant", "Rafales"],
            ["Persistant", "Nuage"],
            ["Lumineux", "Soleil"],
            ["Léger", "Brume"],
            ["Frais", "Humidité"],
            ["Chaud", "Tonnerre"],
            ["Dense", "Poussière"],
            ["Faible", "Chaleur"],
            ["Ténu", "Bruine"],
            ["Abondant", "Brise"],
            ["Rude", "Brouillard"]
        ]
    },
    flore: {
        title: "FLORE",
        data: [
            ["Aromatique", "Herbes"],
            ["Cendré", "Bruyère"],
            ["Fleuri", "Arbustes"],
            ["Tortueux", "Ronces"],
            ["Imposant", "Canopée"],
            ["Fructueux", "Fougères"],
            ["Piquant", "Troncs"],
            ["Vibrant", "Vignes"],
            ["Fragile", "Conifères"],
            ["Épineux", "Jeunes pousses"],
            ["Robuste", "Roseaux"],
            ["Résineux", "Racines"]
        ]
    },
    faune: {
        title: "FAUNE",
        data: [
            ["Vigilant", "Ongulés"],
            ["Serviable", "Oiseaux"],
            ["Gracieux", "Canidés"],
            ["Bruyant", "Rongeurs"],
            ["Espiègle", "Amphibiens"],
            ["Trompeur", "Insectes"],
            ["Éclairant", "Félidés"],
            ["Placide", "Reptiles"],
            ["Magnifique", "Rapaces"],
            ["Puissant", "Mustélidés"],
            ["Hostile", "Volaille"],
            ["Distant", "Ours"]
        ]
    },
    element: {
        title: "ÉLÉMENT",
        data: [
            ["Enterré", "Livre"],
            ["Coloré", "Siège"],
            ["Orné", "Fosse"],
            ["Hérissé", "Grotte"],
            ["Fendu", "Monolithe"],
            ["Enfoui", "Monticule"],
            ["Réfléchissant", "Cairn"],
            ["Voilé", "Étang"],
            ["Chaud", "Cascade"],
            ["Noyé", "Source"],
            ["Profané", "Arche"],
            ["Isolé", "Menhir"]
        ]
    },
    merveille: {
        title: "MERVEILLE",
        data: [
            ["Plaisir", "Lumière"],
            ["Secrets", "Flammes"],
            ["Prophétie", "Pierres"],
            ["Guérison", "Bêtes"],
            ["Désir", "Étincelles"],
            ["Mémoire", "Sentiers"],
            ["Mort", "Brume"],
            ["Force", "Couleurs"],
            ["Tentation", "Plantes"],
            ["Douleur", "Vent"],
            ["Regret", "Eau"],
            ["Temps", "Ombres"]
        ]
    },
    outremonde: {
        title: "OUTREMONDE",
        data: [
            ["Acide", "Plaines"],
            ["Noir", "Labyrinthe"],
            ["Fumant", "Ruines"],
            ["Gelé", "Escaliers"],
            ["Mort", "Désert"],
            ["Brisé", "Cratères"],
            ["Colossal", "Caverne"],
            ["Vivant", "Jungle"],
            ["Brûlant", "Dunes"],
            ["Boueux", "Tunnels"],
            ["Blanc", "Île"],
            ["Doux", "Montagne"]
        ]
    }
};

let lastHighlighted = {};
let currentPane = 'nature';

// Define which tables belong to each pane
const paneMapping = {
    nature: ['terre', 'ciel', 'eau', 'meteo', 'flore', 'faune', 'element', 'merveille', 'outremonde'],
    civilisation: ['terre', 'ciel', 'eau', 'meteo', 'flore', 'faune', 'element', 'merveille', 'outremonde'],
    personne: ['terre', 'ciel', 'eau', 'meteo', 'flore', 'faune', 'element', 'merveille', 'outremonde'],
    combat: ['terre', 'ciel', 'eau', 'meteo', 'flore', 'faune', 'element', 'merveille', 'outremonde']
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
loadAllTables();
