import express from "express"
import { deletewaitlist, getwaitlist, getwaitlists, postwaitlist, putwaitlist } from "../controllers/waitlist.controller.js"
let waitlistRoutes = express()

waitlistRoutes.get('/', getwaitlists);
waitlistRoutes.get('/:id', getwaitlist);
waitlistRoutes.post('/', postwaitlist);
waitlistRoutes.put('/:id', putwaitlist);
waitlistRoutes.delete('/:id', deletewaitlist);

export default waitlistRoutesRoutes;