export function solution(X, Y, D){
    if(Y>=X){
        let frogJmp = (Y-X)/D;
        return Math.ceil(frogJmp);
    } else {
        return 0;
    }
}