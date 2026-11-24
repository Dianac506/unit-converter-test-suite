
// Unit Converter - Automated Test Suite
// CMPS 570 - Software Architecture
// Quality Attribute: Testability

import { describe, it, expect } from "vitest";
import { convert, getUnits, convertTemperature } from "./converter.js";

describe("Length conversions", () => {
    it("converts meters to kilometers", () => {
        expect(convert(1000, "length", "Meters", "Kilometers")).toBe(1);
    });

    it("converts kilometers to meters", () => {
        expect(convert(2, "length", "Kilometers", "Meters")).toBe(2000);
    });

    it("converts miles to meters", () => {
        expect(convert(1, "length", "Miles", "Meters")).toBeCloseTo(1609.344);
    });
});

describe("Weight conversions", () => {
    it("converts kilograms to grams", () => {
        expect(convert(1, "weight", "Kilograms", "Grams")).toBe(1000);
    });

    it("converts pounds to kilograms", () => {
        expect(convert(1, "weight", "Pounds", "Kilograms")).toBeCloseTo(0.45359237, 8);
    });
});

describe("Temperature conversions", () => {
    it("converts Celsius to Fahrenheit", () => {
        expect(convert(100, "temperature", "Celsius", "Fahrenheit")).toBe(212);
    });

    it("converts Fahrenheit to Celsius", () => {
        expect(convert(32, "temperature", "Fahrenheit", "Celsius")).toBe(0);
    });

    it("converts Celsius to Kelvin", () => {
        expect(convert(0, "temperature", "Celsius", "Kelvin")).toBeCloseTo(273.15);
    });

    it("converts Kelvin to Celsius", () => {
        expect(convert(273.15, "temperature", "Kelvin", "Celsius")).toBeCloseTo(0);
    });

    it("handles negative temperatures", () => {
        expect(convert(-40, "temperature", "Celsius", "Fahrenheit")).toBe(-40);
    });

    it("rejects an invalid source temperature unit", () => {
        expect(() => convertTemperature(10, "Invalid", "Celsius")).toThrow();
    });

    it("rejects an invalid target temperature unit", () => {
        expect(() => convertTemperature(10, "Celsius", "Invalid")).toThrow();
    });
});

describe("Volume conversions", () => {
    it("converts liters to milliliters", () => {
        expect(convert(1, "volume", "Liters", "Milliliters")).toBe(1000);
    });

    it("converts US gallons to liters", () => {
        expect(convert(1, "volume", "US Gallons", "Liters")).toBeCloseTo(3.785411784, 8);
    });
});

describe("Time conversions", () => {
    it("converts hours to minutes", () => {
        expect(convert(2, "time", "Hours", "Minutes")).toBe(120);
    });

    it("converts days to seconds", () => {
        expect(convert(1, "time", "Days", "Seconds")).toBe(86400);
    });
});

describe("Edge cases and validation", () => {
    it("returns the same value for identical units", () => {
        expect(convert(1, "weight", "Grams", "Grams")).toBe(1);
    });

    it("handles zero values", () => {
        expect(convert(0, "length", "Meters", "Kilometers")).toBe(0);
    });

    it("handles decimal values", () => {
        expect(convert(0.5, "weight", "Kilograms", "Grams")).toBe(500);
    });

    it("rejects non-numeric input", () => {
        expect(() => convert("abc", "length", "Meters", "Kilometers")).toThrow();
    });

    it("rejects NaN values", () => {
        expect(() => convert(NaN, "length", "Meters", "Kilometers")).toThrow();
    });

    it("rejects infinite values", () => {
        expect(() => convert(Infinity, "length", "Meters", "Kilometers")).toThrow();
    });

    it("rejects invalid categories", () => {
        expect(() => convert(1, "invalid", "Meters", "Kilometers")).toThrow();
    });

    it("rejects invalid source units", () => {
        expect(() => convert(1, "length", "Invalid", "Meters")).toThrow();
    });

    it("rejects invalid target units", () => {
        expect(() => convert(1, "length", "Meters", "Invalid")).toThrow();
    });

    it("rejects results outside the numeric range", () => {
        expect(() => convert(Number.MAX_VALUE, "length", "Kilometers", "Meters")).toThrow();
    });
});

describe("Unit selection", () => {
    it("returns available length units", () => {
        expect(getUnits("length")).toContain("Meters");
    });

    it("returns available temperature units", () => {
        expect(getUnits("temperature")).toEqual([
            "Celsius", "Fahrenheit", "Kelvin"
        ]);
    });

    it("rejects invalid unit categories", () => {
        expect(() => getUnits("invalid")).toThrow();
    });
});
