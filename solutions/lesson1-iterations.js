export function solution(N) {
    let binaryRepresentation = N.toString(2);
    let temporaryNumber = 0;
    let longestSequence = 0;
    for(let number of binaryRepresentation) {
        if (number === '1') {
            longestSequence = Math.max(longestSequence, temporaryNumber);
            temporaryNumber = 0;
        } else {
            temporaryNumber += 1;
        }
    }
    return longestSequence;
}