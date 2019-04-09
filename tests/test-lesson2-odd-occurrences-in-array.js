import 'babel-polyfill';
import {solution} from '../solutions/lesson2-odd-occurrences-in-array';
import {expect} from 'chai';


describe('OddOccurrencesInArray - lesson2', () => {

    it('Value of the unpaired element equals 1', ()=> {
        expect(solution([1, 2, 2, 3, 3])).to.equal(1);
    });


    it('Value of the unpaired element equals 9', ()=> {
        expect(solution([9, 9, 9, 9, 9])).to.equal(9);
    });

    it('Value of the unpaired element equals 100243', ()=> {
        expect(solution([8764, 9999, 100244, 9999, 100243, 8764, 100244])).to.equal(100243);
    });

});
