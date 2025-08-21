// פונקציה להצגת שם המשתמש ברמה
const lelvelH1 = () => {
    let h1 = document.getElementById('h1');
    let u = loadFromLocalStorage('users');
    let name = u[u.length - 1].name;
    h1.innerHTML = `...היי   ${name}   ! כאן ניתן לבחור רמה ו - מתחילים לשחק`;
};

// קריאה לפונקציה להצגת שם המשתמש
lelvelH1(); 


