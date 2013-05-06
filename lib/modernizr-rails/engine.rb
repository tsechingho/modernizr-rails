module Modernizr
  module Rails
    class Engine < ::Rails::Engine
      config.assets.precompile += %w(
        modernizr.js
      )
    end
  end
end
