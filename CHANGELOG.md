# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
