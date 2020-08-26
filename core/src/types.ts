export type Json = {
  [key: string]: unknown;
};
export type TData = {
  id: string;
};
export type TExpandedReference = {
  typeId: string;
  id: TData['id'];
  obj: TData;
};
export type TPaginatedQueryResultOptions = {
  total?: number;
  offset?: number;
};
export type TPaginatedQueryResult<Model extends Json> = {
  total: number;
  offset: number;
  count: number;
  results: Partial<Model>[];
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
export type TMapFunction<Model extends Json> = (
  state: Partial<Model>
) => Partial<Model>;
export type TGeneratorOptions<FactoryResultType> = {
  name: string | BuildConfiguration<FactoryResultType>;
  fields: BuildConfiguration<FactoryResultType>['fields'];
  postBuild: BuildConfiguration<FactoryResultType>['postBuild'];
};
export type TGeneratorResult<FactoryResultType> = {
  generate: (options: {
    defaults?: Partial<FactoryResultType>;
  }) => FactoryResultType;
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
  fnOrValue: string | TMapFunction<Model>
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
  fnOrValue: TMapFunction<FullModel> | Value
) => TBuilder<TransformerType, Model, FullModel>;
export type TFieldBuilderArgs<Model extends Json> = {
  omitFields?: (keyof Model)[];
  onlyFields?: (keyof Model)[];
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
    args?: TFieldBuilderArgs<TransformedModel>
  ): TransformedModel;
  buildGraphql<TransformedModel extends Json>(
    args?: TFieldBuilderArgs<TransformedModel>
  ): 'graphql' extends TransformerType ? TransformedModel : never;
  buildRest<TransformedModel extends Json>(
    args?: TFieldBuilderArgs<TransformedModel>
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
  // transformers?: TDefaultTransformer<TransformerType, Model> &
  //   TGraphqlTransformer<TransformerType, Model> &
  //   TRestTransformer<TransformerType, Model>;
  transformers?: {
    [Key in TTransformType]?: TTransformer<Model>;
  };
};

/* TYPES DECLARATIONS FROM @jackfranklin/test-data-bot */
export type SequenceFunction = (counter: number) => unknown;
export interface SequenceGenerator {
  generatorType: 'sequence';
  userProvidedFunction: SequenceFunction;
  call: (userProvidedFunction: SequenceFunction, counter: number) => unknown;
}
export interface FakerGenerator {
  generatorType: 'faker';
  call: (fake: Faker.FakerStatic) => unknown;
}
export interface PerBuildGenerator {
  generatorType: 'perBuild';
  func: () => unknown;
  call: (f: () => unknown) => unknown;
}
export interface OneOfGenerator {
  generatorType: 'oneOf';
  options: unknown[];
  call: <T>(options: T[]) => T;
}
export type FieldGenerator =
  | FakerGenerator
  | SequenceGenerator
  | OneOfGenerator
  | PerBuildGenerator;
export type Field =
  | string
  | number
  | null
  | FieldGenerator
  | {
      [x: string]: Field | {};
    }
  | unknown[];
export type FieldsConfiguration<FactoryResultType> = {
  readonly [x in keyof FactoryResultType]: Field;
};
export interface Overrides {
  [x: string]: Field;
}
export interface TraitsConfiguration<FactoryResultType> {
  readonly [traitName: string]: {
    overrides?: Overrides;
    postBuild?: (builtThing: FactoryResultType) => FactoryResultType;
  };
}
export interface BuildConfiguration<FactoryResultType> {
  readonly fields: FieldsConfiguration<FactoryResultType>;
  readonly traits?: TraitsConfiguration<FactoryResultType>;
  readonly postBuild?: (x: FactoryResultType) => FactoryResultType;
}
/* --- */
