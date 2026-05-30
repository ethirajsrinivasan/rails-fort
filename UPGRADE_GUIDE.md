# Upgrade Guide: Rails-Fort 0.x to 1.0

## Overview

Rails-Fort 1.0 modernizes the gem to work with current Ruby and Rails versions. This guide will help you upgrade smoothly.

## What Changed

### Version Requirements

| Component | Old Version | New Version | Reason |
|-----------|-------------|-------------|--------|
| Ruby | >= 2.7 | >= 3.0 | Ruby 2.7 EOL (March 2023) |
| Rails | >= 4.2 | >= 6.0 | Rails 4.2 EOL (2017-2019) |

### New Features

- ✅ Support for Rails 6.x, 7.x, and 8.x
- ✅ GitHub Actions CI workflow
- ✅ Updated documentation for modern asset pipelines
- ✅ Import Maps support documentation
- ✅ Explicit railties dependency

## Pre-Upgrade Checklist

Before upgrading, ensure:

- [ ] Your application runs Ruby 3.0 or higher
- [ ] Your application runs Rails 6.0 or higher
- [ ] You have a backup or version control
- [ ] Your test suite passes

## Upgrade Steps

### 1. Update Your Gemfile

```ruby
# Old
gem 'rails-fort'

# New
gem 'rails-fort', '~> 1.0'
```

### 2. Install the Updated Gem

```bash
bundle update rails-fort
```

### 3. Update Asset Configuration (if needed)

#### For Sprockets (Rails 6.x / 7.x)

No changes needed if you already have:

```javascript
//= require rails_fort
```

#### For Import Maps (Rails 7+)

Add to `config/importmap.rb`:

```ruby
pin "rails_fort", to: "rails_fort.js"
```

Import in `application.js`:

```javascript
import "rails_fort"
```

### 4. Verify jQuery is Loaded

Rails-Fort requires jQuery. Ensure it's loaded before rails_fort:

**Sprockets:**
```javascript
//= require jquery
//= require rails_fort
```

**Import Maps:**
```ruby
# config/importmap.rb
pin "jquery", to: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"
pin "rails_fort", to: "rails_fort.js"
```

### 5. Test Your Forms

1. Start your Rails server
2. Navigate to pages with forms
3. Verify the progress bar appears and updates correctly
4. Test all form effect types if you use custom configurations

## Configuration

Your existing `config/fort.yml` configuration file continues to work without changes:

```yaml
height: '20px'
duration: '3s'
alignment: 'bottom'
type: 'solid'
value: '#009DFF'
```

## Troubleshooting

### Progress Bar Not Appearing

**Issue**: The progress bar doesn't show up on forms.

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify jQuery is loaded before rails_fort
3. Ensure the asset is properly included in your asset pipeline
4. Check that forms are present on the page

### Asset Not Found

**Issue**: `rails_fort.js` not found error.

**Solutions**:
1. Run `bundle exec rails assets:precompile` in production
2. Restart your Rails server in development
3. Clear your browser cache
4. Verify the gem is properly installed: `bundle list | grep rails-fort`

### Import Maps Issues (Rails 7+)

**Issue**: Module not found when using Import Maps.

**Solutions**:
1. Ensure you've added the pin to `config/importmap.rb`
2. Run `bin/importmap pin rails_fort`
3. Check that jQuery is also pinned and imported first

## Rolling Back

If you need to roll back to the previous version:

```ruby
# Gemfile
gem 'rails-fort', '~> 0.2.0'
```

Then run:
```bash
bundle update rails-fort
```

**Note**: Version 0.2.0 only supports Ruby 2.7 and Rails 4.2+, which are no longer maintained.

## Getting Help

- **Issues**: [GitHub Issues](https://github.com/ethirajsrinivasan/rails-fort/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ethirajsrinivasan/rails-fort/discussions)
- **Security**: Email ethirajsrinivasan@gmail.com for security concerns

## Additional Resources

- [CHANGELOG.md](CHANGELOG.md) - Detailed list of changes
- [README.md](README.md) - Full documentation
- [Ruby Upgrade Guide](https://www.ruby-lang.org/en/downloads/)
- [Rails Upgrade Guide](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html)
