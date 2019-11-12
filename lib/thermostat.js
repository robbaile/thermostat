'use strict';

class Thermostat {
    constructor() {
        this.MINIMUMTEMPERATURE = 10;
        this.MAXIMUMTEMPERATURE = 25;
        this.DEFAULTTEMPERATURE = 20;
        this.temperature = this.DEFAULTTEMPERATURE;
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
        this.isPowerSavingActive() && this.temperature > this.MAXIMUMTEMPERATURE ? this.temperature = 25 : this.temperature; 
    }

    resetTemperature() {
        this.temperature = this.DEFAULTTEMPERATURE;
    }

    energyUsage() {
        if (this.temperature < 18) {
            return 'low-usage';
          }
          if (this.temperature >= 18 && this.temperature <= 25) {
            return 'medium-usage';
          }
          return 'high-usage';
        }
 }

module.exports = Thermostat