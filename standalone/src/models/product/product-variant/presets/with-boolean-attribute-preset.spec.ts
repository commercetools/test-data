import { TProductVariantGraphql, TProductVariantRest } from '../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-boolean-attribute-preset';

const validateRestModel = (model: TProductVariantRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: 'test-boolean-attribute',
          value: true,
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (
  model: TProductVariantRest | TProductVariantGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      attributesRaw: expect.arrayContaining([
        expect.objectContaining({
          name: 'test-boolean-attribute',
          value: true,
          attributeDefinition: expect.objectContaining({
            attributeConstraint: 'None',
            inputHint: 'SingleLine',
            inputTip: 'Test set attribute',
            isRequired: false,
            isSearchable: false,
            label: 'Test set attribute',
            name: 'test-boolean-attribute',
            type: expect.objectContaining({
              name: 'boolean',
              __typename: 'BooleanAttributeDefinitionType',
            }),
            __typename: 'AttributeDefinition',
          }),
          __typename: 'RawProductAttribute',
        }),
      ]),
      __typename: 'ProductVariant',
    })
  );
};

describe('WithBooleanAttribute preset builders', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('WithBooleanAttribute preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql();

    validateGraphqlModel(graphqlModel);
  });
});
