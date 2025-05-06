import type { TProductDataGraphql, TProductDataRest } from '../types';
import { graphqlPresets, restPresets, compatPresets } from '.';

function validateRestModel(restModel: TProductDataRest) {
  expect(restModel).toEqual(
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
}

function validateGraphqlModel(graphqlModel: TProductDataGraphql) {
  expect(graphqlModel).toEqual(
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
}

describe('Product "boring generic milk" presets', () => {
  it('builds a REST model', () => {
    const restModel = restPresets.boringGenericMilkProductData().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPresets.boringGenericMilkProductData().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Product "boring generic milk" compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const compatModel = compatPresets.boringGenericMilkProductData().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPresets.boringGenericMilkProductData().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPresets
      .boringGenericMilkProductData()
      .buildGraphql<TProductDataGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
