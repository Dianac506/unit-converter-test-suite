# Unit Converter with Test Suite

![Automated Tests](https://github.com/Dianac506/unit-converter-test-suite/actions/workflows/tests.yml/badge.svg)
![Coverage](https://img.shields.io/badge/Core%20Module%20Coverage-100%25-brightgreen)
![Tests](https://img.shields.io/badge/Tests-29%20Passed-brightgreen)

## Project Information

- **Student:** Diana Carolina Salgado Ortiz
- **University:** Bay Atlantic University
- **Course:** CMPS 570 - Software Architecture
- **Project:** Unit Converter with Test Suite
- **Primary Quality Attribute:** Testability

## 1. Project Overview

The Unit Converter is a client-side web application that allows fast, simple and accurate conversion of measurements.

This project demonstrates the influence of software architecture decisions on testability. A modular design, the Separation of Concerns principle, automated unit tests, continuous integration and code coverage are used here.

## 2. Live Application

The application is publicly available through GitHub Pages.

[Launch Unit Converter](https://dianac506.github.io/unit-converter-test-suite/)

## 3. Features

- Length conversions
- Weight conversions
- Temperature conversions
- Volume conversions
- Time conversions
- Real-time conversion results
- Input validation
- Responsive user interface
- Automated unit testing
- Automated code coverage reporting

## 4. Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | User interface structure |
| CSS3 | Visual presentation and responsive design |
| JavaScript | Application and conversion logic |
| Node.js | Testing environment |
| Vitest | Automated unit testing |
| V8 | Code coverage measurement |
| GitHub Actions | Continuous integration |
| GitHub Pages | Application deployment |
| Mermaid | Architecture diagrams |

## 5. Software Architecture

This project uses a modular architecture for the presentation, interaction and conversion code using the Separation of Concerns principle.

The presentation layer, user interaction layer and core conversion logic are all written as separate modules to make it easier to maintain and test the code.

Testing of the conversion module is now possible without having to set up a browser.

### Architecture Documentation

- [Software Architecture and Diagrams](docs/architecture.md)
- [ADR 001: Separation of Concerns](docs/adr/001-separation-of-concerns.md)
- [ADR 002: Automated Unit Testing](docs/adr/002-automated-unit-testing.md)
- [ADR 003: Continuous Integration](docs/adr/003-continuous-integration.md)

The architecture documentation includes:

1. System Context Diagram
2. Component Diagram
3. Sequence Diagram
4. Deployment Diagram
   
## 6. Repository Structure

```
unit-converter-test-suite/
|
|-- .github/
|   |-- workflows/
|       |-- tests.yml
|
|-- docs/
|   |-- architecture.md
|   |-- adr/
|       |-- 001-separation-of-concerns.md
|       |-- 002-automated-unit-testing.md
|   |   |-- 003-continuous-integration.md
|
|-- index.html
|-- styles.css
|-- app.js
|-- converter.js
|-- converter.test.js
|-- package.json
|-- README.md
```

## 7. Quality Attribute: Testability

Testability is the primary quality attribute selected
for this project.

The architecture supports testability through:

- Separation of concerns
- Independent conversion logic
- Automated unit testing
- Input validation testing
- Repeatable test execution
- Continuous integration
- Measurable code coverage

The minimum code coverage threshold is configured at
80% for statements, branches, functions, and lines.

## 8. Automated Testing Results

The project uses Vitest to verify the core conversion logic.

A total of 29 automated unit tests passed successfully.

| Test Metric | Result |
| --- | --- |
| Total tests | 29 |
| Passed tests | 29 |
| Failed tests | 0 |
| Test success rate | 100% |

## 9. Code Coverage Results

The following results were obtained for converter.js:

| Metric | Required | Achieved |
| --- | --- | --- |
| Statements | 80% | 100% (102/102) |
| Branches | 80% | 100% (29/29) |
| Functions | 80% | 100% (3/3) |
| Lines | 80% | 100% (102/102) |

All configured coverage thresholds were exceeded
by 20 percentage points.

These coverage results apply specifically to the core
conversion module, converter.js, and not to the entire
application or user interface.

## 10. Continuous Integration

GitHub Actions automatically performs the following steps:

1. Checks out the repository.
2. Sets up the Node.js environment.
3. Installs project dependencies.
4. Executes automated unit tests.
5. Generates the code coverage report.
6. Uploads the coverage report as a downloadable artifact.

The automated workflow completed successfully.

[View GitHub Actions Results](https://github.com/Dianac506/unit-converter-test-suite/actions)

## 11. Installation and Execution

### Clone the repository

```bash
git clone https://github.com/Dianac506/unit-converter-test-suite.git
cd unit-converter-test-suite
```

### Install dependencies

```bash
npm install
```

### Run automated tests

```bash
npm test
```

### Generate code coverage

```bash
npm run coverage
```

### Access the application

Use the publicly deployed GitHub Pages application.

## 12. Manual Functional Verification

The following conversions were verified through
the application's user interface:

| Category | Input | Expected Result | Status |
| --- | --- | --- | --- |
| Length | 1000 meters | 1 kilometer | Passed |
| Weight | 1 kilogram | 1000 grams | Passed |
| Temperature | 100 Celsius | 212 Fahrenheit | Passed |
| Volume | 1 liter | 1000 milliliters | Passed |
| Time | 2 hours | 120 minutes | Passed |

## 13. Conclusion
The Unit Converter with Test Suite was an important piece of software for me to develop in order to understand the roles of software architecture in assuring the quality, ensuring the reliability, and making maintenance easier of software.

Just as testability is not only writing a lot of tests, it also has a lot to do with how an application is architected and how individual components of the application can be tested independently in an efficient manner to ensure that they are working correctly.

By Separating out Concerns, automatically testing out individual units of work, and having ongoing integration testing, I was able to get 100% coverage of the core code for the conversion, above the minimum 80% for the project.

It really is easy to design software with quality attributes in mind if you start designing software from the start of your development process.

Even though the tool presented here is small, it contains all the same architectural principles, that you would use for any larger project as well.

In the future it would be great to add more conversion types (e.g. Unit conversion, Date conversion, etc…). Also automate tests for the UI as well as implement some accessibility tests.

The deployment architecture supports Testability by separating
the production execution environment from the automated
testing environment.

The conversion logic can be tested independently without
launching a web browser or deploying the application.

GitHub Actions automatically executes the test suite and
verifies the minimum code coverage threshold of 80%.

The application does not require a backend server or database,
reducing infrastructure complexity and external dependencies.

The successful execution of 29 automated tests and 100%
code coverage of converter.js demonstrates the effectiveness
of the independent testing environment.

This only applies to the conversion logic module in the converter.js file.
This does not cover all the UI in the application, only the conversion logic in converter.js.

---

Developed by Diana Carolina Salgado Ortiz

Bay Atlantic University

CMPS 570 - Software Architecture

November 2026
