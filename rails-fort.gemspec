# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'rails/fort/version'

Gem::Specification.new do |spec|
  spec.name          = "rails-fort"
  spec.version       = Rails::Fort::VERSION
  spec.authors       = ["ethiraj"]
  spec.email         = ["ethirajsrinivasan@gmail.com"]

  spec.summary       = "Modern progress bar for form completion"
  spec.description   = "Rails-Fort provides a modern, animated progress bar for form completion tracking. It automatically detects form fields and displays visual progress as users fill out forms, with multiple customizable effect types including solid, gradient, sections, flash, and merge animations."
  spec.homepage      = "https://github.com/ethirajsrinivasan/rails-fort"
  spec.license       = "MIT"

  # Prevent pushing this gem to RubyGems.org by setting 'allowed_push_host', or
  # delete this section to allow pushing this gem to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "https://rubygems.org"
    spec.metadata['homepage_uri'] = spec.homepage
    spec.metadata['changelog_uri'] = "https://github.com/ethirajsrinivasan/rails-fort/blob/master/CHANGELOG.md"
    spec.metadata['bug_tracker_uri'] = "https://github.com/ethirajsrinivasan/rails-fort/issues"
    spec.metadata['documentation_uri'] = "https://github.com/ethirajsrinivasan/rails-fort/blob/master/README.md"
  else
    raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]
  spec.required_ruby_version = '>= 3.0'
  spec.add_development_dependency "bundler", "~> 2.4"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency 'rspec', "~> 3.12"
  spec.add_runtime_dependency "railties", ">= 6.0", "< 9.0"
end
