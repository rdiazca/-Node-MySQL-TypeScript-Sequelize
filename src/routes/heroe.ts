import { Router } from 'express';
import { getHeroes,
         getHeroe,
         getHeroePorNombre,
         postHeroe,
         putHeroe,
         deleteHeroe,
 } from '../controllers/heroes';


const router = Router();

router.get('/', getHeroes);
router.get('/:id', getHeroe);
router.get('/byName/:nombre', getHeroePorNombre);
router.post('/',postHeroe);
router.put('/:id', putHeroe);
router.delete('/:id', deleteHeroe);

export default router;