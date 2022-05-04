const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit test for ExplorerService class", () => {
    test ("1) Test aplyValidationInExplorer trick same as score", () => {
        const explorer1 = { name:"Explorer1", score: 1 };
        const explorerFizzbuzz1 = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect (explorerFizzbuzz1.trick).toBe(explorerFizzbuzz1.score)
    })
})