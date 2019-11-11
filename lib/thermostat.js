'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.MINIMUMTEMPERATURE = 10;
    }

    getCurrentTemperature() {
        return this.temperature
    }

    up() {
        this.temperature += 1;
    }

    down() {
        this.isMinimumTemperature() ? this.temperature : this.temperature -= 1;
    }

    isMinimumTemperature() {
        return this.temperature == this.MINIMUMTEMPERATURE
    }
}

module.exports = Thermostat