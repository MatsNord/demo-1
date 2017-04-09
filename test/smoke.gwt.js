import chai from 'chai';
chai.should();

//Unit under test
import {fireplace} from '../src/fireplace';

Feature('Fire', () => {
    let fp = fireplace;

    Scenario("An arson is commited", () => {

        Given("there is firewood", () => {
           fireplace.firewood.should.exist;
        });

        And("it's not on fire", () => {
             fireplace.onFire.should.not.be.true;
        });

        Then("it's not smoking", () => {
            fireplace.isSmoking.should.to.be.a('function');
            fireplace.isSmoking().should.not.be.true;
        })

        When('somebody sets the fireplace on fire', () => {
            fireplace.setOnfire();
        });

        Then('it shuold be on fire', () => {
            fireplace.onFire.should.be.true;
        });

        And('there should be smoke coming from the fire place', () => {
            fireplace.isSmoking().should.be.true;
        });

    });

});
