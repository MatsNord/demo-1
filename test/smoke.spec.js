import { expect } from 'chai';

//Unit under test
import { smoker } from '../src/smoker';

describe("The smoker", () =>{
    it("should be smoking when it's on fire", () => {
        let s = smoker();
        s.setOnFire();
        expect(s.isSmoking()).true;
    });
        it("should be smoking when it's on fire", () => {
        let s = smoker();
        s.extingGuish();
        expect(s.isSmoking()).false;
    });
});
