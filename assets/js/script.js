let currentWordIndex = 0;
let currentNumberIndex = 0; // Index for numbers
let currentLanguage = 'german'; // Tracks the current language
let currentType = 'terms'; // Tracks the current type (terms or numbers)


const words = [
    { muayThai: "Sawadee Krab", german: "Guten Tag" },
    { muayThai: "Khop Khun Krab", german: "Vielen Dank" },
    { muayThai: "Jot Muay", german: "Kampfstellung" },
    { muayThai: "Khum Chung", german: "Kampfstellung mit Partner" },
    { muayThai: "Seup Rug", german: "Steppen vorwärts" },
    { muayThai: "Seup Toi", german: "Steppen rückwärts" },
    { muayThai: "Ghao Rug", german: "Schritt vorwärts" },
    { muayThai: "Ghao Toi", german: "Schritt rückwärts" },
    { muayThai: "Ghao Chag", german: "Schritt seitlich" },
    { muayThai: "Mongkon", german: "Traditioneller Kopfschmuck" },
    { muayThai: "Prajeat", german: "Traditioneller Armschmuck" },
    { muayThai: "Mhad Throng Sai", german: "Jap" },
    { muayThai: "Mhad Throng Kwa", german: "Punch" },
    { muayThai: "Mhad Kok", german: "Kurzer Seitwärtshaken zum Kopf" },
    { muayThai: "Mhad Wiang", german: "Schwinger" },
    { muayThai: "Mhad Tui", german: "Körperhaken" },
    { muayThai: "Mhad Ngad", german: "Kurzer Aufwärtshaken zum Kopf" },
    { muayThai: "Mhad Suey", german: "Langer Aufwärtshaken" },
    { muayThai: "Mhad Glab", german: "Gedrehter Faustrückenschlag" },
    { muayThai: "Teep Throng", german: "Pushkick" },
    { muayThai: "Teep Kang", german: "Sidekick" },
    { muayThai: "Teep Glab Lang", german: "Backkick" },
    { muayThai: "Chorakee Fad Hang", german: "Fersendrehschlag" },
    { muayThai: "Ting", german: "Pushkick zum Oberschenkel" },
    { muayThai: "Deth Tawad Glab", german: "Halbkreis + kurzer Rückwärtstritt" },
    { muayThai: "Deth Chiang", german: "Lowkick 45°" },
    { muayThai: "Deth Throng", german: "Frontkick geschnappt" },
    { muayThai: "Sok Tee", german: "Ellbogenschlag 45°" },
    { muayThai: "Sok Tad", german: "Ellbogenschlag 90°" },
    { muayThai: "Sok Chiang", german: "Ellbogenschlag schräg" },
    { muayThai: "Sok Pung", german: "Speerellbogen" },
    { muayThai: "Sok Ngad", german: "Ellbogenschlag aufwärts" },
    { muayThai: "Sok Kratung", german: "Ellbogenschlag von außen" },
    { muayThai: "Sok Glab", german: "Ellbogen aus der Drehung" },
    { muayThai: "Sok Tong", german: "Ellbogen von Oben" },
    { muayThai: "Khao Kong", german: "Kniestoß zum Kopf im Clinch" },
    { muayThai: "Khao Throng", german: "Gerader Kniestoß" },
    { muayThai: "Tee Khao", german: "Knie-Innenschlag seitlich" },
    { muayThai: "Khao Noi", german: "Kniestoß auf die Oberschenkel" },
    { muayThai: "Khao Loy", german: "Kniestoß gesprungen" },
    { muayThai: "Khao Ban Nok", german: "Schienbeinblock außen" },
    { muayThai: "Khao Ban Nai", german: "Schienbeinblock innen" },
    { muayThai: "Lom Lug Rug", german: "Fallschule vorwärts" },
    { muayThai: "Lom Lug Toi", german: "Fallschule rückwärts" },
    { muayThai: "Lom Lug Chag", german: "Fallschule seitlich" },
    { muayThai: "Chap Ko", german: "Clinchen" },
    { muayThai: "Kod Rad", german: "Clinchen mit Griffwechsel" }
];

const numbers = [
    { muayThai: "nùeng (nüng)", number: '1' },
    { muayThai: "sông (sohng)", number: '2' },
    { muayThai: "săm (sahm)", number: '3' },
    { muayThai: "sì (sii)", number: '4' },
    { muayThai: "hâ (hah)", number: '5' },
    { muayThai: "hòk (hock)", number: '6' },
    { muayThai: "chèt (dschät)", number: '7' },
    { muayThai: "pàet (pet)", number: '8' },
    { muayThai: "kâo (gao)", number: '9' },
    { muayThai: "sìp (sip)", number: '10' }
  ];

