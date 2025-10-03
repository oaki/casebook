import { prisma } from '@/app/libs/services/databaseConnection';
import { CategoryTeasersClient } from './CategoryTeasersClient';

// Map svg_region to Slovak translations for the three body parts
const categoryTranslations: Record<string, { title: string; description: string }> = {

  'digestive_system': {
    title: 'Tráviaci trakt',
    description: 'Starostlivosť o trávenie a črevá'
  },
  'skin': {
    title: 'Koža',
    description: 'Riešenia pre kožné ťažkosti a starostlivosť'
  },
  'respiratory_system': {
    title: 'Respiračný trakt',
    description: 'Podpora dýchacieho systému a pľúc'
  },
};

type CategoryTeasersProps = {

}

// Server component that fetches data
export const CategoryTeasers = async ({  }: CategoryTeasersProps) => {

  try {
    // Fetch body parts directly from database
    const bodyParts = await prisma.body_parts.findMany({
      select: {
          id: true,
          code: true,
          svg_region: true,
          order: true,
      },
      where: {
        is_active: true,
      },
      orderBy: {
        order: 'asc',
      }
    });

    // Create categories from loaded body parts
    const categories = bodyParts.map(bodyPart => ({
      id: bodyPart.id,
      code: bodyPart.code,
      svg_region: bodyPart.svg_region,
      order: bodyPart.order,
      title: categoryTranslations[bodyPart.code]?.title || bodyPart.code,
      description: categoryTranslations[bodyPart.code]?.description || 'Zdravotná starostlivosť'
    }));

    // Pass data to client component for animations and interactions
    return <CategoryTeasersClient categories={categories} />;

  } catch (error) {
    console.error('Error fetching body parts:', error);
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '2rem'
      }}>
        Error loading categories
      </div>
    );
  }
};
