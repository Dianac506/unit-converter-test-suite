# ADR 002: Automated Unit Testing with Vitest

## Status

Accepted

## Context

The Unit Converter application performs mathematical conversions
across five measurement categories: Length, Weight, Temperature,
Volume, and Time.

The primary quality attribute selected for this project is
Testability.

The application requires a reliable mechanism to verify conversion
accuracy, input validation, and boundary conditions independently
from the user interface.

Manual testing alone would be time-consuming, difficult to reproduce,
and insufficient to measure code coverage.

## Decision

The project adopts Vitest as its automated unit testing framework
and uses V8 to measure code coverage.

The conversion logic is tested independently through the
converter.test.js file, without requiring a web browser or
user interface interaction.

GitHub Actions is used to automate test execution and coverage
report generation whenever changes are pushed to the repository.

The minimum code coverage threshold is configured at 80% for:

- Statements
- Branches
- Functions
- Lines

## Alternatives Considered

### Manual Testing

Manual testing allows direct verification of the user interface.

However, it requires repeated human interaction, is less
reproducible, and does not provide automated code coverage metrics.

### Jest

Jest is a widely used JavaScript testing framework.

However, Vitest was selected for its straightforward configuration,
support for modern JavaScript modules, and integrated coverage
capabilities.

### Vitest

Vitest provides automated test execution, fast feedback,
and measurable code coverage with minimal configuration.

It supports the project's modular architecture and enables
independent testing of the core conversion logic.

## Consequences

### Positive Consequences

- Conversion logic can be tested independently.
- Automated tests provide consistent and reproducible results.
- Regression errors can be detected when code changes.
- Code coverage provides measurable evidence of test execution.
- GitHub Actions reduces manual testing effort.
- The architecture supports maintainability and testability.

### Negative Consequences

- Additional development dependencies are required.
- Test cases must be maintained when functionality changes.
- Automated tests require initial configuration.
- High code coverage does not guarantee the absence of defects.

## Quality Attribute Impact

This decision directly supports Testability by enabling
isolated, automated, repeatable, and measurable verification
of the application's core functionality.

## Validation and Evidence

The automated testing workflow successfully executed 29 unit tests.

The following coverage results were achieved for converter.js:

| Metric | Minimum Required | Actual Result |
| --- | --- | --- |
| Statements | 80% | 100% (102/102) |
| Branches | 80% | 100% (29/29) |
| Functions | 80% | 100% (3/3) |
| Lines | 80% | 100% (102/102) |

All 29 automated tests passed successfully.

GitHub Actions completed the testing and coverage workflow
successfully and generated a downloadable code coverage report.

These results demonstrate that the core conversion module
exceeds the established code coverage thresholds.

The reported coverage applies specifically to converter.js,
rather than the entire user interface.

## Related Architecture Decisions

- [ADR 001: Separation of Concerns](001-separation-of-concerns.md)
- [Software Architecture Documentation](../architecture.md)
