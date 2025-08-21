// הקשבה לטעינת התוכן של הדף
document.addEventListener('DOMContentLoaded', () => {
    // הוספת לחצנים
    addClick('in', clickHomePage);
    addClick('up', clickHomePage);
    addClick('signUp', signUp);
    addClick('log', login);
});

// פונקציה לטיפול בלחיצה על כפתורי הבית
const clickHomePage = (event) => {
    document.getElementById('welcome-text').style.display = "none";
    document.getElementById('in').style.display = "none";
    document.getElementById('up').style.display = "none";
    
    if (event.target.getAttribute('id') === "in") {
        // אם הכפתור הוא להתחברות
        document.getElementById('signupContainer').style.display = "none";
        document.getElementById('loginContainer').style.display = "flex";
    } else {
        // אם הכפתור הוא להרשמה
        document.getElementById('signupContainer').style.display = "flex";
        document.getElementById('loginContainer').style.display = "none";
    }
};
let users = loadFromLocalStorage('users');
let l = document.getElementById('loginContainer');
l.style.display = "none";
let s = document.getElementById('signupContainer');
s.style.display = "none";

const login = (event) => {
    event.preventDefault();
    let name = document.getElementById('namelogin').value;
    let password1 = document.getElementById('passwordlogin').value;

    if (password1 === "" && name === "")
        alert('אנא השלם את כל פרטי ההתחברות🍿🥓😋😊');
    else if (password1 === "")
        alert('אנא הזן סיסמה🤗😉');
    else if (name === "")
        alert('אנא הזן את שמך🦄🐼🐸');
    else {
        const user = users.find(user => user.name === name);
        if (user) {
            if (password1 === user.password) {
                window.location.href = 'html/level.html';
            } else {
                let p = document.getElementById("password");
                p.innerHTML = '😒🤤הסיסמה שגויה, אנא נסה שוב';
                document.getElementById('passwordlogin').value = "";
            }
        } else {
            alert('😏🙄שם המשתמש אינו קיים במערכת');
            document.getElementById('signupContainer').style.display = "flex";
            document.getElementById('loginContainer').style.display = "none";
        }
    }
};

// פונקציה להרשמת משתמש חדש
const signUp = (event) => {
    event.preventDefault();
    let password = document.getElementById('passwordSignUp').value;
    let passwordValid = document.getElementById('passwordValid').value;
    let name = document.getElementById('nameSignUp').value;
    let email = document.getElementById('emailSignUp').value;

    // בדיקות שדות ריקים
    if (email == "") {
        alert('אנא הכנס כתובת מייל');
    } else if (password == "" && passwordValid == "") {
        alert('אנא הכנס סיסמה');
    } else if (name == "") {
        alert('אנא הכנס שם משתמש');
    } else if (password !== passwordValid) {
        let x = document.getElementById("155");
        x.style.fontSize = '1rem';
        x.innerHTML = ' טעות באימות הסיסמה אנא נסה שוב';
        document.getElementById('passwordSignUp').value = "";
        document.getElementById('passwordValid').value = "";
        if(t>1){
            document.getElementById('signupContainer').style.display = "flex";
            document.getElementById('loginContainer').style.display = "none";
        }
    } else {
        // יצירת משתמש חדש
        let user = {
            name: name,
            email: email,
            password: password,
            score: 0
        };
        users.push(user);
        saveToLocalStorage(users, 'users');
        alert(`הידד ${name}! עכשיו תועבר לבחירת רמה נרשמת בהצלחה😜👌😘😍😍😍`);
        window.location.href = 'html/level.html';
    }
};


