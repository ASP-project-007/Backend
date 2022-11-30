import prisma from '../client';
import { Request, Response } from 'express';
import { Password } from '../utils/password';
import { BadRequestError } from '../errors/bad-request-error';
import generateToken from '../utils/generateToken';
import { PrismaClient } from "@prisma/client";



export const ProductsSearch = async (req: Request, res: Response) => {
  
  try {
    // this is a post api to search products list from the products table
    // the search is based on the product name
    // the search is case insensitive
    // the search is partial
    // the search is lat lng 
    
    const { name, lat, lng } = req.body;

    const products = await prisma.products.findMany({
      where: {
        prodName: {
          contains: name,                              
        },  
        prodDesc: {
          contains: name,      
        }      
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        seller: true,
      },
    });

    res.status(200).json(products);
   
   
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    res.status(400).json({ success: false, message });
  }
};



export const AddToCart = async (req: Request, res: Response) => {
  
  try {
    // this is a post api to search products list from the products table
    
    const { userId, productId,quantity } = req.body;
    //check if there is a product in cart if present update the quantity else add to cart table

    const existingProductInCart = await prisma.cart.findMany({
      where: {
        userId: userId,
        productId: productId,
      },
      include: {
        products: true,
      },
    });

    if (existingProductInCart.length > 0) {
      //update the quantity
      const updatedProduct = await prisma.cart.update({
        where: {
          id: existingProductInCart[0].id,
        },
        data: {
          quantity: quantity,
        },
      });
      res.status(200).json(updatedProduct);
    } else {
      //add to cart
      const product = await prisma.cart.create({
        data: {
          userId: userId,
          productId: productId,
          quantity: quantity,
        },
      });
      res.status(200).json(product);
    }

  

   
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    res.status(400).json({ success: false, message });
  }
};

export const GetCart = async (req: Request, res: Response) => {

  try {
    // this is a post api to search products list from the products table
    const { userId } = req.body;  

    const cart = await prisma.cart.findMany({
      where: {
        userId: userId,
      },
      include: {
        products: true,
      },      
    });


    res.status(200).json(cart);

   
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    res.status(400).json({ success: false, message });
  }
}