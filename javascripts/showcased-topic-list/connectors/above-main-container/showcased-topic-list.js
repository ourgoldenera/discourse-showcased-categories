export default {
  setupComponent() {
    if (settings.plugin_outlet === "above-main-container") {
      this.set("aboveMain", true);
    } else {
      this.set("aboveMain", false);
    }
  },
};
