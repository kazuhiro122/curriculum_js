let number = 1;
while (number < 100) {
    if (number % 3 === 0) {
        number++;
        console.log("Fizz!");
        continue;
    }
    if (number % 5 === 0) {
        number++;
        console.log("Buzz!");
        continue;
    }
    if (number % 3 === 0 && number % 5 === 0) {
        number++;
        console.log("FizzBuzz!!");
        continue;
    }
    console.log(number);
    number++;
}



//while文    ：判定条件がfalseになるまで永遠に繰り返したい時
//do while文 ：ループする前に、最初に1回だけは実行する必要がある時
//for文      ：あらかじめ繰り返す回数が決まっている時

//break文    :ループを強制的に「終了」させる
//continue文 ：その処理を「スキップ」して、次の条件式の評価を行う