import Builder from './builder';
import Generator from './generator';
import Transformer from './transformer';
import type {
  TReferenceObject,
  TExpandedReference,
  TBuilder,
  TPaginatedQueryResult,
  TPaginatedQueryResultOptions,
  TGraphqlPaginatedQueryResult,
  TGraphqlPaginatedQueryResultOptions,
  TBuildFieldMeta,
  TTransformType,
  TTransformBuildName,
  TModelFieldsConfig,
  TGraphqlBaseModel,
  TLimitGraphqlListParams,
  TLimitGraphqlLisResult,
  TCountGraphqlListParams,
  TCountGraphqlListResult,
} from './types';

const isFunction = <Fn>(value: unknown): value is Fn =>
  typeof value === 'function';

const isString = (value: unknown): value is string => typeof value === 'string';

const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]';

const isBuilderFunction = (value: unknown): value is TTransformBuildName =>
  ['build', 'buildGraphql', 'buildRest'].includes(value as TTransformBuildName);

const upperFirst = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

const lowerFirst = (value: string): string =>
  value.charAt(0).toLowerCase() + value.slice(1);

const omitOne = <T, K extends keyof T>(entity: T, prop: K): Omit<T, K> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [prop]: deleted, ...newState } = entity;
  return newState;
};
const omitMany = <T, K extends keyof T = keyof T>(
  entity: T,
  ...props: K[]
): Omit<T, K> => {
  let result = entity as Omit<T, K>;
  props.forEach((prop) => {
    result = omitOne(result, prop as unknown as keyof Omit<T, K>) as Omit<T, K>;
  });
  return result;
};

const pickMany = <T, K extends keyof T = keyof T>(
  entity: T,
  ...props: K[]
): Pick<T, K> => {
  const entries = props.map((prop) => [prop, entity[prop]]);
  return Object.fromEntries(entries);
};

const convertBuiltNameToTransformName = (
  buildName: TTransformBuildName
): TTransformType => {
  switch (buildName) {
    case 'build':
      return 'default';
    case 'buildGraphql':
      return 'graphql';
    case 'buildRest':
      return 'rest';
    default:
      throw new Error(`Unknown property build name ${buildName}`);
  }
};

const convertTransformNameToBuildName = (
  transformName: TTransformType
): TTransformBuildName => {
  switch (transformName) {
    case 'default':
      return 'build';
    case 'graphql':
      return 'buildGraphql';
    case 'rest':
      return 'buildRest';
    default:
      throw new Error(`Unknown property build name ${transformName}`);
  }
};

const toExpandedReference =
  (typeId?: string) =>
  (data?: TReferenceObject): TExpandedReference | null =>
    typeId && data?.id
      ? {
          typeId,
          id: data.id,
          obj: data,
        }
      : null;

const toRestPaginatedQueryResult = <Model>(
  list: Model[],
  { total = 100, offset = 0 }: TPaginatedQueryResultOptions = {}
): TPaginatedQueryResult<Model> => {
  return {
    count: list.length || 0,
    total,
    offset,
    results: list,
  };
};

