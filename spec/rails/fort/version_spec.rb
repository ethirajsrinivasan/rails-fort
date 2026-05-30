# frozen_string_literal: true

RSpec.describe Rails::Fort do
  it "has version 1.0.0" do
    expect(Rails::Fort::VERSION).to eq "1.0.0"
  end

  it "defines a Rails engine" do
    expect(Rails::Fort::Engine).to be < Rails::Engine
  end
end
