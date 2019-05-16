import 'babel-polyfill';
import {solution} from '../solutions/lesson4-frog-river-one';
import {expect} from 'chai';


describe('FrogRiverOne - lesson4', () => {

    it('Earliest time should be equal 1', ()=> {
        expect(solution(2, [1, 2])).to.equal(1);
    });

    it('Earliest time should be equal -1', ()=> {
        expect(solution(2, [2])).to.equal(-1);
    });

    it('Min value should be equal 2000', ()=> {
        expect(solution(1, [1])).to.equal(0);
    });

});


