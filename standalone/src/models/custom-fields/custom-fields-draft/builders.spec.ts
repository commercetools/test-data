import { TBuilder } from '@/core';
import { ReferenceDraftRest, ReferenceDraftGraphql } from '@/models/commons';
import type {
  TCustomFieldsDraftRest,
  TCustomFieldsDraftGraphql,
} from '../types';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';

const populateRestModel = (model: TBuilder<TCustomFieldsDraftRest>) =>
  model.type(ReferenceDraftRest.presets.typeReference()).fields({
    stringField: 'draft test value',
    booleanField: false,
    numberField: 123,
  });

const populateGraphqlModel = (model: TBuilder<TCustomFieldsDraftGraphql>) =>
  model
    .type(ReferenceDraftGraphql.presets.typeReference())
    .typeId('test-type-id')
    .typeKey('test-type-key')
    .fields([
      { name: 'stringField', value: 'draft test value' },
      { name: 'booleanField', value: false },
      { name: 'numberField', value: 123 },
    ]);

const validateRestModel = (model: TCustomFieldsDraftRest) => {
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

const validateGraphqlModel = (model: TCustomFieldsDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      type: expect.objectContaining({
        typeId: 'type',
        id: expect.any(String),
      }),
      typeId: expect.any(String),
      typeKey: expect.any(String),
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          value: expect.anything(),
        }),
      ]),
    })
  );
};

describe('CustomFieldsDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
  });
});
