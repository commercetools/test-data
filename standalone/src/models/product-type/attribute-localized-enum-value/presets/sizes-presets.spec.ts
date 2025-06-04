import type {
  TAttributeLocalizedEnumValueGraphql,
  TAttributeLocalizedEnumValueRest,
} from '../types';
import { restPresets, graphqlPresets, compatPresets } from './index';

function validateRestModel(model: TAttributeLocalizedEnumValueRest) {
  expect(model).toEqual(
    expect.objectContaining({
      key: 's',
      label: expect.objectContaining({
        en: 'Size S',
        de: 'Größe S',
      }),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumValueGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      key: 's',
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Size S',
          __typename: 'LocalizedString',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Größe S',
          __typename: 'LocalizedString',
        }),
      ]),
      __typename: 'LocalizableEnumValueType',
    })
  );
}

describe('AttributePlainEnumValue model builders', () => {
  it('builds a REST model', () => {
    const restModel = restPresets.s().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPresets.s().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributePlainEnumValue model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPresets.s().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPresets.s().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPresets
      .s()
      .buildGraphql<TAttributeLocalizedEnumValueGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
