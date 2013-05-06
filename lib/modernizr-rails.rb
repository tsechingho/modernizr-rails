require 'modernizr-rails/version'

module Modernizr
  module Rails
    case ::Rails.version.to_s
    when /^4/
      require 'modernizr-rails/engine'
    when /^3\.[12]/
      require 'modernizr-rails/engine3'
    when /^3\.[0]/
      require 'modernizr-rails/railtie'
    end
  end
end
