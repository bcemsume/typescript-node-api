import * as express from 'express';
import * as bodyParser from 'body-parser'; //use to parse the form data that you pass in the request
import { Pokemons } from "./routes/pokemons";
import  { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize({
    database: 'd1dkamedibdn97',
    dialect: 'postgres',
    username: 'vegrltaargvijh',
    password: '18d9c26aa79b4fee28366097890db749bd58527f59e22ec179da875854e9b4b8',
    storage: ':memory:',
    modelPaths: [__dirname + '/models']
});;

class App {


    public app: express.Application;

    public pokeRoutes: Pokemons = new Pokemons();

    constructor() {
        this.app = express(); //TK
        this.config();

        this.pokeRoutes.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;