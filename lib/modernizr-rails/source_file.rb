require 'thor'

class SourceFile < Thor
  include Thor::Actions

  desc 'fetch source files', 'fetch source files from GitHub'
  def fetch
    self.destination_root = 'vendor/assets'
    remote = 'http://modernizr.com/downloads/'
    get "#{remote}/modernizr-latest.js", 'javascripts/modernizr.js'
    inside destination_root do
      version = File.read('javascripts/modernizr.js').match(/version\s=\s'([\d|\.]+)'/)[1]
      gsub_file '../../lib/modernizr-rails/version.rb', /MODERNIZR_VERSION\s=\s'(\d|\.)+'$/ do |match|
        %Q{MODERNIZR_VERSION = '#{version}'}
      end
    end
  end
end
