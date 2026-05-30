# Rails::Fort

[![CI](https://github.com/ethirajsrinivasan/rails-fort/actions/workflows/ci.yml/badge.svg)](https://github.com/ethirajsrinivasan/rails-fort/actions/workflows/ci.yml)
[![Gem Version](https://badge.fury.io/rb/rails-fort.svg)](https://badge.fury.io/rb/rails-fort)

Modern progress bar for form completion

## Requirements

- Ruby >= 3.0
- Rails >= 6.0

## Information

rails-fort gem gives you modern progress bar for form completion

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'rails-fort'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install rails-fort

### Asset Pipeline Setup

**For Rails 6.x / 7.x with Sprockets:**

Add this require statement to your `application.js` file:

```javascript
//= require rails_fort
```

**For Rails 7+ with Import Maps:**

Add to your `config/importmap.rb`:

```ruby
pin "rails_fort", to: "rails_fort.js"
```

Then import in your `application.js`:

```javascript
import "rails_fort"
```

**For Rails with Webpacker/Shakapacker:**

The gem works with the asset pipeline. If using Webpacker, you may need to configure it to load from the gem's assets directory.

**Note:** This gem requires jQuery. Make sure jQuery is loaded before rails_fort.

## Usage

rails-fort will automatically detect all `<input>` inside form

Certain fields:

If you want to exclude certain fields add a class named 'ignore' to the field. rails-fort will not detect the field after you do so.

Example

		<input type="text" class='ignore'>


You can also set default configuration in fort.yml under config folder, example

	height: '20px'
	duration: '3s'
	alignment: 'bottom'
	type: 'solid'
	value: '#009DFF'


Effects:

   * Solid

      	type: 'solid'
     	value: '#009DFF'

   * Gradient

	   	type: 'gradient'
	   	value: ["#009DFF", "#47B9FF"]

	   	Note: Only two values can be passed

   * Sections

   		type: 'sections'
   		value: ["#009DFF", "#4AF2A1", "#FB5229"]

   * Flash

   		type: 'flash'
   		value: ["#009DFF", "#000", "#6638F0"]

   * Merge

   		type: 'merge'
   		value: '#009DFF'

effects can be added by changing type and value fields in fort.yml

## Upgrading from 0.x to 1.0

Version 1.0.0 introduces breaking changes to support modern Ruby and Rails versions:

### Breaking Changes

- **Ruby**: Minimum version increased from 2.7 to 3.0
- **Rails**: Minimum version increased from 4.2 to 6.0

### Migration Steps

1. Ensure your application is running Ruby 3.0+ and Rails 6.0+
2. Update your Gemfile: `gem 'rails-fort', '~> 1.0'`
3. Run `bundle update rails-fort`
4. If using Rails 7+ with Import Maps, follow the new installation instructions above
5. Test your forms to ensure the progress bar still works as expected

See [UPGRADE_GUIDE.md](UPGRADE_GUIDE.md) for detailed migration instructions.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ethirajsrinivasan/rails-fort. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](CODE_OF_CONDUCT.md) code of conduct.

## Thanks

Thanks to [Idris Khenchil](https://github.com/idriskhenchil/Fort.js) for writing an awesome fort plugin.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
