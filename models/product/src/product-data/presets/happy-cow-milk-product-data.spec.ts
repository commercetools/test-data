import type { TProductDataGraphql, TProductDataRest } from '../types';
import { graphqlPresets, restPresets } from '.';

function validateRestModel(restModel: TProductDataRest) {
  expect(restModel).toEqual(
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
}

function validateGraphqlModel(graphqlModel: TProductDataGraphql) {
  expect(graphqlModel).toEqual(
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
}

describe('Product "happy cow milk" presets', () => {
  it('builds a REST model', () => {
    const restModel = restPresets.happyCowMilkProductData().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPresets.happyCowMilkProductData().build();

    validateGraphqlModel(graphqlModel);
  });
});
