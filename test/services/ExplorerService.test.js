const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test ("Requerimiento 1: Calcular todos los explorers en una mision", () => {
        const explorers = [{ mission : "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test ("Mostrar los explorers que pertenencan a la mission node", () => {
        const explorers = [{mission : "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode.mission).toBe();
    });

    test ("Muestra el nombre del Usuario", () => {
        const explorers = [{mission : "node"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode.missionn)
    })
})