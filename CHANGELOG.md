# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.1] - 2019-10-20
### Fixed
- Set mode to be production on build so index file size shrinks by about 20%

## [1.3.0] - 2019-09-29
### Added
- Can pass count, as well as allowShortenedWords, ellipsis, text, and truncatedBy in each breakpoint to override the base props when present.

### Changed
- More complete null/value checks in lib
- Full test coverage on lib

### Fixed
- Update version of handlebars package flagged as npm vulnerability

## [1.2.0] - 2019-09-28
### Added
- Ellipsis prop to change what follows the truncated text. Will default to '...', original ellipsis.

## [1.1.0] - 2019-09-25
### Added
- Optional prop, allowShortenedWords, defaults to true. Passing false when truncating by characters will make it so no words are cut in order to stay within character count of truncation.

## [1.0.0] - 2019-09-22
### Added
- Add test for using MUI Hidden components

### Changed
- Instead of using a gridCount prop object for different MUI breakpoint counts, have an optional breakpoints prop object with each breakpoint name as an option object to override all other props when at that breakpoint size

### Fixed
- Add linting to mocha tests and run fix on tests

## [0.0.15] - 2019-09-15
### Fixed
- Issues with ESLint and React and unneccessary boolean cast

## [0.0.14] - 2019-09-14
### Fixed
- README spelling error

## [0.0.13] - 2019-09-14
### Changed
- README examples line lenght to be under 80 characters

## [0.0.12] - 2019-09-14
### Added
- NYC test coverage report for mocha tests
- ESLint with standard extension
- Badges for NPM and ESLint

### Changed
- Parameter order of text trimming function so it goes; text, count, truncate by
- Code styling as per new ESLint settings

### Fixed
- Additional ellipsis being added to text in component

### Removed
- StandardJS as linter/formatter command

## [0.0.11] - 2019-09-13
### Added
- StandardJS library for linting/formatting
- More descriptive examples to README

### Changed
- Updated readme with description and correct syntax
- Update NPM packages to latest versions

## [0.0.10] - 2019-09-10
### Removed
- Generated module from git source control

## [0.0.9] - 2019-09-09
### Added
- Tests for words truncation/ellipsis

### Fixed
- Logic to apply truncation based on truncateBy prop

## [0.0.8] - 2019-09-09
### Changed
- Only adding ellipsis if text was truncated

## Fixed
- When not using MUI counts, correctly passing count to function that truncates text
- Spelling on README

## [0.0.7] - 2019-09-09
### Added
- New feature that allows truncation by character (default) or words
- Description of props in README

## [0.0.6] - 2019-09-09
### Added
- Add test for new lib function for removing value from array

### Fixed
- Hidden MUI now implemented correctly with array of breakpoints it should be hidden at

## [0.0.5] - 2019-09-08
### Added
- Add feature of using Material UI breakpoints changing components text count
- Add test for new lib function

### Changed
- Moved function for determining when to display text to own lib

## [0.0.4] - 2019-09-08
### Added
- Add whitelist of files to be include in module in package.json

### Changed
- Organize package.json to be alphabetical order

## [0.0.3] - 2019-09-08
### Added
- Added module to root directory

## [0.0.2] - 2019-09-08
### Added
- NPM packages to support testing; jest, enzyme, mocha, chai, jsdom
- Simple test for checking rendering of component

### Changed
- Component will not render if no text prop is falsy
- Babel plugins to use scoped package instead of outdated non-scoped package

## [0.0.1] - 2019-09-07
### Added
- Simple component using React adding '...' to the end of a text
- Git repository and associated files for source control
- NPM set up and Webpack build configuration
- Basic README, CHANGELOG, and LICENSE
