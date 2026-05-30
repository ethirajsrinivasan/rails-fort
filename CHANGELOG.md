# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-30

### ⚠️ Breaking Changes

- **BREAKING**: Updated minimum Ruby version from 2.7 to 3.0
  - Ruby 2.7 reached EOL in March 2023
- **BREAKING**: Updated minimum Rails version from 4.2 to 6.0
  - Rails 4.2 reached EOL years ago
  - Now supports Rails 6.0, 6.1, 7.0, 7.1, 7.2, and 8.0

### Added

- Added explicit `railties` runtime dependency (>= 6.0, < 9.0)
- Added comprehensive CHANGELOG file
- Added detailed UPGRADE_GUIDE.md for migration assistance
- Added GitHub Actions CI workflow (.github/workflows/ci.yml) replacing Travis CI
- Added RuboCop configuration and linting in CI
- Added bundler-audit security scanning in CI
- Added RSpec test suite
- Added gem metadata for better RubyGems.org integration:
  - Changelog URI
  - Bug tracker URI
  - Documentation URI
  - Source code URI
  - MFA requirement

### Changed

- Updated development dependencies to use semantic versioning:
  - bundler ~> 2.4 (was >= 2.4)
  - rake ~> 13.0 (was >= 13.0)
  - rspec ~> 3.12 (was >= 3.12)
- Updated README.md with modern Rails asset pipeline instructions:
  - Sprockets configuration
  - Import Maps setup (Rails 7+)
  - Webpacker/Shakapacker notes
- Removed .travis.yml (Travis CI no longer supports free open source)
- Improved .gitignore with additional patterns

### Documentation

- Comprehensive upgrade guide for migrating from 0.x to 1.0
- Modern asset pipeline setup instructions
- Troubleshooting section
- Compatibility matrix for Ruby and Rails versions
- jQuery dependency documentation

### Notes

- All existing functionality preserved
- Configuration files (config/fort.yml) remain unchanged
- JavaScript API unchanged
- All effect types still supported (solid, gradient, sections, flash, merge)

## [0.2.0] - Previous Release

### Features

- Modern progress bar for form completion
- Multiple effect types: solid, gradient, sections, flash, merge
- Configurable via fort.yml
- Automatic form field detection
- Field exclusion via 'ignore' class
- Integration with Rails asset pipeline

---

For upgrade instructions, see [UPGRADE_GUIDE.md](UPGRADE_GUIDE.md)
