class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission//.length

    };

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission)
        return explorersInNodeToGetUsernames

    };

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        const usernames = explorersInNode.map((explorer) => explorer.githubUsername);
        return usernames
    }

    

}


module.exports = ExplorerService