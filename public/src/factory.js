export class AuraFactory {
  constructor(auraDiv) {
    this.auraDiv = auraDiv;
  }

  createAura(strength) {
    switch (strength) {
      case 1:
        return {
          gradient: "radial-gradient(circle, #ff0033, #ff66cc)",
          color: "#ff66cc",
        };
      case 2:
        return {
          gradient: "radial-gradient(circle, #ff9900, #ffff66)",
          color: "#ffff66",
        };
      case 3:
        return {
          gradient: "radial-gradient(circle, #33ff66, #00ffcc)",
          color: "#00ffcc",
        };
      case 4:
        return {
          gradient: "radial-gradient(circle, #6633ff, #ff33ff)",
          color: "#ff33ff",
        };
      default:
        return {
          gradient: "radial-gradient(circle, #efefef, #dfdfdf)",
          color: "#dfdfdf",
        };
    }
  }
}
