import type {
  Json,
  TData,
  TExpandedReference,
  TBuilder,
  TPaginatedQueryResult,
  TPaginatedQueryResultOptions,
  TGraphqlPaginatedQueryResult,
  TGraphqlPaginatedQueryResultOptions,
  TBuildFieldMeta,
  TFieldBuilder,
  TTransformType,
  TTransformBuildName,
} from './types';

const isFunction = <Fn>(value: unknown): value is Fn =>
  typeof value === 'function';
const isString = (value: unknown): value is string => typeof value === 'string';
const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]';
const upperFirst = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);
const lowerFirst = (value: string): string =>
  value.charAt(0).toLowerCase() + value.slice(1);
// const removeProps = <Model extends Json>(
//   propsToRemove: (keyof Model)[],
//   built: Model
// ): Omit<Model, typeof propsToRemove> =>
//   Object.entries(built).reduce((objectWithoutProps, [propKey, propValue]) => {
//     if (propsToRemove.includes(propKey)) {
//       return objectWithoutProps;
//     }
//     return {
//       ...objectWithoutProps,
//       [propKey]: propValue,
//     };
//   }, {});
const omitOne = <T, K extends keyof T>(entity: T, prop: K): Omit<T, K> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [prop]: deleted, ...newState } = entity;
  return newState;
};
const omitMany = <T, K extends keyof T>(entity: T, props: K[]): Omit<T, K> => {
  let result = entity as Omit<T, K>;
  props.forEach((prop) => {
    result = omitOne(result, (prop as unknown) as keyof Omit<T, K>) as Omit<
      T,
      K
    >;
  });
  return result;
};
const onlyProps = <Model extends Json>(
  propsToKeep: string[] | null,
  built: Partial<Model>
): Partial<Model> => {
  if (propsToKeep === null) return built;

  Object.keys(built).forEach((prop) => {
    if (!propsToKeep.includes(prop)) {
      delete built[prop];
    }
  });

  return built;
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
const toExpandedReference = (typeId?: string) => (
  data?: TData
): TExpandedReference | null =>
  typeId && data?.id
    ? {
        typeId,
        id: data.id,
        obj: data,
      }
    : null;
const toRestPaginatedQueryResult = <Model extends Json>(
  list: Partial<Model>[],
  { total = 100, offset = 0 }: TPaginatedQueryResultOptions = {}
): TPaginatedQueryResult<Model> => {
  return {
    count: list.length || 0,
    total,
    offset,
    results: list,
  };
};
const toGraphqlPaginatedQueryResult = <Model extends Json>(
  list: Partial<Model>[],
  { name, ...remainingOptions }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<Model> => {
  return {
    __typename: `${name}QueryResult`,
    ...toRestPaginatedQueryResult(list, remainingOptions),
  };
};
const buildField = <Model extends Json>(
  builder: TBuilder<Model>,
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Partial<Model> => {
  const buildName = convertTransformNameToBuildName(transformName);
  if (!builder[buildName]) {
    throw new Error(
      `Builder with name '${buildName}' does not exist on field '${meta?.fieldToBuild}'.`
    );
  }
  return ((builder[buildName] as unknown) as TFieldBuilder<Model>)();
};
const buildFields = <Model extends Json>(
  builders: TBuilder<Model>[],
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Partial<Model>[] =>
  builders.map((builder) => buildField(builder, transformName, meta));
const buildGraphqlList = <Model extends Json>(
  builders: TBuilder<Model>[],
  { name, total, offset }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<Model> => {
  return toGraphqlPaginatedQueryResult<Model>(
    buildFields<Model>(builders, 'graphql'),
    {
      name,
      total,
      offset,
    }
  );
};
const buildRestList = <Model extends Json>(
  builders: TBuilder<Model>[],
  { total, offset }: TPaginatedQueryResultOptions
): TPaginatedQueryResult<Model> => {
  return toRestPaginatedQueryResult(buildFields(builders, 'rest'), {
    total,
    offset,
  });
};

export {
  isFunction,
  isString,
  isObject,
  upperFirst,
  lowerFirst,
  onlyProps,
  omitMany,
  convertBuiltNameToTransformName,
  convertTransformNameToBuildName,
  toExpandedReference,
  toRestPaginatedQueryResult,
  toGraphqlPaginatedQueryResult,
  buildField,
  buildFields,
  buildGraphqlList,
  buildRestList,
};
