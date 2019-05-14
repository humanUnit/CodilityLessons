import 'babel-polyfill';
import {solution} from '../solutions/lesson3-tape-equilibrium';
import {expect} from 'chai';


describe('TapeEquilibrium - lesson3', () => {

    it('Min value should be equal 0', ()=> {
        expect(solution([1, 2, 3])).to.equal(0);
    });

    it('Min value should be equal 633', ()=> {
        expect(solution([634, 1])).to.equal(633);
    });

    it('Min value should be equal 2000', ()=> {
        expect(solution([-1000, 1000])).to.equal(2000);
    });

});


