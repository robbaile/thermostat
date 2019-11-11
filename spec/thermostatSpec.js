'use strict';

describe("Plane", function() {
    let Thermostat = require('../lib/thermostat');
    var thermostat;
    
    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('should have a random flight number generated', () => {
        expect(thermostat.getCurrentTemperature()).toEqual(20)
    });

    it('should raise temperature by one', () => {
        thermostat.up()
        expect(thermostat.getCurrentTemperature()).toEqual(21)
    });

    it('should decrease temperature by one', () => {
        thermostat.down()
        expect(thermostat.getCurrentTemperature()).toEqual(19)
    });

    it('should only go down to 10 degress', () => {
        for (let i = 0; i < 15; i++) {
            thermostat.down();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(10)
    });
});