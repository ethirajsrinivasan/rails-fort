# Rails::Fort

[![CI](https://github.com/ethirajsrinivasan/rails-fort/actions/workflows/ci.yml/badge.svg)](https://github.com/ethirajsrinivasan/rails-fort/actions/workflows/ci.yml)
[![Gem Version](https://badge.fury.io/rb/rails-fort.svg)](https://badge.fury.io/rb/rails-fort)

Modern progress bar for form completion

## Requirements

- Ruby >= 3.0
- Rails >= 6.0
- No jQuery required

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'rails-fort', '~> 1.0'
```

And then execute:

```bash
bundle install
```

### Asset Pipeline Setup

**For Rails 6.x / 7.x with Sprockets:**

In `app/assets/javascripts/application.js`:

```javascript
//= require rails_fort
```

In `app/assets/stylesheets/application.css`:

```css
*= require fort
```

**For Rails 7+ with Import Maps:**

Add to `config/importmap.rb`:

```ruby
pin "rails_fort", to: "rails_fort.js"
pin "fort", to: "fort.js"
```

Import in `application.js`:

```javascript
import "rails_fort"
```

Include `fort.css` through your stylesheet pipeline or asset host.

## Usage

Rails-Fort tracks `input`, `textarea`, and `select` fields inside forms and shows a fixed progress bar as the user completes the form.

### Exclude fields

Add `ignore` or `fort-ignore` to skip a field:

```html
<input type="text" class="ignore">
```

### Configuration (`config/fort.yml`)

```yaml
height: '20px'
duration: '3s'
alignment: 'bottom'
type: 'solid'
value: '#009DFF'
```

### Effects

**Solid**

```yaml
type: 'solid'
value: '#009DFF'
```

**Gradient** (two colors)

```yaml
type: 'gradient'
value: ['#009DFF', '#47B9FF']
```

**Sections**

```yaml
type: 'sections'
value: ['#009DFF', '#4AF2A1', '#FB5229']
```

**Flash**

```yaml
type: 'flash'
value: ['#009DFF', '#000', '#6638F0']
```

**Merge**

```yaml
type: 'merge'
value: '#009DFF'
```

## Upgrading

Upgrading from the legacy **0.x** gem? See [UPGRADE_GUIDE.md](UPGRADE_GUIDE.md) for **1.0.0**.

## JavaScript

The progress bar is implemented in vanilla JavaScript (`app/assets/javascripts/fort.js`) and vendored inside this gem. The original [Fort.js](https://github.com/idriskhenchil/Fort.js) repository by Idris Khenchil is no longer available; this gem maintains a compatible `fort.yml` API with a new implementation.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ethirajsrinivasan/rails-fort. Contributors are expected to adhere to the [Contributor Covenant](CODE_OF_CONDUCT.md) code of conduct.

## Thanks

Thanks to Idris Khenchil for the original Fort.js form progress bar concept.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
