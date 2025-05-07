let currentWordIndex = 0;
let currentLanguage = 'german'; // Tracks the current language
let currentCategory = 'all'; // Tracks the current category

// Categories from the PDF
const categories = [
    { id: 'kampfstellung', name: 'Kampfstellung' },
    { id: 'bewegungslehre', name: 'Bewegungslehre' },
    { id: 'fallschule', name: 'Fallschule' },
    { id: 'schlagtechniken', name: 'Schlagtechniken' },
    { id: 'ellbogentechniken', name: 'Ellbogentechniken' },
    { id: 'knietechniken', name: 'Knietechniken' },
    { id: 'kicktechniken', name: 'Kicktechniken' },
    { id: 'clinchen', name: 'Clinchen' },
    { id: 'verteidigungstechniken', name: 'Verteidigungstechniken' },
    { id: 'muayboran', name: 'MuayBoran Techniken' },
    { id: 'zahlen', name: 'Zahlen' }
];

// Terms organized by categories based on the PDF
const termsByCategory = {
    kampfstellung: [
        { muayThai: "Jot Muay", german: "Kampfstellung ohne Partner" },
        { muayThai: "Khum Chung", german: "Kampfstellung mit Partner" }
    ],
    bewegungslehre: [
        { muayThai: "Seup Rug", german: "Step vorwärts" },
        { muayThai: "Seup Thoy", german: "Step rückwärts" },
        { muayThai: "Gao Rug", german: "Schritt vorwärts/ Bein übersetzen" },
        { muayThai: "Gao Thoy", german: "Schritt rückwärts/ Bein übersetzen" },
        { muayThai: "Gao Chag", german: "Seitstep" }
    ],
    fallschule: [
        { muayThai: "Lom Lug Rug", german: "Rolle vorwärts" },
        { muayThai: "Lom Lug Thoy", german: "Fall nach hinten" },
        { muayThai: "Lom Lug Chag", german: "Fall zur Seite" }
    ],
    schlagtechniken: [
        { muayThai: "Mhad Throng Sai", german: "Führungshand/ Jap" },
        { muayThai: "Mhad Throng Kwa", german: "Schlaghand/ Punch" },
        { muayThai: "Mhad Kok/Tawad", german: "kurzer Kopfhaken seitlich" },
        { muayThai: "Mhad Ngad", german: "Aufwärtshaken zum Kopf" },
        { muayThai: "Mhad Tui", german: "Körperhaken" },
        { muayThai: "Mhad Suey", german: "langer Aufwärtshaken zum Kopf" },
        { muayThai: "Mhad Wiang", german: "Schwinger/ langer Kopfhaken" },
        { muayThai: "Mhad Glab", german: "Handrückenschlag mit Drehung" },
        { muayThai: "Mhad Wiang Glab", german: "Kopfhaken + Handrückenschlag" }
    ],
    ellbogentechniken: [
        { muayThai: "Sok Tad", german: "Ellbogen 90° seitlich" },
        { muayThai: "Sok Tee", german: "Ellbogen 45° von oben nach unten" },
        { muayThai: "Sok Chiang", german: "Ellbogen 45° von unten nach oben" },
        { muayThai: "Sok Ngad", german: "Ellbogen von unten" },
        { muayThai: "Sok Pung", german: "Ellbogen von vorne/ Speerellbogen" },
        { muayThai: "Sok Thong", german: "Ellbogen von oben" },
        { muayThai: "Sok Glab", german: "Ellbogenschlag mit Drehung" },
        { muayThai: "Sok Kratung", german: "Ellbogenstoß von außen nach innen" }
    ],
    knietechniken: [
        { muayThai: "Khao Throng", german: "gerades Knie von vorne" },
        { muayThai: "Khao Chiang", german: "Knie seitlich 45°" },
        { muayThai: "Khao Tad", german: "Knie seitlich 90°" },
        { muayThai: "Khao Noi", german: "Kniestoß von vorn zum Oberschenkel" },
        { muayThai: "Khao Tee", german: "Knieinnenschlag" },
        { muayThai: "Khao Khong", german: "Kniestoß zum Kopf" },
        { muayThai: "Khao Loy", german: "gesprungenes Knie" }
    ],
    kicktechniken: [
        { muayThai: "Teep Throng", german: "gerader Kick/ Pushkick" },
        { muayThai: "Teep Kang", german: "Sidekick" },
        { muayThai: "Teep Ting", german: "Stopptritt zum Oberschenkel" },
        { muayThai: "Teep Glab Lang", german: "gedrehter Sidekick/ Backkick" },
        { muayThai: "Dteh Chiang", german: "Lowkick 45°" },
        { muayThai: "Dteh Tad", german: "Lowkick 90°" },
        { muayThai: "Dteh Tawad Glab", german: "Halbkreiskick + Sidekick o. Hookkick" },
        { muayThai: "Chorakee Fad Hang", german: "Fersendrehschlag" }
    ],
    clinchen: [
        { muayThai: "Plam Tee Sok", german: "Clinch mit Ellbogen" },
        { muayThai: "Plam Tee Khao", german: "Clinch mit Knie" },
        { muayThai: "Chap Ko Wiang", german: "Clinch mit Wurf" },
        { muayThai: "Kod Rad", german: "Clinchen mit Griffwechsel/ 1.Hand/2.Hand" }
    ],
    verteidigungstechniken: [
        { muayThai: "Khao Ban Nok", german: "Schienbeinblock gegen Lowkick" },
        { muayThai: "Khao Ban Nai", german: "Schienbeinblock gegen Pushkick" },
        { muayThai: "Khao Laa", german: "Kniesperre beim Clinchen" }
    ],
    muayboran: [
        { muayThai: "Salab Fan Pla", german: "Der Krieger bricht das Kreuz" },
        { muayThai: "Praram Nao Sorn", german: "Rama zieht den Pfeil" },
        { muayThai: "Ten Kwad Lam", german: "Der Mönch fegt den Saal" },
        { muayThai: "Tad Mala", german: "Die Blume ins Haar stecken" },
        { muayThai: "Mon Yan Lak", german: "Der Krieger stürzt die Säule" },
        { muayThai: "Bata Lup Pak", german: "Der mächtige Fusstritt" },
        { muayThai: "Pak Look Toi", german: "Den Baumstamm mit den Stäbchen stoppen" },
        { muayThai: "Hak Kor Erawan", german: "Dem Elefanten das Genick brechen" },
        { muayThai: "Yo Khao Prasumaru", german: "Sumaru hebt den Berg" },
        { muayThai: "Sok Pung Mala", german: "Die Blume ins Gesteck stecken" },
        { muayThai: "Hon Pik Hak", german: "Der Schwan mit den gebrochenen Flügeln" }
    ]
};

