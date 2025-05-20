// Schulelemente für alle Wochentage
const wochentagsDaten = {
  montag: [
    { 
      kategorie: "📚 Grundausstattung",
      items: [
        { id: "montag_schulranzen", name: "Schulranzen", icon: "fas fa-backpack" },
        { id: "montag_federmäppchen", name: "Federmäppchen", icon: "fas fa-pencil-ruler" },
        { id: "montag_trinkflasche", name: "Trinkflasche", icon: "fas fa-tint" },
        { id: "montag_pausenbrot", name: "Pausenbrot/Snack", icon: "fas fa-apple-alt" },
        { id: "montag_maske", name: "Maske", icon: "fas fa-head-side-mask" }
      ]
    },
    {
      kategorie: "📖 Bücher & Hefte",
      items: [
        { id: "montag_deutschbuch", name: "Deutschbuch", icon: "fas fa-book" },
        { id: "montag_mathebuch", name: "Mathematikbuch", icon: "fas fa-calculator" },
        { id: "montag_sachkundebuch", name: "Sachkundebuch", icon: "fas fa-globe-europe" },
        { id: "montag_hausaufgabenheft", name: "Hausaufgabenheft", icon: "fas fa-tasks" }
      ]
    },
    {
      kategorie: "🏃‍♂️ Sportsachen",
      items: [
        { id: "montag_sportsachen", name: "Sportsachen", icon: "fas fa-running" },
        { id: "montag_turnschuhe", name: "Turnschuhe", icon: "fas fa-shoe-prints" }
      ]
    },
    {
      kategorie: "✏️ Sonstiges",
      items: [
        { id: "montag_lineal", name: "Lineal", icon: "fas fa-ruler" },
        { id: "montag_schere", name: "Schere", icon: "fas fa-cut" },
        { id: "montag_kleber", name: "Kleber", icon: "fas fa-paste" },
        { id: "montag_farbstifte", name: "Farbstifte", icon: "fas fa-paint-brush" }
      ]
    }
  ],
  
  dienstag: [
    { 
      kategorie: "📚 Grundausstattung",
      items: [
        { id: "dienstag_schulranzen", name: "Schulranzen", icon: "fas fa-backpack" },
        { id: "dienstag_federmäppchen", name: "Federmäppchen", icon: "fas fa-pencil-ruler" },
        { id: "dienstag_trinkflasche", name: "Trinkflasche", icon: "fas fa-tint" },
        { id: "dienstag_pausenbrot", name: "Pausenbrot/Snack", icon: "fas fa-apple-alt" }
      ]
    },
    {
      kategorie: "📖 Bücher & Hefte",
      items: [
        { id: "dienstag_englischbuch", name: "Englischbuch", icon: "fas fa-language" },
        { id: "dienstag_mathebuch", name: "Mathematikbuch", icon: "fas fa-calculator" },
        { id: "dienstag_musikheft", name: "Musikheft", icon: "fas fa-music" },
        { id: "dienstag_hausaufgabenheft", name: "Hausaufgabenheft", icon: "fas fa-tasks" }
      ]
    },
    {
      kategorie: "🎨 Kunstsachen",
      items: [
        { id: "dienstag_zeichenblock", name: "Zeichenblock", icon: "fas fa-paint-brush" },
        { id: "dienstag_wasserfarben", name: "Wasserfarben", icon: "fas fa-palette" },
        { id: "dienstag_pinsel", name: "Pinsel", icon: "fas fa-brush" }
      ]
    },
    {
      kategorie: "✏️ Sonstiges",
      items: [
        { id: "dienstag_geodreieck", name: "Geodreieck", icon: "fas fa-ruler-combined" },
        { id: "dienstag_buntstifte", name: "Buntstifte", icon: "fas fa-pencil-alt" }
      ]
    }
  ],
  
  mittwoch: [
    { 
      kategorie: "📚 Grundausstattung",
      items: [
        { id: "mittwoch_schulranzen", name: "Schulranzen", icon: "fas fa-backpack" },
        { id: "mittwoch_federmäppchen", name: "Federmäppchen", icon: "fas fa-pencil-ruler" },
        { id: "mittwoch_trinkflasche", name: "Trinkflasche", icon: "fas fa-tint" },
        { id: "mittwoch_pausenbrot", name: "Pausenbrot/Snack", icon: "fas fa-apple-alt" }
      ]
    },
    {
      kategorie: "📖 Bücher & Hefte",
      items: [
        { id: "mittwoch_deutschbuch", name: "Deutschbuch", icon: "fas fa-book" },
        { id: "mittwoch_geschichtsbuch", name: "Geschichtsbuch", icon: "fas fa-landmark" },
        { id: "mittwoch_biologiebuch", name: "Biologiebuch", icon: "fas fa-leaf" },
        { id: "mittwoch_hausaufgabenheft", name: "Hausaufgabenheft", icon: "fas fa-tasks" }
      ]
    },
    {
      kategorie: "🔬 Laborsachen",
      items: [
        { id: "mittwoch_laborkittel", name: "Laborkittel (falls nötig)", icon: "fas fa-user-md" }
      ]
    },
    {
      kategorie: "✏️ Sonstiges",
      items: [
        { id: "mittwoch_taschenrechner", name: "Taschenrechner", icon: "fas fa-calculator" },
        { id: "mittwoch_zirkel", name: "Zirkel", icon: "fas fa-compass" }
      ]
    }
  ],
  
  donnerstag: [
    { 
      kategorie: "📚 Grundausstattung",
      items: [
        { id: "donnerstag_schulranzen", name: "Schulranzen", icon: "fas fa-backpack" },
        { id: "donnerstag_federmäppchen", name: "Federmäppchen", icon: "fas fa-pencil-ruler" },
        { id: "donnerstag_trinkflasche", name: "Trinkflasche", icon: "fas fa-tint" },
        { id: "donnerstag_pausenbrot", name: "Pausenbrot/Snack", icon: "fas fa-apple-alt" }
      ]
    },
    {
      kategorie: "📖 Bücher & Hefte",
      items: [
        { id: "donnerstag_physikbuch", name: "Physikbuch", icon: "fas fa-atom" },
        { id: "donnerstag_mathebuch", name: "Mathematikbuch", icon: "fas fa-calculator" },
        { id: "donnerstag_fremdsprachenbuch", name: "Fremdsprachenbuch", icon: "fas fa-language" },
        { id: "donnerstag_hausaufgabenheft", name: "Hausaufgabenheft", icon: "fas fa-tasks" }
      ]
    },
    {
      kategorie: "🏃‍♂️ Sportsachen",
      items: [
        { id: "donnerstag_sportsachen", name: "Sportsachen", icon: "fas fa-running" },
        { id: "donnerstag_turnschuhe", name: "Turnschuhe", icon: "fas fa-shoe-prints" },
        { id: "donnerstag_sportflasche", name: "Extra Wasserflasche", icon: "fas fa-tint" }
      ]
    },
    {
      kategorie: "✏️ Sonstiges",
      items: [
        { id: "donnerstag_wörterbuch", name: "Wörterbuch", icon: "fas fa-book-open" },
        { id: "donnerstag_kopfhörer", name: "Kopfhörer (falls nötig)", icon: "fas fa-headphones" }
      ]
    }
  ],
  
  freitag: [
    { 
      kategorie: "📚 Grundausstattung",
      items: [
        { id: "freitag_schulranzen", name: "Schulranzen", icon: "fas fa-backpack" },
        { id: "freitag_federmäppchen", name: "Federmäppchen", icon: "fas fa-pencil-ruler" },
        { id: "freitag_trinkflasche", name: "Trinkflasche", icon: "fas fa-tint" },
        { id: "freitag_pausenbrot", name: "Pausenbrot/Snack", icon: "fas fa-apple-alt" }
      ]
    },
    {
      kategorie: "📖 Bücher & Hefte",
      items: [
        { id: "freitag_deutschbuch", name: "Deutschbuch", icon: "fas fa-book" },
        { id: "freitag_mathebuch", name: "Mathematikbuch", icon: "fas fa-calculator" },
        { id: "freitag_ethikbuch", name: "Ethik/Religion", icon: "fas fa-pray" },
        { id: "freitag_hausaufgabenheft", name: "Hausaufgabenheft", icon: "fas fa-tasks" }
      ]
    },
    {
      kategorie: "🎵 Musiksachen",
      items: [
        { id: "freitag_blockflöte", name: "Blockflöte (falls nötig)", icon: "fas fa-music" },
        { id: "freitag_notenheft", name: "Notenheft", icon: "fas fa-file-audio" }
      ]
    },
    {
      kategorie: "✏️ Sonstiges",
      items: [
        { id: "freitag_schere", name: "Schere", icon: "fas fa-cut" },
        { id: "freitag_kleber", name: "Kleber", icon: "fas fa-paste" },
        { id: "freitag_farbstifte", name: "Farbstifte", icon: "fas fa-paint-brush" }
      ]
    }
  ]
};

