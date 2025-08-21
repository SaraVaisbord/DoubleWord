document.addEventListener('DOMContentLoaded', () => {
    const leaderboard = document.getElementById('leaderboard');
    const users =  loadFromLocalStorage('users');
    // מיון המשתמשים לפי ניקוד
    users.sort((a, b) => b.score - a.score); // שימוש בפונקציית מיון על מערך

// הצגת טבלת האלופים
users.forEach((user, index) => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `<span class="label">שם:</span> <span class="name">${user.name}</span>     <span class="label">ניקוד:</span> <span class="score">${user.score}</span>`;
    
    leaderboard.appendChild(userDiv);
    
    // הוספת קו מפריד
    const hr = document.createElement('hr');
    leaderboard.appendChild(hr);
});

});

