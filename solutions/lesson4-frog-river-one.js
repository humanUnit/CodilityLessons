export function solution(X, A){
    let len = A.length;
    let setOfElements = new Set();
    if(X > A.length) {
        return -1;
    }
    for(let i = 0; i < len; i++) {
        setOfElements.add(A[i]);
        if (setOfElements.size === X) {
            return i;
        }
    }
    return -1;
}