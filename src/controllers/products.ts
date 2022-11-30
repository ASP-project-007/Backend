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
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
   
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
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
   
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    res.status(400).json({ success: false, message });
  }
};
