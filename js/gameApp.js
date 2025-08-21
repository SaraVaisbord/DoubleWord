//פונקציה ליצירת חבילת קלפים
function CreatPackage() {
    const levels = [loadFromLocalStorage('level1'), loadFromLocalStorage('level2'), loadFromLocalStorage('level3')]; //**🐸 בעקרון זה היה עם שמות עזר אבל ככה זה חוסך שורות:)*/
    const imageCounts = [45, 40, 43];
    let a = 'a';
    for (let i = 0; i < levels.length; i++) {
        let icons = levels[i] || []; // אם המערך לא קיים, נשתמש במערך ריק
        if (icons.length === 0)
            for (let j = 1; j <= imageCounts[i]; j++) {
                let img = `../imgs/img${i + 1}/${j}.png`;
                let word = `../imgs/word${i + 1}/${j}.png`;
                let id = a + i + j;
                let icon = {
                    img: img,
                    word: word,
                    id: id
                };
                icons.push(icon);
            }
        saveToLocalStorage(icons, `level${i+1}`);
    }
}
const startGame = function () {
    const level = this.id;
    localStorage.setItem('currentLevel', level); 
    alert(`בחרת רמה מספר ${level} הידד!`);
    window.location.href = '../html/gamePage.html';    
};

let card1ch = null;
let card2ch = null;
function check(event) {  
    let x = document.getElementById('x');
    let v = document.getElementById('v');
    let x1 = document.getElementById('x1');
    let v1 = document.getElementById('v1');
    const id = event.target.getAttribute('data-id');
    const level = localStorage.getItem('currentLevel');
    if (event.target.classList.contains('img')) {
        card1ch = id;
    } else if (event.target.classList.contains('word')) {
        card2ch = id;
    }

    if (card1ch && card2ch) {
        if (card1ch === card2ch) {
            const vs = document.getElementById('vSound');
            vs.play();
            if(checkScore===4){
                const applauseSound = document.getElementById('sound');
                applauseSound.play();
                    const overlay = document.getElementById('overlay');
                    overlay.style.display = 'flex'; 
                    setTimeout(() => {
                        overlay.style.display = 'none';  
                    }, 2000);
                checkScore=0;
            }
            v.classList.add('show');
            v1.classList.add('show');
            counterS+=5;
            checkScore++;
            const scoreboard = document.getElementById('scoreboard');
            scoreboard.innerText = `ניקוד: ${counterS}`;
            updateMessageDisplay('ניחשת נכון!😊');
        } else {
            const xs = document.getElementById('xSound');
            xs.play();
            x.classList.add('show');
            x1.classList.add('show');
            if (counterS ==0? counterS = 0:counterS-=1);
            const scoreboard = document.getElementById('scoreboard');
            scoreboard.innerText = `ניקוד: ${counterS}`;
            updateMessageDisplay('אופס, נסה שוב...😢 ');
        }
        setTimeout(() => {
            x.classList.remove('show');
            v.classList.remove('show');
            x1.classList.remove('show');
            v1.classList.remove('show');
        }, 1000);
        card1ch = null;
        card2ch = null;
        display(level);
    }
}

