# frozen_string_literal: true

RSpec.describe Rails::Fort do
  it "has a version number" do
    expect(Rails::Fort::VERSION).not_to be_nil
  end

  it "defines a Rails engine" do
    expect(Rails::Fort::Engine).to be < Rails::Engine
  end
end