// Aktueller Wochentag (Standard: Montag)
let aktuellerTag = "montag";

// Lade gespeicherte Daten aus dem localStorage
function ladeGespeicherteDaten() {
  const gespeicherterStatus = localStorage.getItem('schulelementeStatus');
  return gespeicherterStatus ? JSON.parse(gespeicherterStatus) : {};
}

// Speichere Daten in localStorage
function speichereStatus(status) {
  localStorage.setItem('schulelementeStatus', JSON.stringify(status));
}

// Hole die benutzerdefinierten Elemente aus dem localStorage
function ladeBenutzerdefinierteDaten() {
  const benutzerdefinierteElemente = localStorage.getItem('benutzerdefinierteElemente');
  return benutzerdefinierteElemente ? JSON.parse(benutzerdefinierteElemente) : {};
}

// Speichere benutzerdefinierte Elemente in localStorage
function speichereBenutzerdefinierteElemente(benutzerdefinierteElemente) {
  localStorage.setItem('benutzerdefinierteElemente', JSON.stringify(benutzerdefinierteElemente));
}

// Wechsle den Wochentag
function wechsleWochentag(tag) {
  aktuellerTag = tag;
  
  // Aktualisiere die Überschrift mit dem Wochentag
  const tagTitel = document.getElementById('tag-titel');
  const tagEmojis = {
    'montag': '☀️ Montag',
    'dienstag': '🌱 Dienstag',
    'mittwoch': '☕ Mittwoch',
    'donnerstag': '⚡ Donnerstag',
    'freitag': '⭐ Freitag'
  };
  tagTitel.textContent = tagEmojis[tag];
  
  // Aktiven Tab markieren
  document.querySelectorAll('.nav-link').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(`tab-${tag}`).classList.add('active');
  
  // Rendere die neue Liste
  erstelleCheckliste();
}

