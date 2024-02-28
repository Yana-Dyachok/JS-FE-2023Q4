import Loader from './loader';

type Options = {
    apiKey: string;
};

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL || '';
        const apiKey = process.env.API_KEY || '';

        const options: Options = { apiKey };

        super(apiUrl, options);
    }
}

export default AppLoader;