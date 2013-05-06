module Modernizr
  module Rails
    class Engine3 < ::Rails::Engine
      initializer "modernizr.assets.precompile" do |app|
        app.config.assets.precompile += %w(
          modernizr.js
        )
      end
    end
  end
end