// Add numbers to the termsByCategory object
termsByCategory.zahlen = [
    { muayThai: "nùeng (nüng)", german: '1' },
    { muayThai: "sông (sohng)", german: '2' },
    { muayThai: "săm (sahm)", german: '3' },
    { muayThai: "sì (sii)", german: '4' },
    { muayThai: "hâ (hah)", german: '5' },
    { muayThai: "hòk (hock)", german: '6' },
    { muayThai: "chèt (dschät)", german: '7' },
    { muayThai: "pàet (pet)", german: '8' },
    { muayThai: "kâo (gao)", german: '9' },
    { muayThai: "sìp (sip)", german: '10' }
];

// Create a flattened array of all terms for the original functionality
const words = Object.values(termsByCategory).flat();

function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    if (currentCategory === 'all') {
        // Show all categories with headers
        categories.forEach(category => {
            // Add category header
            const categoryRow = `<tr class="table-category">
                                <td colspan="2"><strong>${category.name}</strong></td>
                            </tr>`;
            tableBody.innerHTML += categoryRow;

            // Add terms for this category
            const categoryTerms = termsByCategory[category.id] || [];
            categoryTerms.forEach(item => {
                const row = `<tr>
                            <td>${item.german}</td>
                            <td>${item.muayThai}</td>
                        </tr>`;
                tableBody.innerHTML += row;
            });
        });
    } else {
        // Show only terms from the selected category
        const categoryTerms = termsByCategory[currentCategory] || [];
        categoryTerms.forEach(item => {
            const row = `<tr>
                        <td>${item.german}</td>
                        <td>${item.muayThai}</td>
                    </tr>`;
            tableBody.innerHTML += row;
        });
    }
}

