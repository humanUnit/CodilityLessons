export function solution(A, K) {
    let arr = A;
    if(A.length === 0) {
        return A;
    }
    for(let i = 0; i < K; i++) {
        let a = arr.pop();
        arr.unshift(a);
    }
    return arr;
}