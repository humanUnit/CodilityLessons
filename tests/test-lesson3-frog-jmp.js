import 'babel-polyfill';
import {solution} from '../solutions/lesson3-grog-jmp';
import {expect} from 'chai';


describe('FrogJmp - lesson3', () => {

    it('Number of frog jumps should be equal 3', ()=> {
        expect(solution(10, 85, 30)).to.equal(3);
    });


    it('Number of frog jumps should be equal 218', ()=> {
        expect(solution(24, 2200, 10)).to.equal(218);
    });

    it('Number of frog jumps should be equal 1', ()=> {
        expect(solution(67, 77, 10)).to.equal(1);
    });

});


