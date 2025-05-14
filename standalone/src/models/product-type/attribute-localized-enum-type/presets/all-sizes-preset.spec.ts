import type {
  TAttributeLocalizedEnumTypeGraphql,
  TAttributeLocalizedEnumTypeRest,
} from '../types';
import * as allSizesPreset from './all-sizes-preset';

function validateRestModel(model: TAttributeLocalizedEnumTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'lenum',
      values: expect.arrayContaining([
        expect.objectContaining({
          key: 's',
          label: {
            en: 'Size S',
            de: 'Größe S',
          },
        }),
        expect.objectContaining({
          key: 'm',
          label: {
            en: 'Size M',
            de: 'Größe M',
          },
        }),
        expect.objectContaining({
          key: 'l',
          label: {
            en: 'Size L',
            de: 'Größe L',
          },
        }),
        expect.objectContaining({
          key: 'xl',
          label: {
            en: 'Size XL',
            de: 'Größe XL',
          },
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'lenum',
      values: expect.arrayContaining([
        expect.objectContaining({
          key: 's',
          label: 'Size S',
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: 'en',
              value: 'Size S',
            }),
            expect.objectContaining({
              locale: 'de',
              value: 'Größe S',
              __typename: 'LocalizedString',
            }),
          ]),
        }),
        expect.objectContaining({
          key: 'm',
          label: 'Size M',
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: 'en',
              value: 'Size M',
            }),
            expect.objectContaining({
              locale: 'de',
              value: 'Größe M',
              __typename: 'LocalizedString',
            }),
          ]),
        }),
        expect.objectContaining({
          key: 'l',
          label: 'Size L',
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: 'en',
              value: 'Size L',
            }),
            expect.objectContaining({
              locale: 'de',
              value: 'Größe L',
              __typename: 'LocalizedString',
            }),
          ]),
        }),
        expect.objectContaining({
          key: 'xl',
          label: 'Size XL',
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: 'en',
              value: 'Size XL',
            }),
            expect.objectContaining({
              locale: 'de',
              value: 'Größe XL',
              __typename: 'LocalizedString',
            }),
          ]),
        }),
      ]),
      __typename: 'LocalizableEnumAttributeDefinitionType',
    })
  );
}

describe('AttributeLocalizedEnumType model builders', () => {
  it('builds a REST model', () => {
    const restModel = allSizesPreset.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = allSizesPreset.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeLocalizedEnumType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = allSizesPreset.compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = allSizesPreset.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = allSizesPreset
      .compatPreset()
      .buildGraphql<TAttributeLocalizedEnumTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
