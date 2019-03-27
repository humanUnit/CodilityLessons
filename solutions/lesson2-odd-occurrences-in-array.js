export function solution(A) {
    let setOfElements = new Set([]);
    for (let i = 0; i < A.length; i++) {
        let element = A[i];
        if(setOfElements.has(element)){
            setOfElements.delete(element);
        } else{
            setOfElements.add(element);
        }
    }
    let array = Array.from(setOfElements);
    return parseInt(array);
}