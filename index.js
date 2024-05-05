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
'ALLOC', 'ALMEE', 'ALOCO', 'ALOES', 'ALOIS', 'ALOKO', 'ALORS', 'ALOSE','ALPAI', 'ALPAS', 'ALPAT', 'ALPAX', 'ALPEE', 
'ALPER', 'ALPES', 'ALPEZ', 'ALPHA', 'ALPIN', 'ALTEA', 'ALTER', 'ALTOS', 'ALULE', 'ALUNA', 'ALUNE', 'ALUNI', 'ALUNS', 
'ALVIN', 'ALYAS', 'ALYTE', 'AMANS', 'AMANT', 'AMATI', 'AMBLA', 'AMBLE', 'AMBON', 'AMBRA', 'AMBRE', 'AMENA', 'AMENE', 
'AMERE', 'AMERS', 'AMIBE', 'AMICT', 'AMIDE', 'AMIES', 'AMIGO', 'AMINE', 'AMISH', 'AMMAN', 'AMMIS', 'AMOKS', 'AMOME', 
'AMONT', 'AMOUR', 'AMPHI', 'AMPLE', 'AMPLI', 'AMUIE', 'AMUIR', 'AMUIS', 'AMUIT', 'AMURA', 'AMURE', 'AMUSA','AMUSE', 
'AMYLE', 'ANALE', 'ANARS', 'ANAUX', 'ANCHE', 'ANCRA', 'ANCRE', 'ANDIN', 'ANEES', 'ANELS', 'ANETH', 'ANGES', 'ANGLE', 
'ANGON', 'ANGOR', 'ANGUS', 'ANIER', 'ANILS', 'ANIMA', 'ANIME', 'ANION', 'ANISA', 'ANISE', 'ANITE', 'ANJOU', 'ANKHS', 
'ANNAL', 'ANNEE', 'ANNIF', 'ANNIV', 'ANODE', 'ANOLI', 'ANONA', 'ANONE', 'ANONS', 'ANSEE', 'ANSES', 'ANTAN', 'ANTES',
'ANTRE', 'AORTE', 'AOUTA', 'AOUTE', 'AOUTS', 'APERO', 'APHTE', 'APIDE', 'APIOL', 'APION', 'APLAT', 'APNEE', 'APODE', 
'APPAS', 'APPAT', 'APPEL', 'APPLI', 'APPUI', 'APREM', 'APRES', 'APTES', 'APURA', 'APURE', 'APYRE', 'ARABE', 'ARACK', 
'ARACS', 'ARAKS', 'ARASA', 'ARASE', 'ARBRE', 'ARCHE', 'ARCHI', 'ARCHS', 'ARCON', 'ARDUE', 'ARDUS', 'ARECS', 'ARENA', 
'ARENE', 'ARETE', 'ARGAN', 'ARGAS', 'ARGOL', 'ARGON', 'ARGOT', 'ARGUA', 'ARGUE', 'ARGUS', 'ARHAT', 'ARIAS', 'ARIDE', 
'ARIEN', 'ARISA','ARISE', 'ARMAI', 'ARMAS', 'ARMAT', 'ARMEE', 'ARMER', 'ARMES', 'ARMET', 'ARMEZ', 'ARMON', 'AROBE', 
'AROLE', 'AROLS', 'AROME', 'ARQUA', 'ARQUE', 'ARRET', 'ARROI', 'ARSIN', 'ARSIS', 'ARTEL', 'ARTYS', 'ARUMS', 'ARYEN', 
'ARYLE','ARZEL', 'ASADO', 'ASANA', 'ASDIC', 'ASICS', 'ASILE', 'ASINE', 'ASINS', 'ASPES', 'ASPIC', 'ASPIS', 'ASPLE', 
'ASPRE', 'ASQUE', 'ASRAM', 'ASSAI', 'ASSEC', 'ASSES', 'ASSEZ', 'ASSIS', 'ASSIT', 'ASSOS', 'ASTER', 'ASTES', 'ASTIC', 
'ASTIS', 'ASTRE', 'ATACA', 'ATELE', 'ATEMI', 'ATHEE', 'ATHLE', 'ATIPA', 'ATLAS', 'ATMAN', 'ATOCA', 'ATOLL', 'ATOME', 
'ATONE', 'ATOUR', 'ATOUT', 'ATRES', 'AUBES', 'AUBIN', 'AUCUN', 'AUDIO', 'AUDIT', 'AUGEE', 'AUGES', 'AUGET', 'AULAS', 
'AULNE', 'AUNAI', 'AUNAS', 'AUNAT','AUNEE','AUNER','AUNES','AUNEZ','AURAI','AURAS','AUREZ','AUSSI','AUTAN', 'AUTEL', 
'AUTOS', 'AUTRE', 'AVAHI', 'AVAIS', 'AVAIT', 'AVALA', 'AVALE', 'AVALS', 'AVANT', 'AVARE', 'AVENS', 'AVENT', 'AVENU', 
'AVERA', 'AVERE', 'AVERS', 'AVEUX', 'AVIDE', 'AVIEN', 'AVIEZ', 'AVILI', 'AVINA', 'AVINE', 'AVION', 'AVISA', 'AVISE', 
'AVISO','AVIVA','AVIVE','AVOIE', 'AVOIR', 'AVONS', 'AVOUA', 'AVOUE', 'AVOYA', 'AVOYE', 'AVRIL', 'AWACS', 'AWALE', 
'AWELE', 'AXAIS', 'AXAIT', 'AXANT', 'AXEES', 'AXELS', 'AXENE', 'AXENT', 'AXERA', 'AXIAL', 'AXIEZ', 'AXILE', 'AXOAS', 
'AXONE', 'AXONS', 'AYANT', 'AYONS', 'AZERI', 'AZOBE', 'AZORA', 'AZORE', 'AZOTA', 'AZOTE', 'AZUKI', 'AZURA', 'AZURE', 
'AZURS', 'AZYME', 'BABAS', 'BABEL', 'BABIL', 'BABYS', 'BACHA', 'BACHE', 'BACHI', 'BACLA', 'BACLE', 'BACON', 'BACUL', 
'BADAI', 'BADAS', 'BADAT', 'BADEE', 'BADER', 'BADES', 'BADEZ', 'BADGE', 'BADIN', 'BAFFA', 'BAFFE', 'BAFRA', 'BAFRE', 
'BAGAD', 'BAGEL', 'BAGGY', 'BAGNE', 'BAGOU', 'BAGUA', 'BAGUE', 'BAHAI', 'BAHTS', 'BAHUT', 'BAIES', 'BAILE', 'BAILS', 
'BAINE', 'BAINS', 'BAISA', 'BAISE', 'BALAI', 'BALAN', 'BALES', 'BALLA', 'BALLE', 'BALSA', 'BALTE', 'BAMBA', 'BANAL', 
'BANAT', 'BANCO', 'BANCS', 'BANDA', 'BANDE', 'BANGA', 'BANGS', 'BANJO', 'BANNE', 'BANNI', 'BANON', 'BANTU', 'BAOUS', 
'BAQUA', 'BAQUE', 'BARBA', 'BARBE', 'BARBU', 'BARDA', 'BARDE', 'BARDS', 'BARGE', 'BARIL', 'BARJO', 'BARNS', 'BARON', 
'BARRA', 'BARRE', 'BARRI', 'BARYE', 'BARZA', 'BASAI', 'BASAL', 'BASAS', 'BASAT', 'BASEE', 'BASER', 'BASES', 'BASEZ', 
'BASIC', 'BASIE', 'BASIN', 'BASIR', 'BASIS', 'BASIT', 'BASSA', 'BASSE', 'BASTA', 'BASTE', 'BATAI', 'BATAS', 'BATAT', 
'BATCH', 'BATEE', 'BATER', 'BATES', 'BATEZ', 'BATHS', 'BATIE', 'BATIK', 'BATIR', 'BATIS', 'BATIT', 'BATON', 'BATTE', 
'BATTU', 'BAUDS', 'BAUGE', 'BAUME', 'BAVAI', 'BAVAS', 'BAVAT', 'BAVEE', 'BAVER', 'BAVES', 'BAVEZ', 'BAYAI', 'BAYAS', 
'BAYAT', 'BAYER', 'BAYES', 'BAYEZ', 'BAYLE', 'BAYOU', 'BAZAR', 'BAZIN', 'BAZOU', 'BEAIS', 'BEAIT', 'BEANT', 'BEATE', 
'BEATS', 'BEAUF', 'BEAUX', 'BEBES', 'BEBOP', 'BECHA', 'BECHE', 'BECOT', 'BECTA', 'BECTE', 'BEDES', 'BEDON', 'BEENT', 
'BEERA', 'BEGUE', 'BEGUM', 'BEGUS', 'BEHAI', 'BEIEZ', 'BEIGE', 'BEKEE', 'BEKES', 'BELAI', 'BELAS', 'BELAT', 'BELEE', 
'BELER', 'BELES', 'BELEZ', 'BELGA', 'BELGE', 'BELLE', 'BELON', 'BEMBA', 'BEMOL', 'BENEF', 'BENET', 'BENIE', 'BENIN', 
'BENIR', 'BENIS', 'BENIT', 'BENJI', 'BENNA', 'BENNE', 'BENTO', 'BEONS', 'BERCA', 'BERCE', 'BERET', 'BERGE', 'BERME', 
'BERNA', 'BERNE', 'BEROT', 'BERYL', 'BERYX', 'BESAS', 'BESEF', 'BESET', 'BETAS', 'BETEE', 'BETEL', 'BETES', 'BETIE', 
'BETIS', 'BETON', 'BETTE', 'BEUHS', 'BEURE', 'BEURK', 'BEURS', 'BEUSE', 'BEVUE', 'BEZEF'];

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