// Function to create category selection buttons
function createCategoryButtons() {
    const categoryContainer = document.getElementById('categoryContainer');
    if (!categoryContainer) return;
    
    categoryContainer.innerHTML = '';
    
    // Add 'All' button
    const allButton = document.createElement('button');
    allButton.className = 'btn ' + (currentCategory === 'all' ? 'btn-primary' : 'btn-outline-primary');
    allButton.innerText = 'Alle';
    allButton.onclick = () => selectCategory('all');
    categoryContainer.appendChild(allButton);
    
    // Add button for each category
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'btn ' + (currentCategory === category.id ? 'btn-primary' : 'btn-outline-primary');
        button.innerText = category.name;
        button.onclick = () => selectCategory(category.id);
        categoryContainer.appendChild(button);
    });
}

// Function to select a category
function selectCategory(categoryId) {
    currentCategory = categoryId;
    updateContent();
    createCategoryButtons();
    
    // If in table view, update the table and ensure category dropdown and language toggle remain hidden
    if (document.getElementById('tableContainer').style.display === 'block') {
        // Make sure the card category filter and language toggle remain hidden
        const cardCategoryFilter = document.getElementById('cardCategoryFilter');
        const toggleLanguageButton = document.getElementById('toggleLanguage');
        
        if (cardCategoryFilter) {
            cardCategoryFilter.style.display = 'none';
        }
        
        if (toggleLanguageButton) {
            toggleLanguageButton.style.display = 'none';
        }
        
        populateTable();
    }
}


function toggleTableView() {
    const wordContainer = document.getElementById('wordContainer');
    const tableContainer = document.getElementById('tableContainer');
    const categoryContainerDiv = document.getElementById('categoryContainerDiv');
    const cardCategoryFilter = document.getElementById('cardCategoryFilter');
    const showTermsButton = document.getElementById('showTermsButton');
    const switchContentButton = document.getElementById('toggleButton');
    const translationButton = document.getElementById('translationButton');
    const nextWordButton = document.getElementById('nextWordButton');
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    const categoryContainer = document.getElementById('categoryContainer');
    const modeToggleContainer = document.querySelector('.mode-toggle-container').closest('.row');

    // Check if all required elements exist
    if (!wordContainer || !tableContainer) {
        console.error('Required elements not found');
        return;
    }

    // Check the current display style of the wordContainer
    const isWordViewVisible = wordContainer.style.display !== 'none';

    if (isWordViewVisible) {
        // Switch to table view
        wordContainer.style.display = 'none';
        tableContainer.style.display = 'block';
        
        // Make sure category containers are visible
        if (categoryContainerDiv) {
            categoryContainerDiv.style.display = 'block';
        }
        
        if (categoryContainer) {
            categoryContainer.style.display = 'flex';
        }
        
        // Hide other elements
        if (cardCategoryFilter) {
            cardCategoryFilter.style.display = 'none';
        }
        
        if (toggleLanguageButton) {
            toggleLanguageButton.style.display = 'none';
        }
        
        // Hide the mode toggle and divider in table view
        if (modeToggleContainer) {
            modeToggleContainer.style.display = 'none';
        }
        
        // Hide the glossary divider
        const glossaryDivider = document.querySelector('.glossary-divider');
        if (glossaryDivider) {
            glossaryDivider.style.display = 'none';
        }
        
        if (showTermsButton) {
            showTermsButton.textContent = 'Lernkarten';
        }
        
        if (switchContentButton) {
            switchContentButton.style.display = 'none';
        }
        
        if (translationButton) {
            translationButton.style.display = 'none';
        }
        
        if (nextWordButton) {
            nextWordButton.style.display = 'none';
        }
        
        // Create category buttons before populating the table
        createCategoryButtons();
        populateTable();
    } else {
        // Switch to word view
        wordContainer.style.display = 'block';
        tableContainer.style.display = 'none';
        
        if (categoryContainerDiv) {
            categoryContainerDiv.style.display = 'none';
        }
        
        // Show the card category filter
        if (cardCategoryFilter) {
            cardCategoryFilter.style.display = 'block';
        }
        
        // Show the language toggle
        if (toggleLanguageButton) {
            toggleLanguageButton.style.display = 'inline-block';
        }
        
        // Show the mode toggle in card view
        if (modeToggleContainer) {
            modeToggleContainer.style.display = 'flex';
        }
        
        // Show the glossary divider
        const glossaryDivider = document.querySelector('.glossary-divider');
        if (glossaryDivider && !quizMode) {
            glossaryDivider.style.display = 'block';
        }
        
        // Update button text
        if (showTermsButton) {
            showTermsButton.textContent = 'Tabelle anzeigen';
        }
        
        if (switchContentButton) {
            switchContentButton.style.display = 'inline-block';
        }
        
        if (translationButton) {
            translationButton.style.display = 'inline-block';
        }
        
        if (nextWordButton) {
            nextWordButton.style.display = 'inline-block';
        }
        
        displayWord();
    }
}