function updateMessageDisplay(message) {
    const messageDisplay = document.getElementById('message');
    messageDisplay.innerText = message;
    messageDisplay.style.opacity = 1;
    setTimeout(() => {
        messageDisplay.style.opacity = 0; 
    }, 2000); 
}
function loadArrStyle(name) {
    let arr;
    
    if (name === 'positionsWord') {
        if (!(localStorage.getItem('positionsWord'))) {
            arr = [{
                    top: '38%',
                    left: '71%'
                },
                {
                    top: '63%',
                    left: '71%'
                },
                {
                    top: '83%',
                    left: '71%'
                },
                {
                    top: '43%',
                    left: '61%'
                },
                {
                    top: '60%',
                    left: '61%'
                },
                {
                    top: '68%',
                    left: '81%'
                },
                {
                    top: '48%',
                    left: '81%'
                },
                {
                    top: '78%',
                    left: '61%'
                }
            ];
            saveToLocalStorage(arr, 'positionsWord');
        } else {
            arr = loadFromLocalStorage('positionsWord');
        }
    } else if (name === 'positionsImg') {
        if (!(localStorage.getItem('positionsImg'))) {
            arr = [{
                top: '37%',
                left: '32%'
            },
            {
                top: '62%',
                left: '32%'
            },
            {
                top: '82%',
                left: '32%'
            },
            {
                top: '42%',
                left: '22%'
            },
            {
                top: '59%',
                left: '22%'
            },
            {
                top: '67%',
                left: '41%'
            },
            {
                top: '47%',
                left: '41%'
            },
            {
                top: '77%',
                left: '22%'
            }
            ];
            saveToLocalStorage(arr, 'positionsImg');
        } else {
            arr = loadFromLocalStorage('positionsImg');
        }
    }

    return arr; // מחזיר את המערך המתאים
}
//פונקציה להצגת הסמלים
const  display = (level) =>{
 // טען ניקוד קיים או אפס אם אין
    displayCounterScore++;
    if (displayCounterScore >= 15) {
        const users = loadFromLocalStorage('users');
        const currentUserS = users[users.length - 1];
        if (currentUserS.score < counterS )
             currentUserS.score =counterS;
        saveToLocalStorage(users,'users') ;
        window.location.href = 'endPage.html';}
    const positionsWord = loadArrStyle('positionsWord');
    const positionsImg = loadArrStyle('positionsImg');

    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    console.log(card1);
    let arrIcon = loadFromLocalStorage(level);
    if (card1 && card2) {
        card1.innerHTML = ""; // ניקוי התוכן הקודם
        card2.innerHTML = "";
    } // ניקוי התוכן הקודם
    if (arrIcon.length === 0) return; // אם אין אייקונים, יוצאים
    // הצגת תמונות IMG
    for (let j = 0; j < 7; j++) { // עדכון לולאת התמונות ל-4
        let icon = arrIcon[j];
        const imgElement = document.createElement('img');
        imgElement.src = icon.img;
        imgElement.classList.add('img');
        imgElement.id = 'level:' + level + 'img:' + j;
        imgElement.setAttribute('data-id', icon.id);
        imgElement.style.position = 'absolute'; // מאפשר מיקום מוחלט
        imgElement.style.top = positionsImg[j].top;
        imgElement.style.left = positionsImg[j].left;
        imgElement.style.transform = 'translate(-50%, -50%)'; // מרכז את התמונה
        card1.appendChild(imgElement);

        // הצגת תמונות WORD
        const wordElement = document.createElement('img');
        wordElement.classList.add('word');
        wordElement.src = arrIcon[j + 7].word; // עדכון ל-index הנכון של תמונות ה-WORD
        wordElement.id = 'level:' + level + 'word:' + j;
        wordElement.setAttribute('data-id', arrIcon[j + 7].id);
        wordElement.style.position = 'absolute'; // מאפשר מיקום מוחלט
        wordElement.style.top = positionsWord[j].top; // תן להם מיקום תואם
        wordElement.style.left = positionsWord[j].left; // תן להם מיקום תואם
        wordElement.style.transform = 'translate(-50%, -50%)'; // מרכז את התמונה
        card2.appendChild(wordElement);

        addClick(imgElement.id, check);
        addClick(wordElement.id, check);
    }
    let icon = arrIcon[25];
    const imgElement = document.createElement('img');
    imgElement.src = icon.img;
    imgElement.classList.add('img');
    imgElement.id = 'level:' + level + 'img:20'; //**🐸 */
    imgElement.setAttribute('data-id', icon.id); //**🐸 */
    imgElement.style.position = 'absolute'; // מאפשר מיקום מוחלט
    imgElement.style.top = positionsImg[7].top; // תן להם מיקום תואם
    imgElement.style.left = positionsImg[7].left; // תן להם מיקום תואם
    imgElement.style.transform = 'translate(-50%, -50%)';
    card1.appendChild(imgElement);

    const wordElement = document.createElement('img');
    wordElement.src = icon.word;
    wordElement.classList.add('word');
    wordElement.id = 'level:' + level + 'word:25'; //**🐸 */
    wordElement.setAttribute('data-id', icon.id); //**🐸 */
    wordElement.style.position = 'absolute'; // מאפשר מיקום מוחלט
    wordElement.style.top = positionsWord[7].top; // תן להם מיקום תואם
    wordElement.style.left = positionsWord[7].left; // תן להם מיקום תואם
    wordElement.style.transform = 'translate(-50%, -50%)';
    card2.appendChild(wordElement);
    addClick(imgElement.id, check);
    addClick(wordElement.id, check);
    shuffle('positionsWord');
    shuffle('positionsImg');
    shuffle(level);

}


// פונקציה לערבוב
function shuffle(id) {
    let arr = loadFromLocalStorage(id);
    for (let i = arr.length - 1; i > 0; i--) {
        let randNum = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randNum]] = [arr[randNum], arr[i]];
    }
    saveToLocalStorage(arr, id);
}



// אתחול המשחק
document.addEventListener('DOMContentLoaded', function () {

    // הוספת פונקציות למעבר בין הרמות
    addClick('level1', startGame);
    addClick('level2', startGame);
    addClick('level3', startGame);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserS = users[users.length - 1]
    if (!(localStorage.getItem('level1') && localStorage.getItem('level2') && localStorage.getItem('level2'))) {
        CreatPackage();
    }
    const level = localStorage.getItem('currentLevel'); // טען את הרמה
    let b = document.querySelector('#b');
    b.style.backgroundImage = `url('../imgs/${level}.png')`;
    if (level) 
        display(level); // הצג את הרמה שנבחרה
    //החלפת כרטיס אחרי 20שניות

    let intervalTime = 90000;

    setInterval(() => {
        
        if (level) { // השתמש ברמה שנבחרה
            display(level); // הצג את הרמה שנבחרה
        }
    }, intervalTime);
});
let displayCounter = 0;
let displayCounterScore = 0;
let counterS = 0;
let checkScore =0;