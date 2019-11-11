'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.MINIMUMTEMPERATURE = 10;
        this.MAXIMUMTEMPERATURE = 25;
        this.powerSavingMode = true;
    }

    getCurrentTemperature() {
        return this.temperature
    }

    up() {
        this.temperature == this.MAXIMUMTEMPERATURE ? this.temperature : this.temperature += 1;
    }

    down() {
        this.isMinimumTemperature() ? this.temperature : this.temperature -= 1;
    }

    isMinimumTemperature() {
        return this.temperature == this.MINIMUMTEMPERATURE;
    }

    isPowerSavingActive() {
        return this.powerSavingMode;
    }

    switchMode() {
        this.powerSavingMode = !this.powerSavingMode;
        this.isPowerSavingActive() ? this.MAXIMUMTEMPERATURE = 25 : this.MAXIMUMTEMPERATURE = 32;
    }

    resetTemperature() {
        this.temperature = 20;
    }
 }

module.exports = Thermostat