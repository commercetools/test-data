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
const removeProps = <Model extends Json>(
  propsToRemove: string[],
  built: Model
): Partial<Model> => {
  propsToRemove.forEach((propToDelete) => {
    delete built[propToDelete];
  });
  return built;
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
const isDefaultTransform = (transformName: string): boolean =>
  transformName === 'default';
const isDefaultBuild = (buildName: string): boolean => buildName === 'build';
const convertBuiltNameToTransformName = (buildName: string): string => {
  if (isDefaultBuild(buildName)) return 'default';
  return lowerFirst(buildName.replace('build', ''));
};
const convertTransformNameToBuildName = (transformName: string): string => {
  if (isDefaultTransform(transformName)) return 'build';
  return `build${upperFirst(transformName)}`;
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
  transformName = '',
  meta?: TBuildFieldMeta
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
  transformName = '',
  meta?: TBuildFieldMeta
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
  removeProps,
  onlyProps,
  isDefaultTransform,
  isDefaultBuild,
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
