import { fake } from './@jackfranklin/test-data-bot';
import {
  buildCountGraphqlList,
  buildLimitGraphqlList,
  createSpecializedBuilder,
} from './helpers';

type TTestGraphqlModel = {
  id: string;
  name: string;
  __typename: 'TestModel';
};

const testGraphqlBuilder = createSpecializedBuilder<TTestGraphqlModel>({
  modelFieldsConfig: {
    fields: {
      id: fake((f) => f.string.uuid()),
      name: fake((f) => f.lorem.word()),
      __typename: 'TestModel',
    },
  },
  type: 'graphql',
  name: 'TestBuilder',
});

type TTestGraphqlModelLimitResult = {
  limit: number;
  offset: number;
  total: number;
  results: TTestGraphqlModel[];
  __typename: 'TestBuilderLimitResult';
};

type TTestGraphqlModelCountResult = {
  count: number;
  exists: boolean;
  offset: number;
  total: number;
  results: TTestGraphqlModel[];
  __typename: 'TestBuilderCountResult';
};

describe('GraphQL list helpers', () => {
  it('should build a limit graphql list', () => {
    const result: TTestGraphqlModelLimitResult = buildLimitGraphqlList<
      TTestGraphqlModel,
      'TestBuilderLimitResult'
    >([testGraphqlBuilder, testGraphqlBuilder], {
      limit: 100,
      __typename: 'TestBuilderLimitResult',
    });

    expect(result).toEqual(
      expect.objectContaining({
        limit: 100,
        offset: 0,
        total: 2,
        results: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'TestModel',
          }),
        ]),
        __typename: 'TestBuilderLimitResult',
      })
    );
  });

  it('should build a count graphql list', () => {
    const result: TTestGraphqlModelCountResult = buildCountGraphqlList<
      TTestGraphqlModel,
      'TestBuilderCountResult'
    >([testGraphqlBuilder, testGraphqlBuilder], {
      __typename: 'TestBuilderCountResult',
    });

    expect(result).toEqual(
      expect.objectContaining({
        count: 100,
        exists: true,
        offset: 0,
        total: 2,
        results: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'TestModel',
          }),
        ]),
        __typename: 'TestBuilderCountResult',
      })
    );
  });
});
