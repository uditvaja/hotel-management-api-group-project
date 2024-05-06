import express from 'express';
import { deleteservice, getservice, postservice, singleget, updateservice } from '../controllers/servicecontroller.js';
const serviceRoutes=express.Router();


serviceRoutes.get('/', getservice);
serviceRoutes.post('/', postservice);
serviceRoutes.get('/:id', singleget);
serviceRoutes.put('/:id', updateservice);
serviceRoutes.delete('/:id', deleteservice);


export default serviceRoutes;
