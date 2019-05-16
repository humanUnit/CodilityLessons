export function solution(A) {
    let arr = A.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        if (A[i] !== i + 1) {
            return 0;
        }
    }
    return 1;
}