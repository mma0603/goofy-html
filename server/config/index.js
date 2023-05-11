import prices from '../prices.json' assert { type: "json" };


export class Settings {
    static port = 3000
    static mongoDsn = 'mongodb://localhost:27017/db'

    static staticPath = 'C:/opt/stud/web/goofy-html/static/'
    static templatesPath = 'C:/opt/stud/web/goofy-html/templates/'
    static prices = prices
}
