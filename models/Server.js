const express =require('express');


class Server{

    constructor(){
        this.app=express();
        this.PORT= process.env.PORT;

        //middlewares
        this.middlewares()

        //rutas de la app 
        this.rutas();
    }

    middlewares(){

        this.app.use(express.static('public'));
    }

    rutas(){

        this.app.get('/api',(req,res)=>{
            res.json({name:'wolfsloul'})
        })


    }

    start(){
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`)
          })
    }

}

module.exports=Server;