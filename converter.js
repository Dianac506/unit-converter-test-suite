
// Unit Converter - Independent Conversion Module
// CMPS 570 - Software Architecture
// Quality Attribute: Testability

export const units = {
    length: {
        Meters: 1,
        Kilometers: 1000,
        Centimeters: 0.01,
        Millimeters: 0.001,
        Miles: 1609.344,
        Feet: 0.3048,
        Inches: 0.0254
    },

    weight: {
        Kilograms: 1,
        Grams: 0.001,
        Milligrams: 0.000001,
        Pounds: 0.45359237,
        Ounces: 0.028349523125
    },

    temperature: {
        Celsius: 1,
        Fahrenheit: 1,
        Kelvin: 1
    },

    volume: {
        Liters: 1,
        Milliliters: 0.001,
        "US Gallons": 3.785411784,
        "US Cups": 0.2365882365
    },

    time: {
        Seconds: 1,
        Minutes: 60,
        Hours: 3600,
        Days: 86400,
        Weeks: 604800
    }
};

// Return the available units for a category
export function getUnits(category) {
    if (!Object.hasOwn(units, category)) {
        throw new Error("Invalid conversion category.");
    }

    return Object.keys(units[category]);
}

// Convert temperature using Celsius as the base unit
export function convertTemperature(value, from, to) {
    let celsius;

    switch (from) {
        case "Celsius":
            celsius = value;
            break;

        case "Fahrenheit":
            celsius = (value - 32) * 5 / 9;
            break;

        case "Kelvin":
            celsius = value - 273.15;
            break;

        default:
            throw new Error("Invalid temperature unit.");
    }

    switch (to) {
        case "Celsius":
            return celsius;

        case "Fahrenheit":
            return celsius * 9 / 5 + 32;

        case "Kelvin":
            return celsius + 273.15;

        default:
            throw new Error("Invalid temperature unit.");
    }
}

// Main conversion function
export function convert(value, category, from, to) {

    if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new Error("Please enter a valid number.");
    }

    if (!Object.hasOwn(units, category)) {
        throw new Error("Invalid conversion category.");
    }

    if (
        !Object.hasOwn(units[category], from) ||
        !Object.hasOwn(units[category], to)
    ) {
        throw new Error("Invalid conversion unit.");
    }

    if (from === to) {
        return value;
    }

    let result;

    if (category === "temperature") {
        result = convertTemperature(value, from, to);
    } else {
        const baseValue = value * units[category][from];
        result = baseValue / units[category][to];
    }

    if (!Number.isFinite(result)) {
        throw new Error("Conversion result is out of range.");
    }

    return result;
}
