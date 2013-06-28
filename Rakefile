#!/usr/bin/env rake
require 'bundler/gem_tasks'
require File.expand_path('../lib/modernizr-rails/source_file', __FILE__)

desc 'Update with Modernizr Library'
task 'update-modernizr' do
    files = SourceFile.new
    files.fetch
    files.update
end
