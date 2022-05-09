class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if ((explorer.score % 3 === 0 ) && (explorer.score % 5 === 0)){
            explorer.trick = 'FIZZBUZZ';
            return explorer;
        }
        if (explorer.score % 3 === 0){
            explorer.trick = "Fizz";
            return explorer;
        }

        if (explorer.score % 5 === 0){
            explorer.trick = "Buzz";
            return explorer.trick;
        }

        explorer.trick = explorer.score;
        return explorer;
    }

    static applyValidationInExplorer(score) {
        if ((score % 3 === 0 ) && ( score % 5 === 0)){
            return "Fizzbuzz";
        }
        if (score % 3 === 0){
            return "Fizz";
        }
        if (score % 5 === 0){
            return "Buzz";
        }
        return score;
    }
}

module.exports = FizzbuzzService