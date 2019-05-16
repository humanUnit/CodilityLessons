import 'babel-polyfill';
import {solution} from '../solutions/lesson4-perm-check';
import {expect} from 'chai';


describe('FrogRiverOne - lesson4', () => {

    it('Is a permutation', ()=> {
        expect(solution([2, 3, 4])).to.equal(0);
    });

    it('Is a permutation', ()=> {
        expect(solution([ 78,
            97,
            41,
            36,
            58,
            47,
            74,
            45,
            57,
            13,
            40,
            62,
            73,
            69,
            31,
            80,
            70,
            64,
            21,
            94,
            52,
            17,
            81,
            71,
            99,
            4,
            19,
            66,
            92,
            44,
            30,
            24,
            11,
            51,
            95,
            77,
            5,
            32,
            60,
            59,
            22,
            26,
            6,
            100,
            83,
            49,
            33,
            42,
            65,
            54,
            23,
            29,
            56,
            9,
            96,
            34,
            37,
            67,
            84,
            85,
            1,
            15,
            72,
            55,
            46,
            2,
            8,
            12,
            48,
            20,
            79,
            14,
            98,
            3,
            43,
            7,
            90,
            63,
            50,
            35,
            87,
            75,
            27,
            18,
            39,
            93,
            28,
            10,
            89,
            38,
            16,
            53,
            82,
            86,
            61,
            25,
            88,
            76,
            68,
            91])).to.equal(1);
    });

    it('Is not a permutation', ()=> {
        expect(solution([2, 2, 3])).to.equal(0);});

});