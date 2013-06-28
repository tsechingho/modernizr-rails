# Modernizr for rails asset pipeline

[Modernizr](https://github.com/Modernizr/Modernizr) is a JavaScript library allowing you to use CSS3 & HTML5 while maintaining control over unsupported browsers.

The `modernizr_rails` gem integrates the `Modernizr` with the Rails asset pipeline.

## Installation

Add this line to your application's Gemfile:

    gem 'modernizr_rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install modernizr_rails

## Usage

There is two ways to use this gem. If you don't know which feature you'll need to test, add this line to your `app/assets/javascripts/application.js` to compile as a part of application.js

    // Load all Modernizr javascripts
    //= require modernizr

Or use the precompiled standalone javascript file by include it in your layout, like `app/views/layouts/application.html.erb`

    <%= javascript_include_tag 'modernizr' %>

This will load all test scripts, including the `Modernizr.load` conditional script loader, based on [yepnope.js](https://github.com/SlexAxton/yepnope.js).

If you already know which feature you need to test and don't want to load all these javascript files, you can load individual Modernizr javascript :

	//= require modernizr-canvas
	//= require modernizr-fontface
	//= require modernizrtextshadow

This will also load the `Modernizr.load` conditional script loader.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Modernizr is available under the [MIT licenses](http://www.modernizr.com/license/).

Other parts of gem use MIT license.
