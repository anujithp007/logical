function printPattern() {
    let n = 6; 

   
    console.log('*');

    
    for (let i = 1; i <= n; i++) {
        let line = '*';

        for (let j = 1; j <= i; j++) {
            line += j;
        }

        for (let j = i - 1; j >= 1; j--) {
            line += j;
        }

        line += '*';
        console.log(line);
    }

   
    for (let i = n - 1; i >= 1; i--) {
        let line = '*';

        for (let j = 1; j <= i; j++) {
            line += j;
        }

        for (let j = i - 1; j >= 1; j--) {
            line += j;
        }

        line += '*';
        console.log(line);
    }

    console.log('*');
}

printPattern();
