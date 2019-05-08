import 'babel-polyfill';
import {solution} from '../solutions/lesson3-perm-missing-elem';
import {expect} from 'chai';


describe('PermMissingElem - lesson3', () => {

    it('Missing element in a given permutation should be equal 3', ()=> {
        expect(solution([1, 2, 4])).to.equal(3);
    });

    it('Missing element in a given permutation should be equal 5', ()=> {
        expect(solution([1, 2, 3, 4, 6])).to.equal(5);
    });

    it('Missing element in a given permutation should be equal 1', ()=> {
        expect(solution([])).to.equal(1);
    });

});


