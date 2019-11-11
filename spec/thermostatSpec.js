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
});