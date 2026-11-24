
# ADR 003: Continuous Integration and Code Coverage Enforcement

## Status

Accepted

## Context

The primary quality attribute of the Unit Converter application
is Testability.

As the application evolves, changes to the conversion logic
may introduce errors or affect existing functionality.

Manual testing alone would require additional effort and could
result in inconsistent verification of the application.

The project requires automated unit testing with a minimum
code coverage target of 80%.

Therefore, a consistent and automated testing process is
necessary to verify the conversion logic and detect regressions.

## Options Considered

### Option 1: Manual Testing

Test the application manually through the web browser.

Advantages:
- Simple to perform.
- No additional configuration required.

Disadvantages:
- Time-consuming and repetitive.
- Difficult to reproduce consistently.
- Does not automatically measure code coverage.

### Option 2: Local Automated Testing

Execute automated tests locally using Vitest.

Advantages:
- Fast execution.
- Supports repeatable testing.
- Provides code coverage measurements.

Disadvantages:
- Depends on the developer remembering to run the tests.
- Does not automatically verify changes pushed to GitHub.

### Option 3: Continuous Integration with GitHub Actions

Configure GitHub Actions to automatically execute unit tests
and generate code coverage reports when changes are pushed
to the repository.

Advantages:
- Automated and repeatable verification.
- Early detection of software regressions.
- Consistent enforcement of coverage requirements.
- Accessible test results and coverage reports.

Disadvantages:
- Requires initial workflow configuration.
- Depends on GitHub Actions availability.
- Requires maintenance of workflow dependencies.

## Decision

The project adopts Option 3: Continuous Integration with
GitHub Actions, combined with Vitest for automated unit testing.

The workflow is defined in:

.github/workflows/tests.yml

The continuous integration workflow performs the following steps:

1. Checks out the GitHub repository.
2. Configures the Node.js environment.
3. Installs project dependencies.
4. Executes automated unit tests.
5. Generates a code coverage report.
6. Verifies the minimum coverage threshold of 80%.
7. Uploads the coverage report as a workflow artifact.

The coverage threshold applies to the independent conversion
logic module, converter.js.

The workflow fails if automated tests fail or if coverage
falls below the configured threshold.

## Architectural Tactics

The following tactics support the Testability quality attribute:

- Automated Testing: Executes repeatable tests without manual
  intervention.

- Continuous Integration: Automatically verifies changes
  pushed to the repository.

- Test Isolation: Tests the conversion logic independently
  from the user interface.

- Coverage Enforcement: Establishes measurable minimum
  requirements for statements, branches, functions, and lines.

- Observability: Provides accessible test execution logs
  and code coverage reports.

## Consequences

### Positive Consequences

- Improved confidence in the conversion logic.
- Earlier detection of software defects.
- Reduced manual testing effort.
- Consistent and measurable quality verification.
- Improved maintainability and regression testing.
- Documented evidence of the selected quality attribute.

### Negative Consequences

- Additional configuration and maintenance are required.
- Automated testing depends on external CI infrastructure.
- High code coverage does not guarantee the absence of defects.
- Unit tests do not replace user interface or usability testing.

## Evaluation and Evidence

The GitHub Actions workflow successfully executed the automated
test suite and generated the following results:

| Metric | Target | Actual Result |
| --- | --- | --- |
| Automated Tests | All tests pass | 29/29 passed |
| Statement Coverage | 80% | 100% (102/102) |
| Branch Coverage | 80% | 100% (29/29) |
| Function Coverage | 80% | 100% (3/3) |
| Line Coverage | 80% | 100% (102/102) |

The conversion logic exceeded the required coverage target
by 20 percentage points across all four coverage metrics.

These results apply specifically to converter.js and do not
represent complete coverage of the user interface.

## Conclusion

Continuous integration provides a practical and measurable
approach to maintaining software quality throughout the
development process.

By combining automated unit testing, independent conversion
logic, and coverage enforcement, the architecture supports
consistent verification and early detection of regressions.

The successful execution of all 29 tests and the achievement
of 100% coverage for the conversion module demonstrate that
the selected architectural decision supports the project's
primary quality attribute of Testability.
