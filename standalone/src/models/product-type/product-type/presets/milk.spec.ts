import {
  attributeConstraints,
  inputHints,
} from '../../attribute-definition/constants';
import { TProductTypeGraphql, TProductTypeRest } from '../types';
import * as presets from './milk';

const validateRestModel = (
  model: TProductTypeRest | TProductTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'Milk Product Type',
      attributes: expect.arrayContaining([
        expect.objectContaining({
          attributeConstraint: attributeConstraints.None,
          inputHint: inputHints.MultiLine,
          inputTip: expect.objectContaining({
            en: 'Important information for people with lactose intolerance',
          }),
          isRequired: true,
          isSearchable: true,
          label: expect.objectContaining({
            en: 'Lactose Free',
          }),
          name: 'lactose-free',
          type: expect.objectContaining({
            name: 'boolean',
          }),
        }),
        expect.objectContaining({
          attributeConstraint: attributeConstraints.SameForAll,
          inputHint: inputHints.SingleLine,
          inputTip: expect.objectContaining({
            en: 'Public recognition of cow`s good deeds make it even happier!',
          }),
          isRequired: true,
          isSearchable: false,
          label: expect.objectContaining({
            en: 'Name of the cow producing the milk',
          }),
          name: 'cow-name',
          type: expect.objectContaining({
            name: 'text',
          }),
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (model: TProductTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'Milk Product Type',
      attributeDefinitions: expect.objectContaining({
        results: expect.arrayContaining([
          expect.objectContaining({
            attributeConstraint: attributeConstraints.None,
            inputHint: inputHints.MultiLine,
            inputTipAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en',
                value:
                  'Important information for people with lactose intolerance',
              }),
            ]),
            isRequired: true,
            isSearchable: true,
            labelAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en',
                value: 'Lactose Free',
              }),
            ]),
            name: 'lactose-free',
            type: expect.objectContaining({
              name: 'boolean',
            }),
          }),
          // expect.objectContaining({
          //   attributeConstraint: attributeConstraints.SameForAll,
          //   inputHint: inputHints.SingleLine,
          //   inputTipAllLocales: expect.arrayContaining([
          //     expect.objectContaining({
          //       locale: 'en',
          //       value:
          //         'Public recognition of cow`s good deeds make it even happier!',
          //     }),
          //   ]),
          //   isRequired: true,
          //   isSearchable: false,
          //   labelAllLocales: expect.arrayContaining([
          //     expect.objectContaining({
          //       locale: 'en',
          //       value: 'Name of the cow producing the milk',
          //     }),
          //   ]),
          //   name: 'cow-name',
          //   type: expect.objectContaining({
          //     name: 'text',
          //   }),
          // }),
        ]),
      }),
    })
  );
};

describe('ProductType model milk preset builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductType model milk preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = presets.compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = presets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets
      .compatPreset()
      .buildGraphql<TProductTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
