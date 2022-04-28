class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorers) => explorers.mision === mission)
        return explorersByMission

    }

    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernameByMission(explorers, mision){

    }
}

module.exports = ExplorerService