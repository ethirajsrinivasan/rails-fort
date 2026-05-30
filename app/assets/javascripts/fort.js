/**
 * Rails-Fort — form completion progress bar (vanilla JavaScript).
 *
 * Initialized from rails_fort.js.erb with config from config/fort.yml.
 */
class FortProgress {
  constructor(config = {}) {
    this.config = {
      type: config.type || "solid",
      value: config.value ?? "#009DFF",
      height: config.height || "4px",
      duration: config.duration || "1s",
      alignment: config.alignment || "top"
    };
    this.bars = [];
    this.containers = [];
    this._sortedFlashColors = null;
  }

  init() {
    this._prepareForms();
    this._buildBars();
    this._bindFields();
    this._update();
  }

  destroy() {
    this._unbindFields();
    this.bars.forEach((bar) => bar.remove());
    this.bars = [];
  }

  _prepareForms() {
    document.querySelectorAll("form").forEach((form) => {
      if (form.dataset.fortWrapped === "true") return;

      const wrapper = document.createElement("div");
      wrapper.className = "fort-form form";
      form.parentNode.insertBefore(wrapper, form);
      wrapper.appendChild(form);
      form.dataset.fortWrapped = "true";
      this.containers.push(wrapper);
    });

    document.querySelectorAll(".fort-form, .form").forEach((container) => {
      if (!this.containers.includes(container)) {
        this.containers.push(container);
      }
    });
  }

  _buildBars() {
    this.bars.forEach((bar) => bar.remove());
    this.bars = [];

    if (this.config.type === "merge") {
      this.bars.push(this._createBar("fort-bar top-one"));
      this.bars.push(this._createBar("fort-bar fort-bar--secondary top-two"));
    } else {
      this.bars.push(this._createBar("fort-bar top-one"));
    }

    const isBottom = this.config.alignment === "bottom";

    this.bars.forEach((bar) => {
      bar.style.height = this.config.height;
      bar.style.transitionDuration = this.config.duration;

      if (isBottom) {
        bar.classList.add("fort-bar--bottom");
        bar.style.top = "auto";
        bar.style.bottom = "0";
      } else {
        bar.style.top = "0";
        bar.style.bottom = "auto";
      }

      document.body.appendChild(bar);
    });
  }

  _createBar(className) {
    const bar = document.createElement("div");
    bar.className = className;
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");

    const fill = document.createElement("div");
    fill.className = "fort-bar__fill colors";
    bar.appendChild(fill);

    return bar;
  }

  _bindFields() {
    this._getFields().forEach((field) => {
      field.addEventListener("input", this._update);
      field.addEventListener("change", this._update);
    });
  }

  _unbindFields() {
    this._getFields().forEach((field) => {
      field.removeEventListener("input", this._update);
      field.removeEventListener("change", this._update);
    });
  }

  _getFields() {
    const fields = [];

    this.containers.forEach((container) => {
      container.querySelectorAll("input, textarea, select").forEach((field) => {
        if (this._shouldTrack(field)) {
          fields.push(field);
        }
      });
    });

    return fields;
  }

  _shouldTrack(field) {
    const type = (field.type || "").toLowerCase();

    if (type === "button" || type === "submit" || type === "hidden") {
      return false;
    }

    if (field.classList.contains("ignore") || field.classList.contains("fort-ignore")) {
      return false;
    }

    return true;
  }

  _isFilled(field) {
    if (field.type === "checkbox" || field.type === "radio") {
      return field.checked;
    }

    return String(field.value || "").trim().length > 0;
  }

  _getCounts() {
    const fields = this._getFields();
    const total = fields.length;
    const filled = fields.filter((field) => this._isFilled(field)).length;

    return { total, filled, percent: total === 0 ? 0 : (filled / total) * 100 };
  }

  _update = () => {
    const { total, filled, percent } = this._getCounts();
    const unfilled = total - filled;

    this.bars.forEach((bar) => {
      bar.setAttribute("aria-valuenow", String(Math.round(percent)));
    });

    switch (this.config.type) {
      case "gradient":
        this._applyGradient(percent);
        break;
      case "sections":
        this._applySections();
        break;
      case "flash":
        this._applyFlash(total, unfilled);
        break;
      case "merge":
        this._applyMerge(percent);
        break;
      default:
        this._applySolid(percent);
    }
  };

  _applySolid(percent) {
    const bar = this.bars[0];
    const fill = bar.querySelector(".fort-bar__fill");

    bar.style.width = `${percent}%`;
    fill.style.background = this._colorValue();
  }

  _applyGradient(percent) {
    const colors = this._colorArray();

    if (colors.length < 2) {
      this._applySolid(percent);
      return;
    }

    const bar = this.bars[0];
    const fill = bar.querySelector(".fort-bar__fill");

    bar.style.width = `${percent}%`;
    fill.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
  }

  _applySections() {
    const colors = this._colorArray();

    if (colors.length === 0) {
      return;
    }

    const { percent } = this._getCounts();
    const bar = this.bars[0];
    const fill = bar.querySelector(".fort-bar__fill");
    const stops = [];

    colors.forEach((color, index) => {
      const stop = Math.floor((1000 * (index + 1)) / colors.length) / 10;
      stops.push(`${color} ${stop}%`);
    });

    bar.style.width = `${percent}%`;
    fill.style.background = `linear-gradient(to right, ${stops.join(", ")})`;
    fill.style.width = "100%";
  }

  _applyFlash(total, unfilled) {
    const colors = this._colorArray().slice().sort();
    const bar = this.bars[0];
    const fill = bar.querySelector(".fort-bar__fill");
    const filled = total - unfilled;
    const percent = total === 0 ? 0 : (filled / total) * 100;

    bar.style.width = `${percent}%`;

    if (colors.length === 0) {
      fill.style.background = this._colorValue();
      return;
    }

    const index = Math.max(0, Math.min(colors.length - 1, unfilled - 1));
    fill.style.background = colors[index] || colors[0];
  }

  _applyMerge(percent) {
    const color = this._colorValue();
    const half = percent / 2;

    this.bars.forEach((bar) => {
      bar.style.width = `${half}%`;
      const fill = bar.querySelector(".fort-bar__fill");
      fill.style.background = color;
    });
  }

  _colorValue() {
    const value = this.config.value;

    if (Array.isArray(value)) {
      return value[0] || "#009DFF";
    }

    return value || "#009DFF";
  }

  _colorArray() {
    const value = this.config.value;

    if (Array.isArray(value)) {
      return value;
    }

    return [value || "#009DFF"];
  }
}

// Export for tests and module loaders; global for Sprockets.
if (typeof module !== "undefined" && module.exports) {
  module.exports = FortProgress;
}

window.FortProgress = FortProgress;
