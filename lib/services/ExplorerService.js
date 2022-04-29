class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission

    };

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission)
        return explorersInNodeToGetUsernames

    };

    static getExplorersUsernameByMission(explorers, githubUsername){
        const usernamesInNode = explorers.map((explorers) => explorers.githubUsername === githubUsername)
        return usernamesInNode
    }
}
//const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
//const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

module.exports = ExplorerService