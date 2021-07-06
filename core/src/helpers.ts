import type {
  Json,
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

const toRestPaginatedQueryResult = <Model extends Json>(
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

const toGraphqlPaginatedQueryResult = <Model extends Json>(
  list: Model[],
  { name, __typename, ...remainingOptions }: TGraphqlPaginatedQueryResultOptions
): TGraphqlPaginatedQueryResult<Model> => {
  return {
    __typename: __typename ?? `${name}QueryResult`,
    ...toRestPaginatedQueryResult(list, remainingOptions),
  };
};

const buildField = <Model extends Json>(
  builder: Model | TBuilder<Model>,
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Model => {
  const buildName = convertTransformNameToBuildName(transformName);
  if (!builder[buildName]) {
    throw new Error(
      `Builder with name '${buildName}' does not exist on field '${meta?.fieldToBuild}'.`
    );
  }
  // We need to cast this to `() => Model` as otherwise the value is unknown.
  // We know it's a function because of the proxy builder.
  return (builder[buildName] as () => Model)();
};

const buildFields = <Model extends Json>(
  builders: (Model | TBuilder<Model>)[],
  transformName: TTransformType = 'default',
  meta?: TBuildFieldMeta<Model>
): Model[] =>
  builders.map((builder) => buildField(builder, transformName, meta));

const buildGraphqlList = <Model extends Json>(
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
};