// Füge ein benutzerdefiniertes Element hinzu
function elementHinzufügen() {
  const neuesElement = document.getElementById('neues-element').value.trim();
  const kategorieSelect = document.getElementById('kategorie-select');
  const kategorieWert = kategorieSelect.value;
  const kategorieText = kategorieSelect.options[kategorieSelect.selectedIndex].text;
  
  // Überprüfe, ob ein Text eingegeben wurde
  if (neuesElement === '') {
    alert('Bitte gib einen Namen für den Gegenstand ein!');
    return;
  }
  
  // Erstelle eine eindeutige ID
  const itemId = `${aktuellerTag}_benutzer_${Date.now()}`;
  
  // Wähle ein passendes Icon basierend auf der Kategorie
  let icon = 'fas fa-check';
  switch (kategorieWert) {
    case 'grundausstattung': icon = 'fas fa-backpack'; break;
    case 'bücher': icon = 'fas fa-book'; break;
    case 'sport': icon = 'fas fa-running'; break;
    case 'kunst': icon = 'fas fa-paint-brush'; break;
    case 'musik': icon = 'fas fa-music'; break;
    case 'labor': icon = 'fas fa-flask'; break;
    case 'sonstiges': icon = 'fas fa-pencil-alt'; break;
  }
  
  // Hole die bisherigen benutzerdefinierten Elemente
  const benutzerdefinierteElemente = ladeBenutzerdefinierteDaten();
  
  // Füge neues Element hinzu
  if (!benutzerdefinierteElemente[aktuellerTag]) {
    benutzerdefinierteElemente[aktuellerTag] = {};
  }
  
  if (!benutzerdefinierteElemente[aktuellerTag][kategorieText]) {
    benutzerdefinierteElemente[aktuellerTag][kategorieText] = [];
  }
  
  benutzerdefinierteElemente[aktuellerTag][kategorieText].push({
    id: itemId,
    name: neuesElement,
    icon: icon
  });
  
  // Speichere die aktualisierten Elemente
  speichereBenutzerdefinierteElemente(benutzerdefinierteElemente);
  
  // Leere das Eingabefeld
  document.getElementById('neues-element').value = '';
  
  // Aktualisiere die Anzeige
  erstelleCheckliste();
}

