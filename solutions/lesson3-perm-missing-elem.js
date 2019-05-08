export function solution(A){
    let n = A.length + 1;
    let s = (n * (n + 1) / 2);
    let sum = 0;
    A.forEach((n) => {
        sum += n;
    });
    return s - sum;
}