const toGraphqlPaginatedQueryResult = <Model>(
  list: Model[],
  { name, __typename, ...remainingOptions }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<Model> => {
  return {
    __typename: __typename ?? `${name}QueryResult`,
    ...toRestPaginatedQueryResult(list, remainingOptions),
  };
};

const buildField = <Model, TransformedModel = Model>(
  builder: Model | TBuilder<Model>,
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): TransformedModel => {
  const buildName = convertTransformNameToBuildName(transformName);
  // @ts-ignore: TS does not know about the `Model` being an object.
  const builderField = builder?.[buildName];
  // We need to cast this to `() => Model` as otherwise the value is unknown.
  // We know it's a function because of the proxy builder.
  const builderFn = builderField as (() => TransformedModel) | undefined;
  if (!builderFn) {
    throw new Error(
      `Builder with name '${buildName}' does not exist on field '${String(
        meta?.fieldToBuild
      )}'.`
    );
  }
  return builderFn();
};

const buildFields = <Model, TransformedModel = Model>(
  builders: (Model | TBuilder<Model>)[],
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): TransformedModel[] => {
  return builders.map((builder) =>
    buildField<Model, TransformedModel>(builder, transformName, meta)
  );
};
/**
 * @deprecated Use `buildLimitGraphqlList` or `buildCountGraphqlList` instead.
 */
const buildGraphqlList = <Model, GraphqlModel = Model>(
  builders: TBuilder<Model>[],
  { name, total, offset, __typename }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<GraphqlModel> => {
  return toGraphqlPaginatedQueryResult<GraphqlModel>(
    buildFields<Model, GraphqlModel>(builders, 'graphql'),
    {
      name,
      __typename,
      total,
      offset,
    }
  );
};

const buildLimitGraphqlList = <
  GraphqlModel extends TGraphqlBaseModel,
  TypeName extends string,
>(
  builders: TBuilder<GraphqlModel>[],
  params: TLimitGraphqlListParams<TypeName>
): TLimitGraphqlLisResult<GraphqlModel, TypeName> => {
  const models = buildFields<GraphqlModel>(builders, 'graphql');

  return {
    limit: params.limit ?? 100,
    offset: params.offset ?? 0,
    total: models.length,
    results: models,
    __typename: params.__typename,
  };
};

const buildCountGraphqlList = <
  GraphqlModel extends TGraphqlBaseModel,
  TypeName extends string,
>(
  builders: TBuilder<GraphqlModel>[],
  params: TCountGraphqlListParams<TypeName>
): TCountGraphqlListResult<GraphqlModel, TypeName> => {
  const models = buildFields<GraphqlModel>(builders, 'graphql');

  return {
    count: params.count ?? 100,
    exists: params.exists ?? models.length > 0,
    offset: params.offset ?? 0,
    total: models.length,
    results: models,
    __typename: params.__typename,
  };
};

const buildRestList = <Model, RestModel = Model>(
  builders: TBuilder<Model>[],
  { total, offset }: TPaginatedQueryResultOptions
): TPaginatedQueryResult<RestModel> => {
  return toRestPaginatedQueryResult<RestModel>(
    buildFields<Model, RestModel>(builders, 'rest'),
    {
      total,
      offset,
    }
  );
};

const createSpecializedTransformers = <TModel>({
  type,
}: {
  type: 'rest' | 'graphql';
}) => {
  return {
    [type]: Transformer<TModel, TModel>(type, {
      buildFields: 'all',
    }),
  };
};

type TCreateSpecializedBuilderParams<TModel> = {
  modelFieldsConfig: TModelFieldsConfig<TModel>;
  type: 'rest' | 'graphql';
  name: string;
};
const createSpecializedBuilder = <TModel>(
  params: TCreateSpecializedBuilderParams<TModel>
) => {
  const modelBuilder = Builder<TModel>({
    type: params.type,
    generator: Generator<TModel>({
      fields: params.modelFieldsConfig.fields,
    }),
    name: params.name,
    transformers: createSpecializedTransformers<TModel>({
      type: params.type,
    }),
    postBuild: params.modelFieldsConfig.postBuild,
  });

  return modelBuilder as TBuilder<TModel>;
};

const createCompatibilityBuilder = <TModel>(params: {
  name: string;
  modelFieldsConfig: {
    rest: TModelFieldsConfig<TModel>;
    graphql: TModelFieldsConfig<TModel>;
  };
}) => {
  const modelBuilder = Builder<TModel>({
    name: params.name,
    compatConfig: {
      generators: {
        rest: Generator<TModel>({
          fields: params.modelFieldsConfig.rest.fields,
        }),
        graphql: Generator<TModel>({
          fields: params.modelFieldsConfig.graphql.fields,
        }),
      },
      postBuilders: {
        rest: params.modelFieldsConfig.rest.postBuild,
        graphql: params.modelFieldsConfig.graphql.postBuild,
      },
    },
    transformers: {
      ...createSpecializedTransformers<TModel>({
        type: 'rest',
      }),
      ...createSpecializedTransformers<TModel>({
        type: 'graphql',
      }),
    },
  });

  return modelBuilder;
};

export {
  isFunction,
  isString,
  isObject,
  isBuilderFunction,
  upperFirst,
  lowerFirst,
  omitMany,
  pickMany,
  convertBuiltNameToTransformName,
  convertTransformNameToBuildName,
  toExpandedReference,
  toRestPaginatedQueryResult,
  toGraphqlPaginatedQueryResult,
  buildField,
  buildFields,
  buildGraphqlList,
  buildCountGraphqlList,
  buildLimitGraphqlList,
  buildRestList,
  createSpecializedTransformers,
  createSpecializedBuilder,
  createCompatibilityBuilder,
};