// Function removed as content type toggle is no longer needed


function getRandomWordIndex() {
    if (currentCategory === 'all') {
        return Math.floor(Math.random() * words.length);
    } else {
        const categoryTerms = termsByCategory[currentCategory] || [];
        if (categoryTerms.length === 0) return 0;
        return Math.floor(Math.random() * categoryTerms.length);
    }
}

function updateContent() {
    displayWord();
    
    // Update category buttons if they're visible
    const categoryContainerDiv = document.getElementById('categoryContainerDiv');
    if (categoryContainerDiv && categoryContainerDiv.style.display === 'block') {
        createCategoryButtons();
    }
    
    // Show category filter and update dropdown
    const cardCategoryFilter = document.getElementById('cardCategoryFilter');
    if (cardCategoryFilter) {
        cardCategoryFilter.style.display = 'block';
    }
    
    populateCategoryDropdown();
}

function displayWord() {
    const germanWordElement = document.getElementById('germanWord');
    const muayThaiTranslationElement = document.getElementById('muayThaiTranslation');
  
    currentWordIndex = getRandomWordIndex();
    
    let currentTerms;
    if (currentCategory === 'all') {
        currentTerms = words;
    } else {
        currentTerms = termsByCategory[currentCategory] || [];
    }
    
    if (currentTerms.length === 0) {
        germanWordElement.innerText = 'Keine Begriffe in dieser Kategorie';
        muayThaiTranslationElement.innerText = '';
        return;
    }
    
    germanWordElement.innerText = currentLanguage === 'german' ? currentTerms[currentWordIndex].german : currentTerms[currentWordIndex].muayThai;
    muayThaiTranslationElement.innerText = currentLanguage === 'german' ? currentTerms[currentWordIndex].muayThai : currentTerms[currentWordIndex].german;
  
    muayThaiTranslationElement.style.display = 'none';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'german' ? 'thai' : 'german';

    // Update the language display
    updateLanguageDisplay();
    
    // Display the word with the new language
    displayWord();
}

function updateLanguageDisplay() {
    const languageDisplay = document.getElementById('currentLanguageDisplay');
    if (languageDisplay) {
        if (currentLanguage === 'german') {
            languageDisplay.textContent = 'Deutsch → Thai';
        } else {
            languageDisplay.textContent = 'Thai → Deutsch';
        }
    }
}

function toggleTranslation() {
    const translation = document.getElementById('muayThaiTranslation');
    translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
}

function nextWord() {
    currentWordIndex = getRandomWordIndex();
    displayWord();
    
    // Hide the translation for the new word
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
    
    // Reset to 'all' category when switching to terms
    if (currentType === 'terms') {
        currentCategory = 'all';
        // Update category dropdown
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) categorySelect.value = 'all';
    }
    
    updateButtonText();
    updateContent();

    // Ensure the table view is hidden when switching content
    const tableContainer = document.getElementById('tableContainer');
    const wordContainer = document.getElementById('wordContainer');
    const categoryContainerDiv = document.getElementById('categoryContainerDiv');
    
    tableContainer.style.display = 'none';
    wordContainer.style.display = 'block';
    categoryContainerDiv.style.display = 'none';
    
    // Update button text based on content type
    const showTermsButton = document.getElementById('showTermsButton');
    showTermsButton.innerText = 'Alle ' + (currentType === 'terms' ? 'Begriffe' : 'Zahlen') + ' anzeigen';
}

