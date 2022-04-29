const Reader = require ("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJonsonFile("explorers.json")
//console.log(explorers)

//console.log(ExplorerService.filterByMission(explorers, "node"))
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
console.log(ExplorerService.getExplorersUsernameByMission(explorers, "githubUsername"))