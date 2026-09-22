// let turn = 'X';
// let items = document.querySelectorAll('.square');

// items.forEach((item) => {
//     item.onclick = function() {

//         console.log(item.id); // يعطيك item1, item2...

//         if (item.innerHTML === '') {
//             item.innerHTML = turn;

//             // تبديل الدور
//             turn = (turn === 'X') ? 'O' : 'X';
//         }
//     }
// });
let title = document.querySelector('.title');
let turn = 'X';
let items = document.querySelectorAll('.square');

items.forEach((item) => {
    item.onclick = function () {
        if (turn === 'X' && item.innerHTML === '') {
            item.innerHTML = 'X';
            title.innerHTML = 'o'
            turn = 'o';
        } else if (turn === 'o' && item.innerHTML === '') {
            item.innerHTML = 'o';
            title.innerHTML = 'X'
            turn = 'X';
        }
        win();
    }
});

function win() {
    if (item1.innerHTML === 'X' && item2.innerHTML === 'X' && item3.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item1, item2, item3);
        black(item1, item2, item3)
    } else if (item4.innerHTML === 'X' && item5.innerHTML === 'X' && item6.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item4, item5, item6);
        black(item4, item5, item6)
    } else if (item7.innerHTML === 'X' && item8.innerHTML === 'X' && item9.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item7, item8, item9);
        black(item7, item8, item9)
    } else if (item1.innerHTML === 'X' && item4.innerHTML === 'X' && item7.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item1, item4, item7);
        black(item1, item4, item7)
    } else if (item2.innerHTML === 'X' && item5.innerHTML === 'X' && item8.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item2, item5, item8);
        black(item2, item5, item8)
    } else if (item3.innerHTML === 'X' && item6.innerHTML === 'X' && item9.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item3, item6, item9);
        black(item3, item6, item9)
    } else if (item1.innerHTML === 'X' && item5.innerHTML === 'X' && item9.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item1, item5, item9);
        black(item1, item5, item9)
    } else if (item3.innerHTML === 'X' && item5.innerHTML === 'X' && item7.innerHTML === 'X') {
        title.innerHTML = 'X win';
        end(item3, item5, item7);
        black(item3, item5, item7)
    } else if (item1.innerHTML === 'o' && item2.innerHTML === 'o' && item3.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item1, item2, item3);
        black(item1, item2, item3)
    } else if (item4.innerHTML === 'o' && item5.innerHTML === 'o' && item6.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item4, item5, item6);
        black(item4, item5, item6)
    } else if (item7.innerHTML === 'o' && item8.innerHTML === 'o' && item9.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item7, item8, item9);
        black(item7, item8, item9)
    } else if (item1.innerHTML === 'o' && item4.innerHTML === 'o' && item7.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item1, item4, item7);
        black(item1, item4, item7)
    } else if (item2.innerHTML === 'o' && item5.innerHTML === 'o' && item8.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item2, item5, item8);
        black(item2, item5, item8)
    } else if (item3.innerHTML === 'o' && item6.innerHTML === 'o' && item9.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item3, item6, item9);
        black(item3, item6, item9)
    } else if (item1.innerHTML === 'o' && item5.innerHTML === 'o' && item9.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item1, item5, item9);
        black(item1, item5, item9)
    } else if (item3.innerHTML === 'o' && item5.innerHTML === 'o' && item7.innerHTML === 'o') {
        title.innerHTML = 'o win';
        end(item3, item5, item7);
        black(item3, item5, item7)
    }
    Draw();
}


function end(nim1, num2, num3) {
    setInterval(() => {
        title.innerHTML += '.';
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 4000);
}

function black(nim1, num2, num3) {
    nim1.style.background = 'black';
    num2.style.background = 'black';
    num3.style.background = 'black';
}

function Draw() {
    let isDraw = true;
    items.forEach(item => {
        if (item.innerHTML === '') {
            isDraw = false;
        }
    });

    if (isDraw) {
        title.innerHTML = 'Draw 😐';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 4000);
    }
}