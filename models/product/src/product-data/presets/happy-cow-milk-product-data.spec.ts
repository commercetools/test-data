import { graphqlPresets, restPresets } from '.';

describe('presets', () => {
  it('should build rest preset', () => {
    const productData = restPresets.happyCowMilkProductData().build();
    expect(productData).toEqual(
      expect.objectContaining({
        name: expect.objectContaining({
          en: 'Happy Cow Milk',
          de: 'Fröhliche Kuhmilch',
        }),
        description: expect.objectContaining({
          en: 'Very happy milk produced by very happy cow!',
          de: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
        }),
        slug: expect.objectContaining({
          en: 'happy-cow-milk-slug',
        }),
      })
    );
  });
  it('should build graphql preset', () => {
    const productData = graphqlPresets.happyCowMilkProductData().build();
    expect(productData).toEqual(
      expect.objectContaining({
        name: 'Happy Cow Milk',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Happy Cow Milk',
          }),
        ]),
        description: 'Very happy milk produced by very happy cow!',
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Very happy milk produced by very happy cow!',
          }),
          expect.objectContaining({
            locale: 'de',
            value: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
          }),
        ]),
        slug: 'happy-cow-milk-slug',
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'happy-cow-milk-slug',
          }),
        ]),
      })
    );
  });
});
