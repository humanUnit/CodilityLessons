function solution(A){
    let sum = 0;
    let secondSum = 0;
    A.forEach((n) => {
        sum += n;
        let secondPart = A.slice(n);
        console.log(secondPart);
        // let difference = sumOverall - sum;
        // console.log(difference);
        // let result = sum - difference;
        // console.log(result);
        // let min = Math.min(result);
        // return console.log(min);
    });

    console.log(sum);
    console.log(secondSum);

}

solution([1, 2, 3]);