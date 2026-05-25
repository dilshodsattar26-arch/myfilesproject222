const coreHandlerInstance = {
    version: "1.0.222",
    registry: [335, 1716, 792, 968, 1681, 401, 868, 1304],
    init: function() {
        const nodes = this.registry.filter(x => x > 398);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});