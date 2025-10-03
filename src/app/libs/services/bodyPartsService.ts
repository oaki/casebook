import { prisma } from './databaseConnection';

export interface BodyPart {
  id: number;
  code: string;
  svg_region: string;
  order: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export class BodyPartsService {
  static async getAllBodyParts(): Promise<BodyPart[]> {
    try {
      console.log('Fetching active body parts, ordered by `order`...');

      const bodyParts = await prisma.body_parts.findMany({
        where: {
          deleted_at: null,
          is_active: true,
        },
        orderBy: {
          order: 'asc',
        },
      });
      console.log(`Found ${bodyParts.length} body parts.`, bodyParts);

      return bodyParts;
    } catch (error) {
      console.error('Error fetching body parts from database:', error);

      console.error('Error fetching body parts:', error);
      return [];
    }
  }

  static async getBodyPartByCode(code: string): Promise<BodyPart | null> {
    try {
      const bodyPart = await prisma.body_parts.findFirst({
        where: {
          code,
          deleted_at: null,
          is_active: true,
        },
      });
      return bodyPart;
    } catch (error) {
      console.error('Error fetching body part by code:', error);
      return null;
    }
  }
}

export default BodyPartsService;