// Entferne ein benutzerdefiniertes Element
function elementEntfernen(itemId) {
  if (confirm('Möchtest du diesen Gegenstand wirklich löschen?')) {
    // Hole die bisherigen benutzerdefinierten Elemente
    const benutzerdefinierteElemente = ladeBenutzerdefinierteDaten();
    
    // Durchsuche alle Kategorien des aktuellen Tages
    if (benutzerdefinierteElemente[aktuellerTag]) {
      for (const kategorie in benutzerdefinierteElemente[aktuellerTag]) {
        const items = benutzerdefinierteElemente[aktuellerTag][kategorie];
        const index = items.findIndex(item => item.id === itemId);
        
        if (index !== -1) {
          // Element gefunden, entfernen
          items.splice(index, 1);
          
          // Wenn die Kategorie leer ist, entferne sie
          if (items.length === 0) {
            delete benutzerdefinierteElemente[aktuellerTag][kategorie];
          }
          
          // Wenn der Tag keine Kategorien mehr hat, entferne ihn
          if (Object.keys(benutzerdefinierteElemente[aktuellerTag]).length === 0) {
            delete benutzerdefinierteElemente[aktuellerTag];
          }
          
          // Speichere die aktualisierten Elemente
          speichereBenutzerdefinierteElemente(benutzerdefinierteElemente);
          
          // Aktualisiere die Anzeige
          erstelleCheckliste();
          return;
        }
      }
    }
  }
}

// Erstelle die Checkliste
function erstelleCheckliste() {
  const liste = document.getElementById('liste');
  const status = ladeGespeicherteDaten();
  
  // Hole die aktuellen Schulelemente basierend auf dem gewählten Tag
  const schulelemente = wochentagsDaten[aktuellerTag];
  
  // Hole die benutzerdefinierten Elemente für diesen Tag
  const benutzerdefinierteElemente = ladeBenutzerdefinierteDaten();
  
  // Liste leeren
  liste.innerHTML = '';
  
  // Zuerst die vordefinierten Elemente pro Kategorie hinzufügen
  schulelemente.forEach(kategorie => {
    // Kategorie-Überschrift
    const kategorieElement = document.createElement('div');
    kategorieElement.className = 'list-group-item category-heading';
    kategorieElement.innerHTML = `${kategorie.kategorie}`;
    liste.appendChild(kategorieElement);
    
    // Elemente dieser Kategorie
    kategorie.items.forEach(item => {
      const isChecked = status[item.id] || false;
      
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item list-group-item-action';
      
      listItem.innerHTML = `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
          <label class="form-check-label d-flex align-items-center" for="${item.id}">
            <i class="${item.icon} me-2"></i>
            ${item.name}
          </label>
        </div>
      `;
      
      liste.appendChild(listItem);
      
      // Event-Listener für Checkboxes
      const checkbox = listItem.querySelector(`#${item.id}`);
      checkbox.addEventListener('change', function() {
        const status = ladeGespeicherteDaten();
        status[item.id] = this.checked;
        speichereStatus(status);
        aktualisiereUI();
      });
    });
  });
  
  // Dann die benutzerdefinierten Elemente hinzufügen
  if (benutzerdefinierteElemente[aktuellerTag]) {
    for (const kategorieName in benutzerdefinierteElemente[aktuellerTag]) {
      const items = benutzerdefinierteElemente[aktuellerTag][kategorieName];
      
      if (items.length > 0) {
        // Kategorie-Überschrift für benutzerdefinierte Elemente
        const kategorieElement = document.createElement('div');
        kategorieElement.className = 'list-group-item category-heading';
        kategorieElement.innerHTML = `${kategorieName} (Eigene)`;
        liste.appendChild(kategorieElement);
        
        // Elemente dieser Kategorie
        items.forEach(item => {
          const isChecked = status[item.id] || false;
          
          const listItem = document.createElement('div');
          listItem.className = 'list-group-item list-group-item-action';
          
          listItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
                <label class="form-check-label d-flex align-items-center" for="${item.id}">
                  <i class="${item.icon} me-2"></i>
                  ${item.name}
                </label>
              </div>
              <button class="btn btn-sm btn-outline-danger" onclick="elementEntfernen('${item.id}')">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          `;
          
          liste.appendChild(listItem);
          
          // Event-Listener für Checkboxes
          const checkbox = listItem.querySelector(`#${item.id}`);
          checkbox.addEventListener('change', function() {
            const status = ladeGespeicherteDaten();
            status[item.id] = this.checked;
            speichereStatus(status);
            aktualisiereUI();
          });
        });
      }
    }
  }
  
  aktualisiereUI();
}

