import { Router } from "express";
import { getSTL } from "../controllers/STLtable.controller";

const router = Router()

router.get('/STL', getSTL)
/*
router.post('/STL', postSTL)
router.put('/STL', putSTL)
router.delete('/STL', deleteSTL)
*/

export default router