//условия
//let num = 50;

if (num < 49){
    console.log("Неверно!")
} else if (num > 100){
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num){
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");  
        break;
    case num > 80:
        console.log("Много!");  
        break;
    case  50:
        console.log("Верно!");
        break;
    default:
            console.log("Что-то пошло не так...");
            break;
}

//циклы
let num = 50;
// while (num < 55){
//     console.log(num);
//     num++;
// }

do{
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++){
    if (i == 6){
        continue
    }
    console.log(i);
}

// let i = 1; // мы уже имеем объявленную i с присвоенным значением

// for (; i < 8; i++) { // нет необходимости в "начале"
// if (i == 6){
//     continue
// }
// console.log(i);
// }


// let i = 1;

// while (i < 8) {
//     console.log(i, i != 6);
//     i++;
// }
