import { Router } from 'express';
import { body } from 'express-validator';
import { signIn, signUp, authUser } from '../controllers';
import { ProductsSearch } from '../controllers/products';
import isAuthenticated from '../middlewares/is-Authenticated';
import { validateRequest } from '../middlewares/validate-request';
import { AddToCart } from '../controllers/products';
const router = Router();

// get auth user
router.post('/product/search', ProductsSearch);

router.post('/product/addtoCard', AddToCart);

// router.get('/auth-user', isAuthenticated, authUser);


export default router;
