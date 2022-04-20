import { Request, Response } from "express";
import { json } from "sequelize/types";
import Heroe from '../models/heroe';

export const getHeroes = async (req: Request, res: Response) =>{
    const heroes = await Heroe.findAll();

    res.json({heroes});
}

export const getHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;
    const heroe = await Heroe.findByPk( id );
    if( heroe ){
        res.json(heroe);
    } else{
        res.status(404).json({
            msg: `No existe un héroe con el id ${id}`
        });
    }

}
export const getHeroePorNombre = async (req: Request, res: Response) => {
    const { nombre} = req.params;
    const heroe = await Heroe.findAll({
        where: {
            nombre: nombre
        }
    });
    if( heroe.length !== 0 ){
        res.json(heroe);
    } else{
        res.status(404).json({
            msg: `No existe un héroe con el nombre ${nombre}`
        });
    }

}



export const postHeroe = async(req: Request, res: Response) => {
    const { body } = req;
    console.log(body.nombre);
    
    try{
        const existenombre = await Heroe.findOne({
          
            where: {
                nombre: body.nombre
            }
        });
        console.log(existenombre);

        if(existenombre){
            return res.status(400).json({
                msg: `Ya existe un héroe con el nombre ${body.nombre}` 
            });
        }

        const heroe =  await Heroe.create(body);
        console.log(heroe);
      
        res.json( heroe );
        
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

export const putHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const heroe = await Heroe.findByPk( id );
        if(!heroe){
            return res.status(404).json({
                msg: `No existe un héroe con el id ${id}`
            });
        }

        if(Object.entries(body).length !== 0){
        await heroe.update( body );
        res.json( heroe );
    }
    else{
        return res.status(404).json({
            msg: 'Debe indicar los datos a modificar'
        });  
    }
    } catch (error){
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteHeroe = async (req: Request, res: Response) => {
    const { id } = req.params;
    const heroe = await Heroe.findByPk( id );
    if(!heroe){
        return res.status(404).json({
            msg: `No existe un héroe con el id ${id}`
        });
    }
    await heroe.destroy();
   
    res.json(heroe);
}