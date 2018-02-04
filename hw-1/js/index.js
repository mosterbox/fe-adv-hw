const firstLine = 'qwertyuiop\[\]';
const secondLine = 'asdfghjkl;\'#';
const thirdLine = '\\zxcvbnm,./';

const lenFirst = firstLine.length;
const lenSecond = secondLine.length;
const lenThird = thirdLine.length;


console.log(`Верхній ряд символів: ${firstLine} Довжина: ${lenFirst}. Перший символ - ${firstLine.charAt(0)}, останній символ - ${firstLine.charAt(firstLine.length - 1)}.
Средній ряд символів: ${secondLine} Довжина: ${lenSecond} Перший символ - ${secondLine.charAt(0)}, останній символ - ${secondLine.charAt(secondLine.length - 1)}.
Нижній ряд символів: ${thirdLine} Довжина: ${lenThird} Перший символ - ${thirdLine.charAt(0)}, останній символ - ${thirdLine.charAt(thirdLine.length - 1)}.
Пошук символів \[ та \]:
- Верхній ряд символів: ${firstLine.indexOf('[')} і ${firstLine.indexOf(']')}
- Средній ряд символів: ${secondLine.indexOf('[')} і ${secondLine.indexOf(']')}
- Нижній ряд символів: ${thirdLine.indexOf('[')} і ${thirdLine.indexOf(']')}
Якщо -1 тоді символ не знайденно.`);