// Function to populate the category dropdown
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('categorySelect');
    if (!categorySelect) return;
    
    // Clear existing options except the first one (All Categories)
    while (categorySelect.options.length > 1) {
        categorySelect.remove(1);
    }
    
    // Add options for each category
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.text = category.name;
        categorySelect.appendChild(option);
    });
    
    // Set the current selection
    categorySelect.value = currentCategory;
    
    // Update the current category display
    updateCurrentCategoryDisplay();
}

// Function to update the dropdown label to reflect the current category
function updateCurrentCategoryDisplay() {
    const categorySelect = document.getElementById('categorySelect');
    if (!categorySelect) return;
    
    // Update the dropdown selection to match the current category
    categorySelect.value = currentCategory;
}

// Function to select a category for the card view
function selectCardCategory(categoryId) {
    currentCategory = categoryId;
    updateContent();
}

// Quiz mode variables
let quizMode = false;
let quizQuestions = [];
let currentQuizQuestion = 0;
let correctAnswers = 0;
let selectedCategory = 'all';
let questionCount = 10;
let quizDirection = 'random'; // Can be 'random', 'germanToThai', or 'thaiToGerman'

// Function to toggle quiz mode
function toggleQuizMode() {
    // Hide all other views
    document.getElementById('wordContainer').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('cardCategoryFilter').style.display = 'none';
    
    // Hide the translation and next word buttons
    document.getElementById('translationButton').style.display = 'none';
    document.getElementById('nextWordButton').style.display = 'none';
    
    // Hide the glossary divider
    const glossaryDivider = document.querySelector('.glossary-divider');
    if (glossaryDivider) {
        glossaryDivider.style.display = 'none';
    }
    
    // Show quiz container and reset quiz interface
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizQuestionArea').style.display = 'none';
    document.getElementById('quizResultsArea').style.display = 'none';
    
    // Show the quiz settings (header) section
    document.querySelector('.quiz-header').style.display = 'block';
    
    // Populate quiz category dropdown
    populateQuizCategoryDropdown();
    
    // Reset quiz state
    quizQuestions = [];
    currentQuizQuestion = 0;
    correctAnswers = 0;
    
    // Make sure the quiz mode toggle is selected
    document.getElementById('quiz-mode').checked = true;
    
    quizMode = true;
}

// Function to exit quiz mode
function exitQuizMode() {
    // Hide quiz container
    document.getElementById('quizContainer').style.display = 'none';
    
    // Show word container
    document.getElementById('wordContainer').style.display = 'block';
    document.getElementById('cardCategoryFilter').style.display = 'block';
    
    // Show the glossary divider
    const glossaryDivider = document.querySelector('.glossary-divider');
    if (glossaryDivider) {
        glossaryDivider.style.display = 'block';
    }
    
    // Show the translation and next word buttons
    document.getElementById('translationButton').style.display = 'inline-block';
    document.getElementById('nextWordButton').style.display = 'inline-block';
    
    // Make sure the glossary mode toggle is selected
    document.getElementById('glossary-mode').checked = true;
    
    quizMode = false;
}

// Function to populate quiz category dropdown
function populateQuizCategoryDropdown() {
    const categorySelect = document.getElementById('quizCategorySelect');
    const excludeCategoriesContainer = document.getElementById('excludeCategoriesContainer');
    
    if (!categorySelect || !excludeCategoriesContainer) return;
    
    // Clear existing options except the first one (All Categories) for main dropdown
    while (categorySelect.options.length > 1) {
        categorySelect.remove(1);
    }
    
    // Clear all checkboxes for excluded categories
    excludeCategoriesContainer.innerHTML = '';
    
    // Add options for each category
    categories.forEach(category => {
        // Add to main category dropdown
        const option = document.createElement('option');
        option.value = category.id;
        option.text = category.name;
        categorySelect.appendChild(option);
        
        // Create checkbox for excluding category
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'form-check form-check-inline';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input exclude-category-checkbox';
        checkbox.id = 'exclude-' + category.id;
        checkbox.value = category.id;
        
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = 'exclude-' + category.id;
        label.textContent = category.name;
        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        excludeCategoriesContainer.appendChild(checkboxDiv);
    });
}

