X2 == '2';
// false
const newLocal = 2 === 2;
// true
2 === '2';
// false
'2' + 3 == 23;
// true
const newLocal = '2' + 3 === 5;
// false
10 % 3;
// 1
10 % 3 === 1;
// true
(100 % 7) % 5;
//  2 
(100 % 7) % 5 !== 0;
// true
(100 % 7) % 9 == 2;
// true
!(10 % 2);
// true
!!!!((10 % 7) % 3);
// false
10 % 3 === -1 % 2;
// false
(892783 != '89278' + 3) == 0;
// false
true && false;
// false
false || true;
// true
true || false;
// true
true || false;
// true
true || false + true;
// true
true * false && false + true;
// false
10 && 123 && -1 && 3;
// all truthy, return last truthy 3.
10 && 123 && 0 && 3;
// truthy, truthy, falsey, truthy, returns falsey
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1;
// truthy, truthy, falsy (nan), 0.
// returns 0
3 && 'Calum' && ('' || 26);
// all truthy, return last truthy 26.


3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));
// truthy, truthy, (falsey / falsey(86 *0 = 0) / (falsey + truthy & truthy + truthy.))
('' + 1 && 'Cat' + 'Dog')
// string + 1 = '1' truthy  && CatDog, returns last truthy = CatDog
3 && 'Remi' && (null || 86 * 0 || 'CatDog')
(null || 86 * 0 || 'CatDog')
// falsey || falsey || 'CatDog')
// in OR operations if true exist, return true
3 && 'Remi' && 'CatDog'
// all Truthy, return last Truthy 'CatDog