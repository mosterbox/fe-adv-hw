const keyboard = {
  layouts: {
    en: {
      topRow: [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p"
      ],
      middleRow: [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l"
      ],
      bottomRow: [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m"
      ]
    },
    ru: {
      topRow: [
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ"
      ],
      middleRow: [
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э"
      ],
      bottomRow: [
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю"
      ]
    },
    ua: {
      topRow: [
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ї"
      ],
      middleRow: [
        "ф",
        "і",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "є"
      ],
      bottomRow: [
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю"
      ]
    }
  },
  langs: [
    'en', 'ru', 'ua'
  ],
  currentLang: ''
};

getRandCharInAlph = () => {
  keyboard.currentLang = keyboard.langs[parseInt(selectLanguage)];
  const enAlph = ((keyboard.layouts['en']['topRow']).join('') + (keyboard.layouts['en']['middleRow']).join('') + (keyboard.layouts['en']['bottomRow']).join(''));
  const ruAlph = ((keyboard.layouts['ru']['topRow']).join('') + (keyboard.layouts['ru']['middleRow']).join('') + (keyboard.layouts['ru']['bottomRow']).join(''));
  const uaAlph = ((keyboard.layouts['ua']['topRow']).join('') + (keyboard.layouts['ua']['middleRow']).join('') + (keyboard.layouts['ua']['bottomRow']).join(''));
  if (keyboard.currentLang === 'en') {
    alert(`Rundom letter: ${enAlph[Math.floor(Math.random() * enAlph.length - 1)]}`);
  } else if (keyboard.currentLang === 'ru') {
    alert(`Случайная буква: ${ruAlph[Math.floor(Math.random() * ruAlph.length - 1)]}`);
  } else {
    alert(`Випадкова буква: ${uaAlph[Math.floor(Math.random() * uaAlph.length - 1)]}`);
  }

}
let selectLanguage;
while (true) {
  selectLanguage = prompt("Select language using en-0, ru-1, ua-2");
  if(selectLanguage === '0' || selectLanguage === '1' || selectLanguage === '2') {
      break;
  }
}

getRandCharInAlph();
