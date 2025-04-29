import { graphqlPresets, restPresets } from '.';

describe('presets', () => {
  it('should build rest preset', () => {
    const productData = restPresets.boringGenericMilkProductData().build();
    expect(productData).toEqual(
      expect.objectContaining({
        name: expect.objectContaining({
          en: 'Boring Generic Milk',
          de: 'Langweilige generische Milch',
        }),
        description: expect.objectContaining({
          en: 'Very average milk produced by a very average cow!',
          de: 'Sehr durchschnittliche Milch von einer sehr durchschnittlichen Kuh!',
        }),
        slug: expect.objectContaining({
          en: 'boring-generic-milk-slug',
        }),
      })
    );
  });
  it('should build graphql preset', () => {
    const productData = graphqlPresets.boringGenericMilkProductData().build();
    expect(productData).toEqual(
      expect.objectContaining({
        name: 'Boring Generic Milk',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Boring Generic Milk',
          }),
        ]),
        description: 'Very average milk produced by a very average cow!',
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Very average milk produced by a very average cow!',
          }),
          expect.objectContaining({
            locale: 'de',
            value:
              'Sehr durchschnittliche Milch von einer sehr durchschnittlichen Kuh!',
          }),
        ]),
        slug: 'boring-generic-milk-slug',
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'boring-generic-milk-slug',
          }),
        ]),
      })
    );
  });
});
