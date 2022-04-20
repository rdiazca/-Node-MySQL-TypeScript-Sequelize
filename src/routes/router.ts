import { Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

    const query = `
    SELECT * 
    FROM heroes`;
    MySQL.ejecutarQuery(query, (err: any, heroes: Object[]) =>{
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                heroes: heroes
            })
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    
    //evitar inyección en el parámetro de id ()
    const escapeId = MySQL.instance.cnn.escape(id);

    const query = `
    SELECT * 
    FROM heroes
    WHERE id = ${escapeId}`;

    MySQL.ejecutarQuery(query, (err: any, heroe: Object[]) =>{
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                heroe: heroe[0]
            })
        }
    });
});

router.post('/heroesNew/:nombre/:poder' , (req: Request, res:Response) =>{
    
    const nombre = req.params.nombre;
    const poder = req.params.poder;
     const query = `
     INSERT INTO heroes
     VALUES ('', ${nombre}, ${poder})`;

    MySQL.ejecutarQuery(query, (err:any, heroes: Object[]) =>{
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                heroes: heroes
            })
        }
    });
});

export default router;