// Aktualisiere die Fortschrittsanzeige
function aktualisiereUI() {
  const status = ladeGespeicherteDaten();
  let erledigtCount = 0;
  let totalCount = 0;
  
  // Hole die aktuellen Schulelemente basierend auf dem gewählten Tag
  const schulelemente = wochentagsDaten[aktuellerTag];
  
  // Zähle vordefinierte Elemente
  schulelemente.forEach(kategorie => {
    kategorie.items.forEach(item => {
      totalCount++;
      if (status[item.id]) {
        erledigtCount++;
      }
    });
  });
  
  // Zähle benutzerdefinierte Elemente
  const benutzerdefinierteElemente = ladeBenutzerdefinierteDaten();
  if (benutzerdefinierteElemente[aktuellerTag]) {
    for (const kategorieName in benutzerdefinierteElemente[aktuellerTag]) {
      const items = benutzerdefinierteElemente[aktuellerTag][kategorieName];
      items.forEach(item => {
        totalCount++;
        if (status[item.id]) {
          erledigtCount++;
        }
      });
    }
  }
  
  // Aktualisiere Fortschrittsbalken
  const prozent = totalCount > 0 ? Math.round((erledigtCount / totalCount) * 100) : 0;
  const fortschritt = document.getElementById('fortschritt');
  fortschritt.style.width = `${prozent}%`;
  fortschritt.textContent = `${prozent}%`;
  fortschritt.setAttribute('aria-valuenow', prozent);
  
  // Aktualisiere Badge-Anzeige
  const fertigBadge = document.getElementById('fertig-badge');
  fertigBadge.textContent = `${erledigtCount} von ${totalCount} erledigt`;
  
  // Farbänderung je nach Fortschritt
  if (prozent < 30) {
    fortschritt.className = 'progress-bar bg-danger';
  } else if (prozent < 70) {
    fortschritt.className = 'progress-bar bg-warning';
  } else {
    fortschritt.className = 'progress-bar bg-success';
  }
}

// Zurücksetzen der Checkliste
function zurücksetzen() {
  if (confirm(`Möchtest du wirklich alle Häkchen für ${aktuellerTag.charAt(0).toUpperCase() + aktuellerTag.slice(1)} zurücksetzen?`)) {
    // Nur die Checkboxen des aktuellen Tages zurücksetzen
    const status = ladeGespeicherteDaten();
    const schulelemente = wochentagsDaten[aktuellerTag];
    
    schulelemente.forEach(kategorie => {
      kategorie.items.forEach(item => {
        delete status[item.id];
      });
    });
    
    speichereStatus(status);
    erstelleCheckliste();
  }
}

// Toggle-Funktion für den Teilen-Bereich
function toggleTeilenFunktion() {
  const teilenBody = document.getElementById('teilen-body');
  const toggleIcon = document.getElementById('teilen-toggle-icon');
  
  if (teilenBody.style.display === 'none') {
    // Öffnen
    teilenBody.style.display = 'block';
    toggleIcon.classList.add('open');
  } else {
    // Schließen
    teilenBody.style.display = 'none';
    toggleIcon.classList.remove('open');
  }
}

