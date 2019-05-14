 export function solution(A){
    let sum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
    let left = 0;
    let equilibrium = Number.MAX_VALUE;

    for (let i = 0; i < A.length-1; i++) {
        left += A[i];
        let right = sum - left;
        equilibrium = Math.min(equilibrium, Math.abs(left - right));
        if(equilibrium === 0) {
            return 0;
        }
    }
    return equilibrium;
}
