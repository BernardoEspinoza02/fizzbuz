class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission.length

    };

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission)
        return explorersInNodeToGetUsernames

    };

}


module.exports = ExplorerService