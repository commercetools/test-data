import { TBuilder } from '@/core';
import { ReferenceRest } from '@/models/commons';
import { Type } from '@/models/type';
import { RawCustomFieldGraphql } from '../raw-custom-field';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import type { TCustomFieldsRest, TCustomFieldsGraphql } from './types';

const populateRestModel = (model: TBuilder<TCustomFieldsRest>) =>
  model.type(ReferenceRest.presets.typeReference()).fields({
    stringField: 'test value',
    booleanField: true,
    numberField: 42,
  });

const populateGraphqlModel = (model: TBuilder<TCustomFieldsGraphql>) =>
  model
    .type(Type.random())
    .customFieldsRaw([
      RawCustomFieldGraphql.random().name('stringField').value('test value'),
      RawCustomFieldGraphql.random().name('booleanField').value(true),
      RawCustomFieldGraphql.random().name('numberField').value(42),
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
  expect(model.fields).not.toBeNull();
};

const validateGraphqlModel = (model: TCustomFieldsGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'CustomFieldsType',
      type: expect.objectContaining({
        __typename: 'TypeDefinition',
      }),
      typeRef: expect.objectContaining({
        __typename: 'Reference',
      }),
    })
  );
};

describe('CustomFields model builders', () => {
  it('builds a default REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a REST model with fields', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();

    validateRestModel(restModel);
  });

  it('builds a default GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a GraphQL model with fields', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        customFieldsRaw: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'RawCustomField',
          }),
        ]),
      })
    );
  });
});
