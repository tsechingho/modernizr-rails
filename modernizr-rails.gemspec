# -*- encoding: utf-8 -*-
require File.expand_path('../lib/modernizr-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ['Tse-Ching Ho']
  gem.email         = ['tsechingho@gmail.com']
  gem.description   = %q{Modernizr is a JavaScript library allowing you to use CSS3 & HTML5 while maintaining control over unsupported browsers. This gem integrates Modernizr with Rails asset pipeline for easy of use.}
  gem.summary       = %q{Integrate Modernizr javascript library with Rails asset pipeline}
  gem.homepage      = 'https://github.com/tsechingho/modernizr-rails'

  gem.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  gem.files         = `git ls-files`.split("\n")
  gem.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  gem.name          = 'modernizr_rails'
  gem.require_paths = ['lib']
  gem.version       = Modernizr::Rails::VERSION

  gem.add_dependency 'railties', '>= 3.0'
  gem.add_dependency 'thor', '~> 0.14'
end
