# Upgrade Guide: Rails-Fort 0.x to 2.0.0

## Overview

Rails-Fort **2.0.0** is the first modern release on RubyGems. Version **1.0.0** was never published. This release combines Ruby/Rails modernization with a **rewritten JavaScript engine** while keeping the same `config/fort.yml` format.

## What Changed

### Ruby & Rails

| Component | 0.x | 2.0.0 |
|-----------|-----|-------|
| Ruby | >= 2.7 (varied) | >= 3.0 |
| Rails | >= 4.2 | >= 6.0 |

### JavaScript

| Topic | 0.x | 2.0.0 |
|-------|-----|-------|
| jQuery | Required | **Not required** |
| Implementation | Vendored legacy `fort.min.js` | New `fort.js` (`FortProgress`) |
| CSS | Bundled minified vendor file | `*= require fort` in your stylesheet manifest |
| DOM behavior | Rewrote `document.body` innerHTML | Inserts progress bar elements only |
| Ignore class | `ignore` | `ignore` or `fort-ignore` |
| Upstream repo | idriskhenchil/Fort.js (now 404) | Maintained in this gem |

### Unchanged

- `config/fort.yml` keys: `height`, `duration`, `alignment`, `type`, `value`
- Effect types: `solid`, `gradient`, `sections`, `flash`, `merge`
- `//= require rails_fort` in `application.js`

## Upgrade Steps

### 1. Update Gemfile

```ruby
gem 'rails-fort', '~> 2.0'
```

```bash
bundle update rails-fort
```

### 2. Add stylesheet (new in 2.0)

In `app/assets/stylesheets/application.css` (or equivalent):

```css
*= require fort
```

### 3. Remove jQuery requirement

You no longer need jQuery for rails-fort. Remove any comment or load order that existed only for this gem.

### 4. Keep `config/fort.yml`

Existing configuration should work as-is, for example:

```yaml
height: '20px'
duration: '3s'
alignment: 'bottom'
type: 'solid'
value: '#009DFF'
```

### 5. Test your forms

1. Load a page with a form
2. Confirm the progress bar appears (top or bottom per `alignment`)
3. Fill fields and verify width/color effects
4. Confirm fields with class `ignore` are skipped

## Troubleshooting

### Progress bar not visible

- Ensure **both** JS and CSS are included (`rails_fort` + `fort` stylesheet)
- Check the browser console for errors
- Verify `config/fort.yml` is valid YAML

### Custom CSS targeting old markup

2.0 still applies `.top-one` and `.top-two` on bar elements for compatibility. Prefer `.fort-bar` for new custom styles.

### Turbo / Turbolinks

Re-initialize on page change if needed:

```javascript
document.addEventListener("turbo:load", function () {
  if (window._railsFortInstance) {
    window._railsFortInstance.destroy();
    window._railsFortInstance = new FortProgress(/* your config */);
    window._railsFortInstance.init();
  }
});
```

For Sprockets-only apps, a full page load re-runs `rails_fort.js.erb` automatically.

## Getting Help

- [GitHub Issues](https://github.com/ethirajsrinivasan/rails-fort/issues)
- [CHANGELOG.md](CHANGELOG.md)
