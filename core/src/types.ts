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

export type TPaginatedQueryResult<Model> = {
  total: number;
  offset: number;
  count: number;
  results: Model[];
};

export type TGraphqlPaginatedQueryResultOptions = {
  name?: string;
  __typename?: string;
} & TPaginatedQueryResultOptions;

export type TGraphqlPaginatedQueryResult<Model> = {
  __typename: string;
} & TPaginatedQueryResult<Model>;

export type TBuildFieldMeta<Model> = {
  fieldToBuild: keyof Model;
};

export type TBuilderMapStateFunction<Model> = (
  state: Partial<Model>
) => Partial<Model>;

export type TGeneratorResult<Model> = {
  generate: () => Model;
};

export type TTransformType = 'default' | 'graphql' | 'rest';

export type TTransformBuildName = 'build' | 'buildGraphql' | 'buildRest';

export type TTransformerOptions<Model, TransformedModel> = {
  addFields?: (args: { fields: Model }) => Partial<TransformedModel>;
  removeFields?: (keyof Model)[];
  replaceFields?: (args: { fields: Model }) => TransformedModel;
  buildFields?: (keyof Model)[];
  /** When transforming fields for GraphQL draft models,
   * this flag removes all "__typename" fields from transformed models
   * so that the draft can be used with the API
   */
  isGraphqlDraft?: Boolean;
};

export interface TTransformer<Model> {
  type: TTransformType;
  transform(fields: Model): unknown;
}

export type TPropertyFieldUpdater<Model> = (
  fnOrValue: string | TBuilderMapStateFunction<Model>
) => TPropertyBuilder<Model>;

export type TPropertyBuilder<Model> = {
  readonly [K in keyof Required<Model>]: TPropertyFieldUpdater<Model>;
} & {
  get: () => Partial<Model>;
  update: (obj: Partial<Model>) => TPropertyBuilder<Model>;
};

export type TFieldUpdater<OriginalModel, Value> = <Model = OriginalModel>(
  fnOrValue:
    | TBuilderMapStateFunction<OriginalModel>
    | TBuilder<Model>
    | TBuilder<Model>[]
    | Value
) => TBuilder<OriginalModel>;

export type TFieldBuilderArgs<Model> = {
  omitFields?: (keyof Model)[];
  keepFields?: (keyof Model)[];
};

export type TBuilder<OriginalModel> = {
  [K in keyof Required<OriginalModel>]: TFieldUpdater<
    OriginalModel,
    OriginalModel[K]
  >;
} & {
  build<TransformedModel>(
    args?: TFieldBuilderArgs<OriginalModel>
  ): TransformedModel;
  buildGraphql<TransformedModel>(
    args?: TFieldBuilderArgs<OriginalModel>
  ): TransformedModel;
  buildRest<TransformedModel>(
    args?: TFieldBuilderArgs<OriginalModel>
  ): TransformedModel;
};

export type TDefaultTransformer<
  TransformerType extends TTransformType,
  Model
> = 'default' extends TransformerType
  ? { default: TTransformer<Model> }
  : never;

export type TGraphqlTransformer<
  TransformerType extends TTransformType,
  Model
> = 'graphql' extends TransformerType
  ? { graphql: TTransformer<Model> }
  : never;

export type TRestTransformer<
  TransformerType extends TTransformType,
  Model
> = 'rest' extends TransformerType ? { rest: TTransformer<Model> } : never;

export type TBuilderOptions<Model> = {
  generator?: TGeneratorResult<Model>;
  transformers?: {
    [Key in TTransformType]?: TTransformer<Model>;
  };
};
