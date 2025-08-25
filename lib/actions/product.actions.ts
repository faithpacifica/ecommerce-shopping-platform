'use server';

import { PrismaClient } from '@prisma/client';//uchirsam error bervotti shunga yoqdim
// import { prisma } from '@/db/prisma'; //buni ishlatganda error bervotti
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// get latest products
export async function getLatestProducts() {
	const prisma = new PrismaClient();//uchirsam error bervotti shunga yoqdim

	const data = await prisma.product.findMany({
		take: LATEST_PRODUCTS_LIMIT,
		orderBy: {
			createdAt: 'desc',
		},
	});
	return convertToPlainObject(data); //prisma object dan oddiy objectga o'tkazish uchun
}
