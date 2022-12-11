import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b76708263a354506bf5e528ea57eb2ad', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
