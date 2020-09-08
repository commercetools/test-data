export type Json = {
  [key: string]: unknown;
};

export type TReferenceObject = {
  id?: string;
};

export type TExpandedReference = {
  typeId: string;
  id: TReferenceObject['id'];
  obj: TReferenceObject;
};

export type TPaginatedQueryResultOptions = {
  total?: number;
  offset?: number;
};

export type TPaginatedQueryResult<Model extends Json> = {
  total: number;
  offset: number;
  count: number;
  results: Model[];
};

export type TGraphqlPaginatedQueryResultOptions = {
  name: string;
} & TPaginatedQueryResultOptions;

export type TGraphqlPaginatedQueryResult<Model extends Json> = {
  __typename: string;
} & TPaginatedQueryResult<Model>;

export type TBuildFieldMeta<Model extends Json> = {
  fieldToBuild: keyof Model;
};

export type TBuilderMapStateFunction<Model extends Json> = (
  state: Partial<Model>
) => Partial<Model>;

export type TGeneratorResult<Model> = {
  generate: (options: { defaults?: Partial<Model> }) => Model;
};

export type TTransformType = 'default' | 'graphql' | 'rest';

export type TTransformBuildName = 'build' | 'buildGraphql' | 'buildRest';

export type TTransformerOptions<
  Model extends Json,
  TransformedModel extends Json
> = {
  addFields?: (args: { fields: Model }) => Partial<TransformedModel>;
  replaceFields?: (args: { fields: Model }) => Partial<Model>;
  removeFields?: (keyof Model)[];
  buildFields?: (keyof Model)[];
};

export interface TTransformer<Model extends Json> {
  type: TTransformType;
  transform(fields: Model): unknown;
}

export type TPropertyFieldUpdater<Model extends Json> = (
  fnOrValue: string | TBuilderMapStateFunction<Model>
) => TPropertyBuilder<Model>;

export type TPropertyBuilder<Model extends Json> = {
  readonly [K in keyof Required<Model>]: TPropertyFieldUpdater<Model>;
} & {
  get: () => Partial<Model>;
  update: (obj: Partial<Model>) => TPropertyBuilder<Model>;
};

export type TFieldUpdater<
  TransformerType extends TTransformType,
  Model extends Json,
  Value,
  FullModel extends Json
> = (
  fnOrValue:
    | TBuilderMapStateFunction<FullModel>
    | TBuilder<TransformerType, Model, FullModel>
    | TBuilder<TransformerType, Model, FullModel>[]
    | Value
) => TBuilder<TransformerType, Model, FullModel>;

export type TFieldBuilderArgs<Model extends Json> = {
  omitFields?: (keyof Model)[];
  keepFields?: (keyof Model)[];
};

export type TBuilder<
  TransformerType extends TTransformType,
  Model extends Json,
  FullModel extends Json = Model
> = {
  [K in keyof Required<Model>]: TFieldUpdater<
    TransformerType,
    Omit<Model, K>,
    Model[K],
    FullModel
  >;
} & {
  build<TransformedModel extends Json>(
    args?: TFieldBuilderArgs<Model>
  ): TransformedModel;
  buildGraphql<TransformedModel extends Json>(
    args?: TFieldBuilderArgs<Model>
  ): 'graphql' extends TransformerType ? TransformedModel : never;
  buildRest<TransformedModel extends Json>(
    args?: TFieldBuilderArgs<Model>
  ): 'rest' extends TransformerType ? TransformedModel : never;
};

export type TDefaultTransformer<
  TransformerType extends TTransformType,
  Model extends Json
> = 'default' extends TransformerType
  ? { default: TTransformer<Model> }
  : never;

export type TGraphqlTransformer<
  TransformerType extends TTransformType,
  Model extends Json
> = 'graphql' extends TransformerType
  ? { graphql: TTransformer<Model> }
  : never;

export type TRestTransformer<
  TransformerType extends TTransformType,
  Model extends Json
> = 'rest' extends TransformerType ? { rest: TTransformer<Model> } : never;

export type TBuilderOptions<Model extends Json> = {
  defaults?: Partial<Model>;
  generator?: TGeneratorResult<Model>;
  transformers?: {
    [Key in TTransformType]?: TTransformer<Model>;
  };
};
