let keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  //charCount:
  setCharCount() {
    do {
    var count = prompt('Enter the number of characters: - ');
    if(count == null) break;
    console.log(count);
    count = keyTrainer.checkPositiveInteger(count);
    console.log(count);

  } while(count);
  console.log('finished');
  },

  checkPositiveInteger(number) {
    if(number >= 0 && ((number ^ 0) == number)) {
      return false;
    }
    else {
      return true;
    }
  }

}
