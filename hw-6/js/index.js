let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount() {
        do {
            var count = prompt('Enter the number of characters: - ');
            if (count == null) break;
            count = keyTrainer.checkPositiveInteger(count);
            this.charCount = +count;

        } while (count);
        console.log('finished');
    },

    checkPositiveInteger(number) {
        if (number >= 0 && ((number ^ 0) == number)) {
            return false;
        } else {
            return true;
        }
    },

    task: '',
    createTask() {
        let arr = new Array(this.charCount);

        for (let i = 0; i < this.charCount; i++) {
            arr[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
        }

        this.task = arr;

    },

    startTask() {

    }

}
