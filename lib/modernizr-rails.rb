require 'modernizr-rails/version'

module Modernizr
  module Rails
    if ::Rails.version < '3.1'
      require 'modernizr-rails/railtie'
    else
      require 'modernizr-rails/engine'
    end
  end
end
