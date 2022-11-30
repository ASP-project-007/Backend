import { Router } from 'express';
import { body } from 'express-validator';
import { signIn, signUp, authUser } from '../controllers';
import { GetCart, ProductsSearch } from '../controllers/products';
import isAuthenticated from '../middlewares/is-Authenticated';
import { validateRequest } from '../middlewares/validate-request';
import { AddToCart } from '../controllers/products';
const router = Router();

// get auth user
router.post('/search', ProductsSearch);

router.post('/addToCart',isAuthenticated, AddToCart);

router.get('/getCart',isAuthenticated, GetCart);


// router.get('/auth-user', isAuthenticated, authUser);


export default router;