function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Combine words and numbers data
    const combinedData = [...words, ...numbers];

    combinedData.forEach(item => {
        let germanText = item.german ? item.german : item.number; // Use german for words or number
        let muayThaiText = item.muayThai;

        const row = `<tr>
                        <td>${germanText}</td>
                        <td>${muayThaiText}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}


function toggleTableView() {
    const wordContainer = document.getElementById('wordContainer');
    const tableContainer = document.getElementById('tableContainer');
    const showTermsButton = document.getElementById('showTermsButton');
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    const switchContentButton = document.getElementById('toggleButton');
    const translationButton = document.getElementById('translationButton'); 
    const nextWordButton = document.getElementById('nextWordButton'); 

    // Check the current display style of the wordContainer
    const isWordViewVisible = wordContainer.style.display !== 'none';

    // Toggle display styles and button text
    if (isWordViewVisible) {
        // Switching to table view
        populateTable();
        wordContainer.style.display = 'none';
        tableContainer.style.display = 'block';
        showTermsButton.innerText = 'Zurück zu Begriffen';
        
        // Disable buttons
        toggleLanguageButton.disabled = true;
        switchContentButton.disabled = true;

        // Hide buttons
        translationButton.style.display = 'none';
        nextWordButton.style.display = 'none';
    } else {
        // Switching to word view
        wordContainer.style.display = 'block';
        tableContainer.style.display = 'none';
        showTermsButton.innerText = 'Alle Begriffe anzeigen';
        
        // Re-enable buttons
        toggleLanguageButton.disabled = false;
        switchContentButton.disabled = false;

        // Show buttons
        translationButton.style.display = 'inline-block';
        nextWordButton.style.display = 'inline-block';
    }
}



function updateButtonText() {
    const buttonElement = document.getElementById('toggleButton');
    buttonElement.innerText = currentType === 'terms' ? "Zu Zahlen wechseln" : "Zu Begriffen wechseln";
}


function getRandomWordIndex() {
    return Math.floor(Math.random() * (currentType === 'terms' ? words.length : numbers.length));
}

function updateContent() {
    if (currentType === 'terms') {
        displayWord();
    } else {
        displayNumber();
    }
}

function displayWord() {
    const germanWordElement = document.getElementById('germanWord');
    const muayThaiTranslationElement = document.getElementById('muayThaiTranslation');
  
    currentWordIndex = getRandomWordIndex();
    germanWordElement.innerText = currentLanguage === 'german' ? words[currentWordIndex].german : words[currentWordIndex].muayThai;
    muayThaiTranslationElement.innerText = currentLanguage === 'german' ? words[currentWordIndex].muayThai : words[currentWordIndex].german;
  
    muayThaiTranslationElement.style.display = 'none';
}
function displayNumber() {
    const germanWordElement = document.getElementById('germanWord');
    const muayThaiTranslationElement = document.getElementById('muayThaiTranslation');

    if (currentLanguage === 'german') {
        germanWordElement.innerText = numbers[currentNumberIndex].number;
        muayThaiTranslationElement.innerText = numbers[currentNumberIndex].muayThai;
    } else {
        germanWordElement.innerText = numbers[currentNumberIndex].muayThai;
        muayThaiTranslationElement.innerText = numbers[currentNumberIndex].number;
    }
    currentNumberIndex = (currentNumberIndex + 1) % numbers.length;
    muayThaiTranslationElement.style.display = 'none';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'german' ? 'thai' : 'german';

    if (currentType === 'terms') {
        displayWord();
    } else {
        displayNumber();
    }
}

function toggleTranslation() {
    const translation = document.getElementById('muayThaiTranslation');
    translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
}

function nextWord() {
    if (currentType === 'terms') {
        currentWordIndex = getRandomWordIndex();
        displayWord();
    } else {
        displayNumber();
    }
    // Hide the translation for the new word/number
    document.getElementById('muayThaiTranslation').style.display = 'none';
}

function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function switchContent() {
    currentType = currentType === 'terms' ? 'numbers' : 'terms';
    currentNumberIndex = 0; // Reset the index when switching to numbers
    updateButtonText();
    updateContent();

    // Ensure the table view is hidden when switching content
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('wordContainer').style.display = 'block';
}

// Initialize with the first word/number
updateContent();
updateButtonText();

  

