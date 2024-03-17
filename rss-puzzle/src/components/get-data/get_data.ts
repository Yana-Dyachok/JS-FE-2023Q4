import {IGameData, Round} from '../../interfaces/interfaces';

class GetData {
    constructor(private level: number) {
        this.level = level;
    }
    async getRandomRound(): Promise<Round | undefined> {
        try {
            const response = await fetch(
                `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${this.level}.json` ||
                    `../src/puzzle-data/wordCollectionLevel${this.level}.json`
            );
            const responseData: IGameData = await response.json();
            const randomRoundIndex = Math.floor(
                Math.random() * responseData.rounds.length
            );
            const randomRound = responseData.rounds[randomRoundIndex];
            return randomRound;
        } catch (error) {
            console.error('Error data:', error);
            return undefined;
        }
    }
}

export default GetData;
