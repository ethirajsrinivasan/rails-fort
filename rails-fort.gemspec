# frozen_string_literal: true

require_relative "lib/rails/fort/version"

Gem::Specification.new do |spec|
  spec.name          = "rails-fort"
  spec.version       = Rails::Fort::VERSION
  spec.authors       = ["ethi"]
  spec.email         = ["ethirajsrinivasan@gmail.com"]

  spec.summary       = "Modern progress bar for form completion"
  spec.description   = "Rails-Fort provides a modern, animated progress bar for form completion tracking. It automatically detects form fields and displays visual progress as users fill out forms, with multiple customizable effect types including solid, gradient, sections, flash, and merge animations."
  spec.homepage      = "https://github.com/ethirajsrinivasan/rails-fort"
  spec.license       = "MIT"

  spec.metadata = {
    "allowed_push_host" => "https://rubygems.org",
    "homepage_uri" => spec.homepage,
    "source_code_uri" => "https://github.com/ethirajsrinivasan/rails-fort",
    "bug_tracker_uri" => "https://github.com/ethirajsrinivasan/rails-fort/issues",
    "changelog_uri" => "https://github.com/ethirajsrinivasan/rails-fort/blob/master/CHANGELOG.md",
    "documentation_uri" => "https://github.com/ethirajsrinivasan/rails-fort/blob/master/README.md",
    "rubygems_mfa_required" => "true"
  }

  spec.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end

  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.required_ruby_version = ">= 3.0"

  spec.add_runtime_dependency "railties", ">= 6.0", "< 9.0"

  spec.add_development_dependency "bundler", "~> 2.4"
  spec.add_development_dependency "bundler-audit", "~> 0.9"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "rspec", "~> 3.12"
  spec.add_development_dependency "rubocop", "~> 1.50"
end
