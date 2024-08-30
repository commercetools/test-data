import Builder from './builder';
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
  TGeneratorResult,
  TSpecializedBuilder,
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

const buildField = <Model>(
  builder: Model | TBuilder<Model>,
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Model => {
  const buildName = convertTransformNameToBuildName(transformName);
  // @ts-ignore: TS does not know about the `Model` being an object.
  const builderField = builder?.[buildName];
  // We need to cast this to `() => Model` as otherwise the value is unknown.
  // We know it's a function because of the proxy builder.
  const builderFn = builderField as (() => Model) | undefined;
  if (!builderFn) {
    throw new Error(
      `Builder with name '${buildName}' does not exist on field '${String(
        meta?.fieldToBuild
      )}'.`
    );
  }
  return builderFn();
};

const buildFields = <Model>(
  builders: (Model | TBuilder<Model>)[],
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Model[] =>
  builders.map((builder) => buildField(builder, transformName, meta));

const buildGraphqlList = <Model>(
  builders: TBuilder<Model>[],
  { name, total, offset, __typename }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<Model> => {
  return toGraphqlPaginatedQueryResult<Model>(
    buildFields<Model>(builders, 'graphql'),
    {
      name,
      __typename,
      total,
      offset,
    }
  );
};

const buildRestList = <Model>(
  builders: TBuilder<Model>[],
  { total, offset }: TPaginatedQueryResultOptions
): TPaginatedQueryResult<Model> => {
  return toRestPaginatedQueryResult(buildFields(builders, 'rest'), {
    total,
    offset,
  });
};

type TCreateSpecializedTransformersParams<TModel> = {
  type: 'rest' | 'graphql';
  buildFields?: (keyof TModel)[];
};
const createSpecializedTransformers = <TModel>({
  type,
  buildFields,
}: TCreateSpecializedTransformersParams<TModel>) => {
  return {
    [type]: Transformer<TModel, TModel>(type, {
      buildFields: buildFields,
    }),
  };
};

type TCreateSpecializedBuilderParams<TModel> = {
  generator: TGeneratorResult<TModel>;
  type: 'rest' | 'graphql';
  buildFields?: (keyof TModel)[];
  name: string;
};
const createSpecializedBuilder = <TModel>(
  params: TCreateSpecializedBuilderParams<TModel>
) => {
  const modelBuilder = Builder<TModel>({
    type: params.type,
    generator: params.generator,
    name: params.name,
    transformers: createSpecializedTransformers<TModel>({
      type: params.type,
      buildFields: params.buildFields,
    }),
  });

  return modelBuilder as TSpecializedBuilder<TModel>;
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
  buildRestList,
  createSpecializedTransformers,
  createSpecializedBuilder,
};
