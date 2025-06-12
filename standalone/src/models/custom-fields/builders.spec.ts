import { TBuilder } from '@/core';
import { ReferenceRest } from '@/models/commons';
import { Type } from '@/models/type';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import type { TCustomFieldsRest, TCustomFieldsGraphql } from './types';

const populateRestModel = (model: TBuilder<TCustomFieldsRest>) =>
  model.type(ReferenceRest.presets.typeReference()).fields({
    stringField: 'test value',
    booleanField: true,
    numberField: 42,
  });

const populateGraphqlModel = (model: TBuilder<TCustomFieldsGraphql>) =>
  model.type(Type.random()).customFieldsRaw([
    { name: 'stringField', value: 'test value' },
    { name: 'booleanField', value: true },
    { name: 'numberField', value: 42 },
  ]);

const validateRestModel = (model: TCustomFieldsRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      type: expect.objectContaining({
        typeId: 'type',
        id: expect.any(String),
      }),
      fields: expect.any(Object),
    })
  );
};

const validateGraphqlModel = (model: TCustomFieldsGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'CustomFieldsType',
      type: expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        name: expect.any(Object),
      }),
      typeRef: expect.objectContaining({
        typeId: 'type',
        id: expect.any(String),
        __typename: 'Reference',
      }),
      customFieldsRaw: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          value: expect.anything(),
        }),
      ]),
    })
  );
};

describe('CustomFields model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
  });
});
