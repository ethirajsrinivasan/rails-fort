# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-05-30

First published modern release (1.0.0 was never released to RubyGems).

### Added

- New vanilla JavaScript implementation (`fort.js`) — no jQuery, no `document.body` rewriting
- `fort.css` as a first-class stylesheet (include via `*= require fort`)
- Support for `fort-ignore` class in addition to `ignore`
- Accessible progress bar attributes (`role="progressbar"`, `aria-*`)
- Explicit `railties` runtime dependency (>= 6.0, < 9.0)
- GitHub Actions CI, RuboCop, bundler-audit, RSpec
- CHANGELOG, UPGRADE_GUIDE, and modern README

### Changed

- **Breaking (JS):** Replaced legacy vendored `fort.min.js` with `FortProgress` class
- **Breaking (Ruby):** Minimum Ruby 3.0, Rails 6.0+
- `config/fort.yml` format unchanged (`type`, `value`, `height`, `duration`, `alignment`)
- Progress bar DOM uses `.fort-bar` (legacy `.top-one` / `.top-two` classes retained in CSS for compatibility)

### Removed

- jQuery dependency
- Legacy vendor `fort.min.js` and `fort.min.css`
- Travis CI

### Notes

- Original upstream Fort.js GitHub repository is unavailable; JS is maintained in this gem
- cdnjs Fort.js 2.0.0 (2016) uses a different API and is not used

## [0.2.0] - Previous Release

- jQuery-based integration with vendored Fort.js
- Form completion progress bar with `config/fort.yml`

---

For upgrade instructions, see [UPGRADE_GUIDE.md](UPGRADE_GUIDE.md)
