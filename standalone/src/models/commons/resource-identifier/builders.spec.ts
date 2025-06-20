import type {
  TResourceIdentifierGraphql,
  TResourceIdentifierRest,
} from './types';
import { ResourceIdentifierRest, ResourceIdentifierGraphql } from './index';

const validateRestModel = (
  restModel: TResourceIdentifierRest,
  typeId: string | null = null
) => {
  expect(restModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      typeId,
    })
  );
};

const validateGraphqlModel = (graphqlModel: TResourceIdentifierGraphql) => {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      typeId: null,
      __typename: 'ResourceIdentifier',
    })
  );
};

describe('ResourceIdentifier model builders', () => {
  it('builds a REST model with default values', () => {
    const restModel = ResourceIdentifierRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model with custom values', () => {
    const restModel = ResourceIdentifierRest.random()
      .id('12345')
      .key('test-key')
      .typeId('foo')
      .build();

    expect(restModel.id).toEqual('12345');
    expect(restModel.key).toEqual('test-key');
    expect(restModel.typeId).toEqual('foo');
  });

  it('builds a GraphQL model with default values', () => {
    const graphqlModel = ResourceIdentifierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a GraphQL model with custom values', () => {
    const graphqlModel = ResourceIdentifierGraphql.random()
      .id('12345')
      .key('test-key')
      .typeId('foo')
      .build();

    expect(graphqlModel.id).toEqual('12345');
    expect(graphqlModel.key).toEqual('test-key');
    expect(graphqlModel.typeId).toEqual('foo');
    expect(graphqlModel.__typename).toEqual('ResourceIdentifier');
  });
});
