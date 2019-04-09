import 'babel-polyfill';
import {solution} from '../solutions/lesson2-cyclic-rotation';
import {expect} from 'chai';


describe('CyclicRotation - lesson2', () => {

    it('Array [1, 2, 3, 4] with number of steps 4 should be equal [1, 2, 3, 4]', ()=> {
        expect(solution([1, 2, 3, 4], 4)).deep.equal([1, 2, 3, 4]);
    });

    it('Array [2, 3, 4, 7, 1] with number of steps 1 should be equal [1, 2, 3, 4, 7]', ()=> {
        expect(solution([2, 3, 4, 7, 1], 1)).deep.equal([1, 2, 3, 4, 7]);
    });

    it('Array [] with number of steps 2 should be equal []', ()=> {
        expect(solution([], 2)).deep.equal([]);
    });
});
