import app from './app';
import database from './database';


const port = 3001

//database.sync({force: true}); 
database.sync(); 
console.log('Database running at 3306'); 

app.listen(port, () => {
    console.log(`Example app  host at http://localhost:${port}`)
})