// Funktionen für das Teilen von Listen
function listeTeilenErstellen() {
  // Sammle alle Daten
  const teilenDaten = {
    benutzerdefinierteElemente: ladeBenutzerdefinierteDaten(),
    checklistenStatus: ladeGespeicherteDaten()
  };
  
  // Konvertiere zu JSON und dann zu base64
  const jsonDaten = JSON.stringify(teilenDaten);
  const base64Daten = btoa(jsonDaten);
  
  // Zeige den Code an
  document.getElementById('teilen-code-anzeige').value = base64Daten;
  document.getElementById('teilen-info').style.display = 'block';
  document.getElementById('share-link-container').style.display = 'none';
}

function kopiereCode() {
  const codeElement = document.getElementById('teilen-code-anzeige');
  codeElement.select();
  document.execCommand('copy');
  
  // Zeige Feedback an
  alert('Der Teilen-Code wurde in die Zwischenablage kopiert!');
}

function erstelleShareLink() {
  const code = document.getElementById('teilen-code-anzeige').value;
  
  // Erstelle den vollständigen URL mit dem Code als Parameter
  const url = new URL(window.location.href);
  url.search = ''; // Entferne bestehende Parameter
  url.searchParams.set('share', code);
  
  // Zeige den Link an
  document.getElementById('share-link').value = url.toString();
  document.getElementById('share-link-container').style.display = 'block';
}

function kopiereShareLink() {
  const linkElement = document.getElementById('share-link');
  linkElement.select();
  document.execCommand('copy');
  
  // Zeige Feedback an
  alert('Der Share-Link wurde in die Zwischenablage kopiert!');
}

function listeLaden() {
  const teilenCode = document.getElementById('teilen-code').value.trim();
  
  if (!teilenCode) {
    alert('Bitte geben Sie einen Teilen-Code ein!');
    return;
  }
  
  try {
    // Dekodiere den base64-Code
    const jsonDaten = atob(teilenCode);
    const teilenDaten = JSON.parse(jsonDaten);
    
    if (confirm('Möchten Sie wirklich die geteilte Liste laden? Ihre aktuelle Liste wird ersetzt.')) {
      // Speichere die benutzerdefinierte Elemente
      if (teilenDaten.benutzerdefinierteElemente) {
        speichereBenutzerdefinierteElemente(teilenDaten.benutzerdefinierteElemente);
      }
      
      // Speichere den Checklistenstatus
      if (teilenDaten.checklistenStatus) {
        speichereStatus(teilenDaten.checklistenStatus);
      }
      
      // Aktualisiere die Anzeige
      erstelleCheckliste();
      alert('Die geteilte Liste wurde erfolgreich geladen!');
    }
  } catch (e) {
    alert('Der Teilen-Code ist ungültig. Bitte überprüfen Sie ihn und versuchen Sie es erneut.');
    console.error('Fehler beim Laden der Liste:', e);
  }
}

// Alles beim Laden der Seite initialisieren
document.addEventListener('DOMContentLoaded', function() {
  // Setze den Tag auf den aktuellen Wochentag
  const wochentage = ['sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag'];
  const heutigerTag = new Date().getDay();
  
  // Wenn es Wochenende ist, zeige standardmäßig Montag
  let startTag = (heutigerTag === 0 || heutigerTag === 6) ? 'montag' : wochentage[heutigerTag];
  
  // Falls der Tag nicht in unseren Daten ist, Fallback auf Montag
  if (!wochentagsDaten[startTag]) {
    startTag = 'montag';
  }
  
  // Wochentag initialisieren
  aktuellerTag = startTag;
  wechsleWochentag(aktuellerTag);
  
  // Prüfe URL-Parameter für geteilte Listen
  const urlParams = new URLSearchParams(window.location.search);
  const sharedCode = urlParams.get('share');
  
  if (sharedCode) {
    // Auto-fill das Eingabefeld
    document.getElementById('teilen-code').value = sharedCode;
    
    // Öffne den Teilen-Bereich automatisch
    const teilenBody = document.getElementById('teilen-body');
    const toggleIcon = document.getElementById('teilen-toggle-icon');
    teilenBody.style.display = 'block';
    toggleIcon.classList.add('open');
    
    // Frage den Benutzer, ob er die geteilte Liste laden möchte
    if (confirm('Es wurde eine geteilte Liste gefunden. Möchten Sie diese laden?')) {
      listeLaden();
    }
  }
});
