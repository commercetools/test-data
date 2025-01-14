import { restPresets, graphqlPresets } from './index';

describe('ProductProjection HappyCowMilk presets', () => {
  it('should return a valid Rest model', () => {
    const model = restPresets.happyCowMilk().buildRest();

    expect(model).toEqual(
      expect.objectContaining({
        key: 'happy-cow-milk-key',
        slug: { en: 'happy-cow-milk-slug' },
        name: {
          en: 'Happy Cow Milk',
          de: 'Fröhliche Kuhmilch',
        },
        description: {
          en: 'Very happy milk produced by very happy cow!',
          de: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
        },
        metaTitle: {
          en: 'Happy Cow Milk',
          de: 'Fröhliche Kuhmilch',
        },
        metaDescription: {
          en: 'Very happy milk produced by very happy cow!',
          de: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
        },
        masterVariant: expect.objectContaining({
          key: 'happy-cow-master-variant-key',
        }),
        productType: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
          obj: expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
            name: 'Milk Product Type',
          }),
        }),
        published: true,
        hasStagedChanges: false,
      })
    );
  });

  it('should return a valid Grahpql model', () => {
    const model = graphqlPresets.happyCowMilk().build();

    expect(model).toEqual(
      expect.objectContaining({
        __typename: 'ProductProjection',
        key: 'happy-cow-milk-key',
        slug: 'happy-cow-milk-slug',
        slugAllLocales: expect.arrayContaining([
          {
            locale: 'en',
            value: 'happy-cow-milk-slug',
            __typename: 'LocalizedString',
          },
        ]),
        name: 'Happy Cow Milk',
        nameAllLocales: expect.arrayContaining([
          {
            locale: 'en',
            value: 'Happy Cow Milk',
            __typename: 'LocalizedString',
          },
          {
            locale: 'de',
            value: 'Fröhliche Kuhmilch',
            __typename: 'LocalizedString',
          },
        ]),
        description: 'Very happy milk produced by very happy cow!',
        descriptionAllLocales: expect.arrayContaining([
          {
            locale: 'en',
            value: 'Very happy milk produced by very happy cow!',
            __typename: 'LocalizedString',
          },
          {
            locale: 'de',
            value: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
            __typename: 'LocalizedString',
          },
        ]),
        metaTitle: 'Happy Cow Milk',
        metaTitleAllLocales: expect.arrayContaining([
          {
            locale: 'en',
            value: 'Happy Cow Milk',
            __typename: 'LocalizedString',
          },
          {
            locale: 'de',
            value: 'Fröhliche Kuhmilch',
            __typename: 'LocalizedString',
          },
        ]),
        metaDescription: 'Very happy milk produced by very happy cow!',
        metaDescriptionAllLocales: expect.arrayContaining([
          {
            locale: 'en',
            value: 'Very happy milk produced by very happy cow!',
            __typename: 'LocalizedString',
          },
          {
            locale: 'de',
            value: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
            __typename: 'LocalizedString',
          },
        ]),
        productType: expect.objectContaining({
          id: expect.any(String),
          name: 'Milk Product Type',
          __typename: 'ProductTypeDefinition',
        }),
        productTypeRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
          __typename: 'Reference',
        }),
        published: true,
        hasStagedChanges: false,
      })
    );
  });
});