// Function to start the quiz
function startQuiz() {
    // Get quiz settings
    selectedCategory = document.getElementById('quizCategorySelect').value;
    questionCount = parseInt(document.getElementById('quizQuestionCount').value);
    quizDirection = document.getElementById('quizDirection').value;
    
    // Get excluded categories from checkboxes
    const excludedCategories = [];
    document.querySelectorAll('.exclude-category-checkbox:checked').forEach(checkbox => {
        excludedCategories.push(checkbox.value);
    });
    
    // Generate quiz questions
    generateQuizQuestions(excludedCategories);
    
    // Hide quiz header and show question area
    document.querySelector('.quiz-header').style.display = 'none';
    document.getElementById('quizQuestionArea').style.display = 'block';
    
    // Reset quiz progress
    currentQuizQuestion = 0;
    correctAnswers = 0;
    
    // Show first question
    showQuizQuestion();
}

// Function to generate quiz questions
function generateQuizQuestions(excludedCategories = []) {
    quizQuestions = [];
    
    // Filter out terms from excluded categories
    let filteredTerms = {};
    let allTermsPool = [];
    
    // Create a filtered copy of termsByCategory without excluded categories
    for (const categoryId in termsByCategory) {
        if (!excludedCategories.includes(categoryId)) {
            filteredTerms[categoryId] = [...termsByCategory[categoryId]];
            allTermsPool = allTermsPool.concat(filteredTerms[categoryId]);
        }
    }
    
    // Get terms based on selected category
    let termsPool = [];
    
    if (selectedCategory === 'all') {
        termsPool = [...allTermsPool]; // Use all non-excluded terms
    } else if (!excludedCategories.includes(selectedCategory)) {
        termsPool = [...filteredTerms[selectedCategory] || []]; // Use terms from selected category if not excluded
    }
    
    // If no terms are available after filtering, show an alert and return
    if (termsPool.length === 0) {
        alert('Keine Begriffe verfügbar. Bitte wählen Sie andere Kategorien oder entfernen Sie einige Ausschlüsse.');
        return;
    }
    
    // If there are fewer terms than requested questions, adjust the question count
    if (termsPool.length < questionCount) {
        questionCount = termsPool.length;
        // Update the dropdown to reflect the change
        const questionCountSelect = document.getElementById('quizQuestionCount');
        if (questionCountSelect) {
            // Find or create an option for this count
            let option = Array.from(questionCountSelect.options).find(opt => parseInt(opt.value) === questionCount);
            if (!option) {
                option = new Option(questionCount + ' Fragen', questionCount.toString());
                questionCountSelect.add(option);
            }
            questionCountSelect.value = questionCount.toString();
        }
    }
    
    // Shuffle the terms pool
    termsPool = shuffleArray(termsPool);
    
    // Take only the number of questions requested
    termsPool = termsPool.slice(0, questionCount);
    
    // Generate questions from the terms
    termsPool.forEach(term => {
        // Determine direction based on setting
        let askForThai;
        switch (quizDirection) {
            case 'germanToThai':
                askForThai = true;
                break;
            case 'thaiToGerman':
                askForThai = false;
                break;
            case 'random':
            default:
                askForThai = Math.random() > 0.5;
                break;
        }
        
        // Create a question object
        const question = {
            question: askForThai ? 
                `Was bedeutet "${term.german}" auf Thai?` : 
                `Was bedeutet "${term.muayThai}" auf Deutsch?`,
            correctAnswer: askForThai ? term.muayThai : term.german,
            options: []
        };
        
        // Add the correct answer to options
        question.options.push(question.correctAnswer);
        
        // Add 3 incorrect options
        let attempts = 0;
        while (question.options.length < 4 && attempts < 100) {
            attempts++;
            // Get a random term from ALL terms, not just the category
            const randomTerm = allTermsPool[Math.floor(Math.random() * allTermsPool.length)];
            const incorrectOption = askForThai ? randomTerm.muayThai : randomTerm.german;
            
            // Make sure it's not a duplicate and not the correct answer
            if (incorrectOption !== question.correctAnswer && !question.options.includes(incorrectOption)) {
                question.options.push(incorrectOption);
            }
        }
        
        // If we couldn't find enough unique options, fill with placeholders
        while (question.options.length < 4) {
            question.options.push(`Option ${question.options.length + 1}`);
        }
        
        // Shuffle the options
        question.options = shuffleArray(question.options);
        
        // Add the question to the quiz
        quizQuestions.push(question);
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Function to show the current quiz question
function showQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    
    // Update progress bar
    const progressPercentage = (currentQuizQuestion / quizQuestions.length) * 100;
    const progressBar = document.getElementById('quizProgress');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
    
    // Update question text
    document.getElementById('quizQuestion').textContent = question.question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    // Add options
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    
    // Hide feedback and next button
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextQuizQuestionButton').style.display = 'none';
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuizQuestion];
    const isCorrect = selectedOption === question.correctAnswer;
    
    // Update feedback
    const feedbackElement = document.getElementById('quizFeedback');
    feedbackElement.className = isCorrect ? 'alert alert-success' : 'alert alert-danger';
    feedbackElement.textContent = isCorrect ? 
        'Richtig! 👏' : 
        `Falsch. Die richtige Antwort ist: ${question.correctAnswer}`;
    feedbackElement.style.display = 'block';
    
    // Disable all option buttons
    const optionButtons = document.querySelectorAll('#quizOptions button');
    optionButtons.forEach(button => {
        button.disabled = true;
        
        // Highlight correct and incorrect answers
        if (button.textContent === question.correctAnswer) {
            button.className = 'btn btn-success';
        } else if (button.textContent === selectedOption && !isCorrect) {
            button.className = 'btn btn-danger';
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        correctAnswers++;
    }
    
    // Show next button
    document.getElementById('nextQuizQuestionButton').style.display = 'block';
}

// Function to move to the next question
function nextQuizQuestion() {
    currentQuizQuestion++;
    showQuizQuestion();
}

// Function to show quiz results
function showQuizResults() {
    // Hide question area
    document.getElementById('quizQuestionArea').style.display = 'none';
    
    // Show results area
    document.getElementById('quizResultsArea').style.display = 'block';
    
    // Calculate score
    const scorePercentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    
    // Update score display
    document.getElementById('quizScore').textContent = `${correctAnswers}/${quizQuestions.length}`;
    document.getElementById('quizScorePercentage').textContent = `${scorePercentage}%`;
    
    // Update feedback message
    let feedbackMessage = '';
    if (scorePercentage >= 90) {
        feedbackMessage = 'Ausgezeichnet! Du bist ein Muay Thai Meister! 🏆';
    } else if (scorePercentage >= 70) {
        feedbackMessage = 'Sehr gut! Du kennst dich gut mit Muay Thai aus! 👍';
    } else if (scorePercentage >= 50) {
        feedbackMessage = 'Nicht schlecht! Mit etwas mehr Übung wirst du besser! 💪';
    } else {
        feedbackMessage = 'Weiter üben! Du wirst besser werden! 🥊';
    }
    
    document.getElementById('quizFeedbackMessage').textContent = feedbackMessage;
}

// Function to reset the quiz
function resetQuiz() {
    // Show quiz header and hide results
    document.querySelector('.quiz-header').style.display = 'block';
    document.getElementById('quizResultsArea').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Set initial display styles
    const wordContainer = document.getElementById('wordContainer');
    const tableContainer = document.getElementById('tableContainer');
    const categoryContainerDiv = document.getElementById('categoryContainerDiv');
    
    if (wordContainer) wordContainer.style.display = 'block';
    if (tableContainer) tableContainer.style.display = 'none';
    if (categoryContainerDiv) categoryContainerDiv.style.display = 'none';
    
    // Initialize content
    updateContent();
    updateButtonText();
    populateCategoryDropdown();
    updateLanguageDisplay();
});
