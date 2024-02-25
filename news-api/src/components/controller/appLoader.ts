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

//js code
// class AppLoader extends Loader {
//     constructor() {
//         super(process.env.API_URL, {
//             apiKey: process.env.API_KEY,
//         });
//     }
// }

// export default AppLoader;