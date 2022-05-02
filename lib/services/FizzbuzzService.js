class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if ((explorer.score % 3 === 0 ) && (explorer.score % 5 === 0)){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        if (explorer.score % 3 === 0){
            explorer.trick = "Fizz"
            return explorer;
        }

        if (explorer.score % 5 === 0){
            explorer.trick = "Buzz"
            return explorer;
        }

        explorer.trick = explorer.score;
        return explorer;
    }

    static applyValidationInExplorer(number) {
        if ((number % 3 === 0 ) && (number % 5 === 0)){
            return "Fizzbuzz";
        }
        if (number % 3 === 0){
            return "Fizz"
        }
        if (number % 5 === 0){
            return "Buzz"
        }
        return number;
    }


/*


        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)//tick:1

        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)// fizz

        const explorer5 = {name: "Explorer5", scocre: 3}
        FizzbuzzService.applyValidationInExplorer(explorer5)// buzz

        const explorer15 = {name: "Explorer15", score: 15}
        FizzbuzzService.applyValidationInExplorer(explorer15)// fizzbuzz  */
    

}
console.log(FizzbuzzService.applyValidationInExplorer.number)

module.exports = FizzbuzzService