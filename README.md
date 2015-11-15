# Rails::Fort

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

To use this gem add this require statement to your application.js file:

	//= require fort

and in application.css file

	*= require fort


## Usage

Place `<div class="form">` before your form.All `<input>` inside form will be taken in account.

Example

	<div class="form">
	  <form method="post">
	    <input type="text">
	  </form>
	</div>

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


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ethirajsrinivasan/rails-fort. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

##Thanks

Thanks to [Idris Khenchil](https://github.com/idriskhenchil/Fort.js) for writing an awesome fort plugin.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

