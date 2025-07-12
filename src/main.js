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
    },
    // Civilization Tables
    domaine: {
        title: "DOMAINE",
        data: [
            ["Sombre", "Tourelles"],
            ["Ruiné", "Tour"],
            ["Hostile", "Mur"],
            ["Ancien", "Remparts"],
            ["Orné", "Citadelle"],
            ["Sauvage", "Porte"],
            ["Immaculé", "Flèche"],
            ["Fortifié", "Dôme"],
            ["Inachevé", "Balises"],
            ["Accueillant", "Pont"],
            ["Fier", "Piliers"],
            ["Lumineux", "Douves"]
        ]
    },
    basse_cour: {
        title: "BASSE-COUR",
        data: [
            ["Crasseux", "Marché"],
            ["Abandonné", "Forge"],
            ["Joyeux", "Bibliothèque"],
            ["Sophistiqué", "Fontaine"],
            ["Industrieux", "Temple"],
            ["Humble", "Forum"],
            ["Majestueux", "Tombe"],
            ["Sanctifié", "Jardin"],
            ["Rustique", "Salle"],
            ["Solennel", "Ateliers"],
            ["Animé", "Arène"],
            ["Immaculé", "Garnison"]
        ]
    },
    donjon: {
        title: "DONJON",
        data: [
            ["Foyer", "Bois de cerf"],
            ["Trône", "Argent"],
            ["Musiciens", "Héraldique"],
            ["Bassin", "Os"],
            ["Conseillers", "Fleurs"],
            ["Serviteurs", "Écritures"],
            ["Sanctuaire", "Joyaux"],
            ["Table", "Couronnes"],
            ["Reliquaire", "Bougies"],
            ["Chaudron", "Fourrure"],
            ["Lustre", "Tapisseries"],
            ["Gardes", "Boucliers"]
        ]
    },
    nourriture: {
        title: "NOURRITURE",
        data: [
            ["Épicé", "Poisson"],
            ["Herbal", "Fruit"],
            ["Croquant", "Ragoût"],
            ["Aigre", "Champignons"],
            ["Sec", "Tarte"],
            ["Fermenté", "Fromage"],
            ["Salé", "Noix"],
            ["Humide", "Gâteau"],
            ["Gras", "Porridge"],
            ["Moelleux", "Pain"],
            ["Sucré", "Légume"],
            ["Doux", "Viande"]
        ]
    },
    biens: {
        title: "BIENS",
        data: [
            ["Militaire", "Textile"],
            ["Abondant", "Bétail"],
            ["Traditionnel", "Grain"],
            ["Spécialisé", "Viande"],
            ["Industrieux", "Outils"],
            ["Innovant", "Pierre"],
            ["Secret", "Bois"],
            ["Simple", "Poterie"],
            ["Solide", "Métal"],
            ["Décoré", "Cuir"],
            ["Fin", "Miel"],
            ["Chanceux", "Herbe"]
        ]
    },
    luxes: {
        title: "LUXES",
        data: [
            ["Antique", "Bijou"],
            ["Complexe", "Vin"],
            ["Unique", "Épice"],
            ["Rare", "Parfum"],
            ["Hasardeux", "Soie"],
            ["Parfait", "Fourrure"],
            ["Lumineux", "Œuvre d'art"],
            ["Perdu", "Épée"],
            ["Ésotérique", "Créature"],
            ["Sacré", "Minerai"],
            ["Mystique", "Racine"],
            ["Magnifique", "Écriture"]
        ]
    },
    drame: {
        title: "DRAME",
        data: [
            ["Trahison", "Bagarre"],
            ["Jalousie", "Poison"],
            ["Rivalité", "Serment"],
            ["Infidélité", "Festin"],
            ["Coup d'État", "Lettre"],
            ["Ambition", "Déguisement"],
            ["Rédemption", "Héritage"],
            ["Révélation", "Assassin"],
            ["Colère", "Famille"],
            ["Avidité", "Alcool"],
            ["Bannissement", "Chantage"],
            ["Manipulation", "Or"]
        ]
    },
    malheur: {
        title: "MALHEUR",
        data: [
            ["Secret", "Maladie"],
            ["Violent", "Famine"],
            ["Menaçant", "Raids"],
            ["Soudain", "Invasion"],
            ["Continu", "Enlèvement"],
            ["Prophétisé", "Tempête"],
            ["Mystérieux", "Incendie"],
            ["Sanctifié", "Révolte"],
            ["Invisible", "Exode"],
            ["Vaste", "Bête"],
            ["Croissant", "Meurtre"],
            ["Dissimulé", "Vol"]
        ]
    },
    nouvelles: {
        title: "NOUVELLES",
        data: [
            ["Duel", "Pensif"],
            ["Naissance", "Joyeux"],
            ["Marché", "Content"],
            ["Procès", "Divisé"],
            ["Rituel", "Furieux"],
            ["Mercenaires", "Sceptique"],
            ["Festival", "Adorant"],
            ["Tournoi", "Nostalgique"],
            ["Châtiment", "Unifié"],
            ["Spectacle", "Sombre"],
            ["Mort", "Solennel"],
            ["Mariage", "Optimiste"]
        ]
    },
    // Person Tables
    apparence: {
        title: "APPARENCE",
        data: [
            ["Délicat", "En armure"],
            ["Petit", "En haillons"],
            ["Robuste", "Vibrant"],
            ["Dur", "Grossier"],
            ["Dépenaillé", "Éclectique"],
            ["Froid", "Traditionnel"],
            ["Chaleureux", "Confortable"],
            ["Jeune", "Voyant"],
            ["Doux", "Terne"],
            ["Malade", "Décoré"],
            ["Grand", "Fonctionnel"],
            ["Rude", "Élégant"]
        ]
    },
    voix: {
        title: "VOIX",
        data: [
            ["Chuchotante", "Formelle"],
            ["Apaisante", "Poétique"],
            ["Lisse", "Précise"],
            ["Plate", "Intense"],
            ["Marmonnante", "Décousue"],
            ["Faible", "Détachée"],
            ["Forte", "Passionnée"],
            ["Hésitante", "Tendue"],
            ["Mélodieuse", "Détendue"],
            ["Grave", "Émoussée"],
            ["Erratique", "Tapageuse"],
            ["Tonnante", "Amicale"]
        ]
    },
    personnalite: {
        title: "PERSONNALITÉ",
        data: [
            ["Prudent", "Botanique"],
            ["Spirituel", "Histoire"],
            ["Intellectuel", "Musique"],
            ["Ambitieux", "Jeu"],
            ["Serein", "Animaux"],
            ["Vertueux", "Art"],
            ["Empathique", "Cuisine"],
            ["Instable", "Artisanat"],
            ["Volant", "Pêche"],
            ["Mélancolique", "Mode"],
            ["Cynique", "Chasse"],
            ["Impulsif", "Histoires"]
        ]
    },
    relation: {
        title: "RELATION",
        data: [
            ["Adorant", "Parent"],
            ["Réticent", "Ami"],
            ["Secret", "Amoureux"],
            ["Éloigné", "Époux"],
            ["Détesté", "Soutien"],
            ["Distant", "Allié"],
            ["Harmonieux", "Rival"],
            ["Intime", "Successeur"],
            ["Récent", "Mentor"],
            ["Juré", "Pair"],
            ["Tumultueux", "Ennemi"],
            ["Plein de ressentiment", "Gardien"]
        ]
    },
    desir: {
        title: "DÉSIR",
        data: [
            ["Évasion", "Liberté"],
            ["Richesse", "Amour"],
            ["Statut", "Héritage"],
            ["Connaissance", "Récupération"],
            ["Maîtrise", "Vengeance"],
            ["Héritage", "Devoir"],
            ["Mariage", "Peur"],
            ["Vérité", "Culpabilité"],
            ["Voyage", "Reconnaissance"],
            ["Pouvoir", "Défi"],
            ["Sécurité", "Curiosité"],
            ["Pardon", "Haine"]
        ]
    },
    tache: {
        title: "TÂCHE",
        data: [
            ["Enquêter", "Chevalier"],
            ["Capturer", "Voyant"],
            ["Détruire", "Vassaux"],
            ["Transporter", "Bétail"],
            ["Récupérer", "Monument"],
            ["Réparer", "Or"],
            ["Briser", "Ruine"],
            ["Garder", "Animaux"],
            ["Aider", "Habitation"],
            ["Sauver", "Exploitation"],
            ["Dissimuler", "Pont"],
            ["Chasser", "Guerre"]
        ]
    },
    origine: {
        title: "ORIGINE",
        data: [
            ["Privé", "Guerre"],
            ["Pauvre", "Migration"],
            ["Paria", "Équitation"],
            ["Militaire", "Étude"],
            ["Insulaire", "Exil"],
            ["Nomade", "Joie"],
            ["Charlatanerie", "Maladie"],
            ["Mercantile", "Évasion"],
            ["Paysan", "Blessure"],
            ["Prestigieux", "Amitié"],
            ["Académique", "Exécution"],
            ["Choyé", "Romance"]
        ]
    },
    maladie: {
        title: "MALADIE",
        data: [
            ["Caché", "Insomnie"],
            ["Doux", "Migraines"],
            ["Intermittent", "Arthrite"],
            ["Croissant", "Nausée"],
            ["Médicamenté", "Fixation"],
            ["Nié", "Cécité"],
            ["Inexpliqué", "Surdité"],
            ["Constant", "Mélancolie"],
            ["Diminuant", "Tremblements"],
            ["Permanent", "Fragilité"],
            ["Débilitant", "Toux"],
            ["Évident", "Léthargie"]
        ]
    },
    heraldique: {
        title: "HÉRALDIQUE",
        data: [
            ["Clair", "Bête"],
            ["Chaud", "Oiseau"],
            ["Terreux", "Poisson"],
            ["Riche", "Arme"],
            ["Métallique", "Couronne"],
            ["Brillant", "Arbre"],
            ["Gris", "Fleur"],
            ["Bijouté", "Partie du corps"],
            ["Terne", "Structure"],
            ["Aéré", "Anneau"],
            ["Froid", "Outil"],
            ["Doré", "Étoile"]
        ]
    },
    // Combat Tables
    soldat: {
        title: "SOLDAT",
        data: [
            ["Mobile", "Escarmoucheur"],
            ["Réticent", "Archer"],
            ["Monté", "Éclaireur"],
            ["Renommé", "Milice"],
            ["Zélé", "Garde"],
            ["Conscrit", "Infiltrateur"],
            ["Lâche", "Pillard"],
            ["Lourd", "Vétéran"],
            ["Sanguinaire", "Infanterie"],
            ["Fantaisiste", "Cavalier"],
            ["Redoutable", "Chargeur"],
            ["Mercenaire", "Chevalier"]
        ]
    },
    arme: {
        title: "ARME",
        data: [
            ["Courte", "Lame"],
            ["Pôle", "Lance"],
            ["Chaîne", "Hache"],
            ["Barbelé", "Masse"],
            ["Fourchu", "Couperet"],
            ["Incurvé", "Marteau"],
            ["Lesté", "Pique"],
            ["Double", "Crochet"],
            ["Croisé", "Gourdin"],
            ["Lançant", "Bâton"],
            ["Fin", "Croc"],
            ["Long", "Épée"]
        ]
    },
    manoeuvres: {
        title: "MANŒUVRES",
        data: [
            ["Feinte", "Démoraliser"],
            ["Frappe", "Confondre"],
            ["Vantardise", "Exploiter"],
            ["Défendre", "Bloquer"],
            ["Négocier", "Relocaliser"],
            ["Flurry", "Observer"],
            ["Ruée", "Vaincre"],
            ["Narguer", "Exposer"],
            ["Coup", "Surprendre"],
            ["Charger", "Tituber"],
            ["Assaut", "Affaiblir"],
            ["Provoquer", "Intimider"]
        ]
    },
    conflit: {
        title: "CONFLIT",
        data: [
            ["Frontière", "Guerre"],
            ["Religion", "Raids"],
            ["Succession", "Animosité"],
            ["Ressource", "Trêve"],
            ["Dette", "Escarmouches"],
            ["Trahison", "Impasse"],
            ["Vol", "Occupation"],
            ["Conquête", "Impasse"],
            ["Mariage", "Blocus"],
            ["Tromperie", "Tension"],
            ["Voie navigable", "Négociations"],
            ["Bain de sang", "Négociations"]
        ]
    },
    duel: {
        title: "DUEL",
        data: [
            ["Joute", "Chronométré"],
            ["Épées", "Fosse"],
            ["Partenaire", "Pont"],
            ["Équipe", "Immobile"],
            ["Sans armure", "Labyrinthe"],
            ["Enchaîné", "Archers"],
            ["Sang", "Feu"],
            ["Mort", "Bêtes"],
            ["Reddition", "Boue"],
            ["Jugé", "Nuit"],
            ["Émoussé", "Eau"],
            ["Javelots", "Cage"]
        ]
    },
    champ_bataille: {
        title: "CHAMP DE BATAILLE",
        data: [
            ["Rivière", "Fumée"],
            ["Ruines", "Boue"],
            ["Colline", "Mouches"],
            ["Forêt", "Tranchées"],
            ["Lac", "Tour"],
            ["Avant-poste", "Rochers"],
            ["Col", "Fleurs"],
            ["Ferme", "Ruisseau"],
            ["Sentier", "Épines"],
            ["Pont", "Puanteur"],
            ["Mur", "Ravin"],
            ["Habitation", "Tombes"]
        ]
    },
    deploiement: {
        title: "DÉPLOIEMENT",
        data: [
            ["Agressif", "Ligne"],
            ["Mobile", "Colonne"],
            ["Serré", "Chevron"],
            ["Trompeur", "Rangs"],
            ["Blindé", "Carré"],
            ["Rigide", "Cercle"],
            ["Flexible", "Flanc"],
            ["Ouvert", "Brosse"],
            ["Focalisé", "Bloc"],
            ["Dispersé", "Carré"],
            ["Renforcé", "Coin"],
            ["Défensif", "Dispersion"]
        ]
    },
    strategie: {
        title: "STRATÉGIE",
        data: [
            ["Encercler", "Obscurité"],
            ["Capturer", "Réserves"],
            ["Assaut", "Diversion"],
            ["Harceler", "Trahison"],
            ["Pilier", "Artillerie"],
            ["Dépasser", "Camouflage"],
            ["Embuscade", "Bluff"],
            ["Submerger", "Retard"],
            ["Blocus", "Leurre"],
            ["Diviser", "Appât"],
            ["Focus", "Sacrifice"],
            ["Contre", "Feu"]
        ]
    },
    evenement: {
        title: "ÉVÉNEMENT",
        data: [
            ["Alliés", "Effondrement"],
            ["Moral", "Attaque"],
            ["Météo", "Massacre"],
            ["Terrain", "Impasse"],
            ["Stratégie", "Bloqué"],
            ["Discipline", "Fléchir"],
            ["Animal", "Sabotage"],
            ["Opportunistes", "Disperser"],
            ["Déception", "Charge"],
            ["Leader", "Confusion"],
            ["Butin", "Aggravation"],
            ["Armes", "Découverte"]
        ]
    }
};

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
loadAllTables();
