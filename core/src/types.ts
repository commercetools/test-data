import { Field } from './@jackfranklin/test-data-bot';

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
  generate: () => {
    generatedFields: Model;
    buildableFieldsNames: (keyof Model)[];
  };
};

export type TTransformType = 'default' | 'graphql' | 'rest';

export type TTransformBuildName = 'build' | 'buildGraphql' | 'buildRest';

export type TTransformerOptions<Model, TransformedModel> = {
  addFields?: (args: { fields: Model }) => Partial<TransformedModel>;
  removeFields?: (keyof Model)[];
  replaceFields?: (args: { fields: Model }) => TransformedModel;
  buildFields?: (keyof Model)[] | false;
};

export type TTransformFnParams<Model> = {
  fields: Model;
  buildableFieldsNames?: (keyof Model)[];
  builderName?: string;
};

export interface TTransformer<Model> {
  type: TTransformType;
  transform(params: TTransformFnParams<Model>): unknown;
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
  Model,
> = 'default' extends TransformerType
  ? { default: TTransformer<Model> }
  : never;

export type TGraphqlTransformer<
  TransformerType extends TTransformType,
  Model,
> = 'graphql' extends TransformerType
  ? { graphql: TTransformer<Model> }
  : never;

export type TRestTransformer<
  TransformerType extends TTransformType,
  Model,
> = 'rest' extends TransformerType ? { rest: TTransformer<Model> } : never;

export type TModelInitializerConfig<TModel> = {
  fields: Record<keyof TModel, Field>;
  postBuild?: (mode: TModel) => Partial<TModel>;
};

export type TBuilderOptions<Model> = {
  initializerConfig?: TModelInitializerConfig<Model>;
  generator?: TGeneratorResult<Model>;
  transformers?: {
    [Key in TTransformType]?: TTransformer<Model>;
  };
  type?: 'rest' | 'graphql';
  name?: string;
  postBuild?: (fields: Model) => Partial<Model>;
};

export type TSpecializedBuilder<TModel> = Omit<
  TBuilder<TModel>,
  'build' | 'buildRest' | 'buildGraphql'
> & {
  build: () => TModel;
};
