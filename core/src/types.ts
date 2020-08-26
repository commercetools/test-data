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
export type TBuildFieldMeta = {
  fieldToBuild: string;
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
export type TTransformsObject<
  Model extends Json,
  NewModel extends Json = Model
> = {
  [name: string]: {
    addFields?: (args: { fields: Model }) => Partial<NewModel>;
    replaceFields?: (args: { fields: Model }) => Partial<NewModel>;
    removeFields?: string[];
    buildFields?: string[];
  };
};
export type TTransformer<Model extends Json, NewModel extends Json = Model> = {
  hasTransform: (name: string) => boolean;
  transform: (args: { name: string; fields: Model }) => NewModel;
};
export type TPropertyFieldUpdater<Model extends Json> = (
  fnOrValue: string | TMapFunction<Model>
) => TPropertyBuilder<Model>;
export type TPropertyBuilder<Model extends Json> = {
  readonly [K in keyof Required<Model>]: TPropertyFieldUpdater<Model>;
} & {
  get: () => Partial<Model>;
  update: (obj: Partial<Model>) => TPropertyBuilder<Model>;
};
export type TFieldUpdater<Model extends Json, Value, FullModel extends Json> = (
  fnOrValue: TMapFunction<FullModel> | Value
) => TBuilder<Model, FullModel>;
export type TFieldBuilder<Model extends Json> = (args?: {
  omitFields?: string[];
  onlyFields?: string[];
}) => Model;
export type TBuilder<Model extends Json, FullModel extends Json = Model> = {
  [K in keyof Required<Model>]: TFieldUpdater<
    Omit<Model, K>,
    Model[K],
    FullModel
  >;
} & {
  build: TFieldBuilder<FullModel>;
  // TODO: additionally add the fields from the transformer
};
export type TBuilderOptions<
  Model extends Json,
  NewModel extends Json = Model
> = {
  defaults?: Partial<Model>;
  generator?: TGeneratorResult<Model>;
  transformer?: TTransformer<Model, NewModel>;
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
