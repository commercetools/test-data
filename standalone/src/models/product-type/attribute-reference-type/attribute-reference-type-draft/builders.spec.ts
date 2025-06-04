import { attributeReferenceTypeId } from '../constants';
import {
  TAttributeReferenceTypeDraftGraphql,
  TAttributeReferenceTypeDraftRest,
} from '../types';
import {
  AttributeReferenceTypeDraft,
  AttributeReferenceTypeDraftGraphql,
  AttributeReferenceTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeReferenceTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'reference',
    })
  );
  expect(Object.values(attributeReferenceTypeId)).toContain(
    model.referenceTypeId
  );
};

const validateGraphqlModel = (
  model: TAttributeReferenceTypeDraftGraphql
): void => {
  expect(Object.values(attributeReferenceTypeId)).toContain(
    model.referenceTypeId
  );
};

describe('AttributeReferenceType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeReferenceTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeReferenceTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeReferenceType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeReferenceTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeReferenceTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeReferenceTypeDraft.random().buildGraphql<TAttributeReferenceTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
