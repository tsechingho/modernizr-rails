# Modernizr for rails asset pipeline

[Modernizr](https://github.com/Modernizr/Modernizr) is a JavaScript library allowing you to use CSS3 & HTML5 while maintaining control over unsupported browsers.

The `modernizr-rails` gem integrates the `Modernizr` with the Rails asset pipeline.

## Installation

Add this line to your application's Gemfile:

    gem 'modernizr-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install modernizr-rails

## Usage

Add to your `app/assets/stylesheets/application.js`

    //= require modernizr

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Gem maintainance

Maintain `modernizr-rails` gem with `Rake` commands.

Update origin modernizr source files.

    rake update-modernizr

Publish gem.

    rake release

## License

Modernizr is dual-licensed under the [BSD and MIT licenses](http://www.modernizr.com/license/).

Other parts of gem use MIT license.
