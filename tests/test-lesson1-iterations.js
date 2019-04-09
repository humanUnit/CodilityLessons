import 'babel-polyfill';
import {solution} from '../solutions/lesson1-iterations';
import {expect} from 'chai';


describe('Iterations - lesson1', () => {

    it('Longest sequence of zeros in binary representation of 100 equals 2', ()=> {
        expect(solution(100)).to.equal(2);
    });

    it('Longest sequence of zeros in binary representation of 45125 equals 5', ()=> {
        expect(solution(45125)).to.equal(5);
    });

    it('Longest sequence of zeros in binary representation of 8 equals 0', ()=> {
        expect(solution(8)).to.equal(0);
    });

});
