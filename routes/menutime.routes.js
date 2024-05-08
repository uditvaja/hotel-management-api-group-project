import express from 'express';
import { getMenuTime , getMenuTimes ,postMenuTime , putMenuTime , deleteMenuTime} from '../controllers/menutime.controller.js';
const menuTimeRoutes = express.Router();


menuTimeRoutes.get('/', getMenuTimes);
menuTimeRoutes.post('/', postMenuTime);
menuTimeRoutes.get('/:id', getMenuTime);
menuTimeRoutes.put('/:id', putMenuTime);
menuTimeRoutes.delete('/:id', deleteMenuTime);


export default menuTimeRoutes;
