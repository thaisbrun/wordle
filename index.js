const dictionary = ['ABALE','ABATS','ABAYA','ABBES','ABCES','ABDOS','ABEES','ABERS','ABETI','ABIES','ABIMA',
'ABIME','ABLES','ABOIE','ABOIS','ABOLI','ABORD','ABOTS','ABOUT','ABOYA','ABOYE','ABRAS','ABRIA','ABRIE','ABRIS',
'ABUSA','ABUSE','ABUTA','ABUTE','ABYME','ACAIS','ACARE','ACCES', 'ACCON','ACCOT','ACCRO','ACCRU','ACCUL','ACCUS',
'ACERA', 'ACERE', 'ACHAR', 'ACHAT', 'ACHEB', 'ACHES', 'ACIDE', 'ACIER', 'ACINI', 'ACMES', 'ACNES', 'ACONS', 'ACORE', 
'ACRAS', 'ACRES', 'ACTAI', 'ACTAS', 'ACTAT', 'ACTEE', 'ACTER', 'ACTES', 'ACTEZ', 'ACTIF', 'ACTUS', 'ACULS', 'ACYLE', 
'ADACS', 'ADAGE', 'ADAVS', 'ADDAX', 'ADENT', 'ADIEU', 'ADIRE', 'ADJAR', 'ADMET', 'ADMIN', 'ADMIS', 'ADMIT', 'ADNEE', 
'ADNES', 'ADOBE', 'ADONC', 'ADONS', 'ADORA', 'ADORE', 'ADRAR', 'ADRET', 'ADULA', 'ADULE', 'AEDES', 'AERAI', 'AERAS', 
'AERAT', 'AEREE', 'AERER', 'AERES','AEREZ', 'AFARE', 'AFARS', 'AFATS', 'AFFIN', 'AFFUT', 'AFROS', 'AFTER', 'AGACA', 
'AGACE', 'AGADA', 'AGAME', 'AGAMI', 'AGAPE', 'AGATE', 'AGAVE', 'AGEES', 'AGENT', 'AGGLO', 'AGHAS', 'AGIES', 'AGILE', 
'AGIOS', 'AGIRA', 'AGITA', 'AGITE', 'AGNAT', 'AGNEL', 'AGNIE', 'AGNIS','AGONI', 'AGORA', 'AGREA', 'AGREE', 'AGREG', 
'AGRES', 'AGUIS', 'AHANA', 'AHANE', 'AHANS', 'AHURI', 'AICHA', 'AICHE', 'AIDAI', 'AIDAS', 'AIDAT', 'AIDEE', 'AIDER', 
'AIDES', 'AIDEZ', 'AIENT', 'AIEUL', 'AIEUX', 'AIGLE', 'AIGRE', 'AIGRI', 'AIGUE', 'AIGUS', 'AILEE', 'AILES', 'AILLA', 
'AILLE', 'AIMAI', 'AIMAS', 'AIMAT', 'AIMEE', 'AIMER', 'AIMES', 'AIMEZ', 'AINEE', 'AINES', 'AINOU', 'AINSI', 'AIOLI', 
'AIRAI', 'AIRAS', 'AIRAT', 'AIRCO', 'AIREE', 'AIRER','AIRES', 'AIREZ', 'AISEE', 'AISES', 'AISYS', 'AJONC', 'AJOUR', 
'AJOUT', 'AJUTS', 'AKANS', 'AKENE', 'AKITA', 'ALBUM', 'ALDIN', 'ALDOL', 'ALEAS', 'ALEMS', 'ALENE', 'ALEPH', 'ALESA', 
'ALESE', 'ALEVI', 'ALEZE', 'ALFAS', 'ALGAL', 'ALGIE', 'ALGOL', 'ALGUE', 'ALIAS', 'ALIBI', 'ALIEN', 'ALIOS', 'ALISE', 
'ALITA', 'ALITE', 'ALIZE', 'ALLAI', 'ALLAS', 'ALLAT', 'ALLEE', 'ALLER', 'ALLES', 'ALLEU', 'ALLEZ', 'ALLIA', 'ALLIE', 
'ALLOC', 'ALMEE', 'ALOCO', 'ALOES'];
const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
    .fill()
    .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};
function updateGrid(){
    for(let i=0; i < state.grid.length; i++){
        for(let j=0; j< state.grid[i].length; j++){
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}
function drawBox(container, row, col, letter = ''){
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container){
    const grid = document.createElement('div');
    grid.className = 'grid';
    for(let i=0; i<6; i++){
        for(let j = 0; j <5; j++){
            drawBox(grid, i, j);
        }
    }
    container.appendChild(grid);
}

function registerKeyboardEvents(){
    document.body.onkeydown = (e) => {
        const key = e.key;
        if(key === 'Enter'){
            if(state.currentCol === 5){
                const word = getCurrentWord();
                if(isWordValid(word)){
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                }else{
                    alert('Le mot existe pas, Tocard. ')
                }
            }

        }if(key === 'Backspace'){
            removeLetter();
        }if(isLetter(key)){
            addLetter(key);
        }
        updateGrid();
    };
}
function getCurrentWord(){
    return state.grid[state.currentRow].reduce((prev,curr) => prev + curr);
}
function isWordValid(word){
    return dictionary.includes(word);
}
function revealWord(guess){
    const row = state.currentRow;
    const animation_duration = 500;
    for(let i = 0; i <5; i++){
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        setTimeout(()=> {
            if(letter === state.secret[i]){
            box.classList.add('right');
        }else if(state.secret.includes(letter)){
            box.classList.add('wrong');
        }else{
            box.classList.add('empty');
        }
    },((i + 1) * animation_duration) / 2);
        
        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;
    setTimeout(()=> {
        if(isWinner){
        alert('Bravo tu as gagné !');
    }else if(isGameOver){
        alert(`Looser ! Le mot était ${state.secret}`);
    }
    }, 3* animation_duration);
}

function isLetter(key){
    return key.length === 1 && key.match(/[a-z]/i);
}
function addLetter(letter){
    if(state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}
function removeLetter(){
    if(state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}
function startup(){
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyboardEvents();

}

startup();