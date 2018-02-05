/* Task one */
var resort = +prompt(`Введіть число від 1 до 3, де:
1 - місто Таба;
2 - місто Шарм;
3 - місто Хургада.`,1);

switch(resort) {
  case 1:
    alert('Ви обрали місто  Таба');
    break;
  case 2:
    alert('ВВи обрали місто Шарм');
    break;
  case 3:
    alert('Ви обрали місто  Хургада');
    break;
  default:
    alert('Ви ввели число, варіанта міста якого не має в списку!');
}

/* Task two */
let resortTaba = 15;
let resortSharm = 25;
let resortHurgada = 6;

let numberParticipants = +prompt('Введіть число участників групи:', 0);

if (!isNaN(numberParticipants) && numberParticipants > 0 && (parseInt(numberParticipants) === numberParticipants)) {

  if (numberParticipants <= resortTaba || numberParticipants <= resortSharm || numberParticipants <= resortHurgada) {
    let tabaGroup;
    let sharmGroup;
    let hurgadaGroup;

    if (numberParticipants <= resortTaba) {
      tabaGroup = confirm('Є вільні місця в місті Таба. Бажаєте обрати цю групу?');
      if (tabaGroup == true) {
        resortTaba -= numberParticipants;
        alert(`Залишилось місць в Таба - ${resortTaba}`);
      }
    }

    if (numberParticipants <= resortSharm && tabaGroup === false) {
      sharmGroup = confirm('Є вільні місця в місті Шарм. Бажаєте обрати цю групу?');
      if (sharmGroup == true) {
        resortSharm -= numberParticipants;
        alert(`Залишилось місць в Шарм - ${resortSharm}`);
      }
    }

    if (numberParticipants <= resortHurgada && sharmGroup === false) {
      hurgadaGroup = confirm('Є вільні місця в місті Хургада. Бажаєте обрати цю групу?');
      if (hurgadaGroup == true) {
        resortHurgada -= numberParticipants;
        alert(`Залишилось місць в Хургада - ${resortHurgada}`);
      }
    }
  } else {
    alert('Місць нема!');
  }
} else {
  alert('Ви ввели не вірну кількість учасників групи. Спробуйте повторити спробу.')
}
