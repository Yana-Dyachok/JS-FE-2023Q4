import Loader from './loader';
class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}
export default AppLoader;

// type Options = {
//     apiKey: string;
// };

// class AppLoader extends Loader {
//     constructor() {
//         const apiUrl = process.env.API_URL || '';
//         const apiKey = process.env.API_KEY || '';

//         const options: Options = { apiKey };

//         super(apiUrl, options);
//     }
// }

// export default AppLoader;


// export default AppLoader;