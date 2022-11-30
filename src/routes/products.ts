import { Router } from 'express';
import { body } from 'express-validator';
import { signIn, signUp, authUser } from '../controllers';
import { Products } from '../controllers/products';
import isAuthenticated from '../middlewares/is-Authenticated';
import { validateRequest } from '../middlewares/validate-request';

const router = Router();


// get auth user
router.get('/product', Products);
// router.get('/auth-user', isAuthenticated, authUser);


export default router;
