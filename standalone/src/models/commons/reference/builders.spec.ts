import {
  createSpecializedBuilder,
  fake,
  TBuilder,
  TModelFieldsConfig,
} from '@/core';
import type { TReferenceGraphql, TReferenceRest } from './types';
import { Reference, ReferenceGraphql, ReferenceRest } from './index';

// Simple model for testing purposes
type TTestModelRest = {
  id: string;
  value: string;
  version?: number;
};
const RestTestModelBuilder: () => TBuilder<TTestModelRest> = () =>
  createSpecializedBuilder({
    name: 'ChannelRestBuilder',
    type: 'rest',
    modelFieldsConfig: {
      fields: {
        id: fake((f) => f.string.uuid()),
        value: fake((f) => f.lorem.words()),
        version: fake((f) => f.number.int()),
      },
    } as TModelFieldsConfig<TTestModelRest>,
  });

const validateRestModel = (
  restModel: TReferenceRest,
  typeId: string | null = null
) => {
  expect(restModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      typeId,
      obj: expect.objectContaining({
        id: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (graphqlModel: TReferenceGraphql) => {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      typeId: null,
      __typename: 'Reference',
    })
  );
};

describe('Channel model builders', () => {
  it('builds a REST model', () => {
    const restModel = ReferenceRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = ReferenceRest.random()
      .id('12345')
      .typeId('foo')
      .obj(RestTestModelBuilder())
      .build<TReferenceRest<'foo', TTestModelRest>>();

    validateRestModel(restModel, 'foo');
    expect(restModel.obj?.value).toEqual(expect.any(String));
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ReferenceGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = ReferenceGraphql.random()
      .id('12345')
      .typeId('foo')
      .build();

    expect(graphqlModel.id).toEqual('12345');
    expect(graphqlModel.typeId).toEqual('foo');
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = Reference.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = Reference.random()
      .id('12345')
      .typeId('foo')
      .obj(RestTestModelBuilder())
      .buildRest<TReferenceRest<'foo', TTestModelRest>>();

    validateRestModel(restModel, 'foo');
    expect(restModel.obj?.value).toEqual(expect.any(String));
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Reference.random().buildGraphql();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = Reference.random()
      .id('12345')
      .typeId('foo')
      .buildGraphql();

    expect(graphqlModel.id).toEqual('12345');
    expect(graphqlModel.typeId).toEqual('foo');
  });
});
