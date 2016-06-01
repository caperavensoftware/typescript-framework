/// <reference path="./../typings/globals/chai/index.d.ts"/>
/// <reference path="./../typings/globals/mocha/index.d.ts"/>
/// <reference path="./../typings/globals/sinon/index.d.ts"/>

import {expect} from 'chai'
import {Calculator} from './../src/calculator';

describe ("calculator tests", function() {
   it("add", function() {
        const calc = new Calculator();
        const result = calc.add(2,3);
        
        expect(result).to.be.equal(5, '2 + 3 should be 5');
   }) 
});