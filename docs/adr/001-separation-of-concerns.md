# ADR 001: Separation of Concerns

## Status

Accepted

## Context

The Unit Converter application supports five measurement categories:
Length, Weight, Temperature, Volume, and Time.

The primary quality attribute selected for this project is Testability.
The application must allow conversion calculations to be tested
independently from the user interface.

Combining presentation, user interaction, and conversion logic in a
single file would increase coupling and make isolated testing more
difficult.

## Decision

The application adopts a modular architecture based on the
Separation of Concerns principle.

Responsibilities are distributed across the following files:

- index.html: Defines the user interface structure.
- styles.css: Handles visual presentation and responsive design.
- app.js: Manages user interactions and updates the interface.
- converter.js: Contains the independent unit conversion logic.
- converter.test.js: Contains automated unit tests.

The conversion logic is separated from browser-specific user
interface operations so that it can be tested independently.

## Alternatives Considered

### Alternative 1: Monolithic Implementation

Combine HTML, CSS, JavaScript, and conversion logic in a single file.

Advantages:
- Simple initial implementation.
- Fewer files to manage.

Disadvantages:
- Increased coupling.
- More difficult unit testing.
- Reduced maintainability.

### Alternative 2: Modular Architecture

Separate presentation, user interaction, and business logic.

Advantages:
- Independent unit testing.
- Improved maintainability.
- Clear component responsibilities.
- Easier debugging and future extensions.

Disadvantages:
- Requires additional files.
- Requires coordination between modules.

## Consequences

The selected architecture improves modularity, maintainability,
and testability.

The conversion module can be tested without interacting with
the browser interface.

Additional coordination between components is required, but
the benefits outweigh the added structural complexity.

## Quality Attribute Impact

Primary: Testability

Secondary: Maintainability and Modifiability

## Validation

The automated test suite successfully executed 29 tests.

The converter.js module achieved:

- Statement coverage: 100%
- Branch coverage: 100%
- Function coverage: 100%
- Line coverage: 100%

These results demonstrate that the core conversion logic can be
tested independently and exceeds the configured minimum coverage
threshold of 80%.

The coverage results apply specifically to converter.js, not to
the entire application.
