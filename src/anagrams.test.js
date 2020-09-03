import { expect } from 'chai';
import { isAnagram } from './anagrams'

describe('isAnagram - basic functionalities', ()=>{
    it('should return false if fewer than 2 arguments are passed in', ()=>{
        const expected = false;
        const actual = isAnagram('cat')
        expect(actual).to.equal(expected)
    })
    it('should return false if passed any argument that is not a string', ()=>{
        const expected = false;
        const actual = isAnagram('dog', 2)
        expect(actual).to.equal(expected)

        const actual2 = isAnagram([1,2], '1,2')
        expect(actual2).to.equal(expected)
    })
    it('should return true if both arguments have same quantity and value of letters', ()=>{
        const expected = true;
        const actual = isAnagram('voices rant on', 'conversation')
        expect(actual).to.equal(expected)
    })
})