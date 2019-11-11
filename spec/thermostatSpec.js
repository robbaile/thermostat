'use strict';

describe("Thermostat", function() {
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

    it('should have a power saving mode and set to true automatically', () => {
        expect(thermostat.isPowerSavingActive()).toEqual(true);
    })

    it('should be able to switch power saving off', () => {
        thermostat.switchMode()
        expect(thermostat.isPowerSavingActive()).toEqual(false);
    })

    it('should be able to switch power saving on and off', () => {
        thermostat.switchMode();
        expect(thermostat.isPowerSavingActive()).toEqual(false);
        thermostat.switchMode();
        expect(thermostat.isPowerSavingActive()).toEqual(true);
    })

    it('should only be able to go to 25 degress when power saving is on', () => {
        for (let i = 0; i < 6; i++) {
            thermostat.up();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(25)
    })

    it('should only be able to go to 32 degress when power saving is off', () => {
        thermostat.switchMode();
        console.log(thermostat.MAXIMUMTEMPERATURE)
        for (let i = 0; i < 14; i++) {
            thermostat.up();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(32)
    })
});