/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker';

type Entries<T> = {
  [K in keyof T]: [key: K, value: T[K]];
}[keyof T][];

export type SequenceFunction<T = unknown> = (counter: number) => T;

export interface SequenceGenerator<T = unknown> {
  generatorType: 'sequence';
  userProvidedFunction: SequenceFunction<T>;
  call: (userProvidedFunction: SequenceFunction<T>, counter: number) => T;
}

export interface FakerGenerator<T = any> {
  generatorType: 'faker';
  call: (fake: Faker) => T;
}

export interface PerBuildGenerator<T = any> {
  generatorType: 'perBuild';
  func: () => T;
  call: (f: () => T) => T;
}

export interface OneOfGenerator<T = any> {
  generatorType: 'oneOf';
  options: T[];
  call: (options: T[]) => T;
}

export type FieldGenerator<T = unknown> =
  | FakerGenerator<T>
  | SequenceGenerator<T>
  | OneOfGenerator<NonNullable<T>>
  | PerBuildGenerator<T>;

export type Field<T> =
  | (T extends Array<infer U>
      ? FieldGenerator<U>[]
      : T extends object
        ? FieldsConfiguration<T>
        : never)
  | T
  | FieldGenerator<T>;

export type FieldsConfiguration<FactoryResultType> = {
  [x in keyof FactoryResultType]: Field<FactoryResultType[x]>;
};

type ExpandedConfigurationFields<FactoryResultType> = {
  [x in keyof FactoryResultType]: FactoryResultType[x];
};

export type Overrides<T> = Partial<{
  readonly [x in keyof T]: Field<T[x]>;
}>;

export interface BuildTimeConfig<FactoryResultType> {
  overrides?: Overrides<FactoryResultType>;
  map?: (
    builtThing: ExpandedConfigurationFields<FactoryResultType>
  ) => ExpandedConfigurationFields<FactoryResultType>;
  traits?: string | string[];
}

export interface TraitsConfiguration<FactoryResultType> {
  readonly [traitName: string]: {
    overrides?: Overrides<FactoryResultType>;
    postBuild?: (
      builtThing: ExpandedConfigurationFields<FactoryResultType>
    ) => ExpandedConfigurationFields<FactoryResultType>;
  };
}

export interface BuildConfiguration<FactoryResultType> {
  readonly fields: FieldsConfiguration<FactoryResultType>;
  readonly traits?: TraitsConfiguration<FactoryResultType>;
  readonly postBuild?: (
    x: ExpandedConfigurationFields<FactoryResultType>
  ) => ExpandedConfigurationFields<FactoryResultType>;
}

const isGenerator = <T>(field: Field<T>): field is FieldGenerator<T> => {
  return !!(field && typeof field === 'object' && 'generatorType' in field);
};

const isSequenceGenerator = <T>(
  generator: FieldGenerator<T>
): generator is SequenceGenerator<T> => generator.generatorType === 'sequence';

const isFakerGenerator = <T>(
  generator: FieldGenerator<T>
): generator is FakerGenerator<T> => generator.generatorType === 'faker';

const isOneOfGenerator = <T>(
  generator: FieldGenerator<T>
): generator is OneOfGenerator<NonNullable<T>> =>
  generator.generatorType === 'oneOf';

const isPerBuildGenerator = <T>(
  generator: FieldGenerator<T>
): generator is PerBuildGenerator => generator.generatorType === 'perBuild';

export type ValueOf<T> = T[keyof T];

const identity = <T>(x: T): T => x;

const buildTimeTraitsArray = <FactoryResultType>(
  buildTimeConfig: BuildTimeConfig<FactoryResultType>
): string[] => {
  const { traits = [] } = buildTimeConfig;
  return Array.isArray(traits) ? traits : [traits];
};

export const build = <FactoryResultType>(
  factoryNameOrConfig: string | BuildConfiguration<FactoryResultType>,
  configObject?: BuildConfiguration<FactoryResultType>
): ((
  buildTimeConfig?: BuildTimeConfig<FactoryResultType>
) => FactoryResultType) => {
  const config = (
    typeof factoryNameOrConfig === 'string' ? configObject : factoryNameOrConfig
  ) as BuildConfiguration<FactoryResultType>;

  let sequenceCounter = 0;

  const expandConfigFields = <FactoryResultType>(
    fields: FieldsConfiguration<FactoryResultType>,
    buildTimeConfig: BuildTimeConfig<FactoryResultType> = {}
  ): ExpandedConfigurationFields<FactoryResultType> => {
    const finalBuiltThing = (
      Object.entries(fields) as Entries<typeof fields>
    ).reduce((acc, [fieldKey, fieldValue]) => {
      const overrides = buildTimeConfig.overrides;

      const traitsArray = buildTimeTraitsArray(buildTimeConfig);

      const traitOverrides = traitsArray.reduce<Overrides<FactoryResultType>>(
        (overrides, currentTraitKey) => {
          const hasTrait = config.traits && config.traits[currentTraitKey];
          if (!hasTrait) {
            console.warn(`Warning: trait '${currentTraitKey}' not found.`);
          }
          const traitsConfig = config.traits
            ? config.traits[currentTraitKey]
            : {};
          return { ...overrides, ...(traitsConfig.overrides || {}) };
        },
        {} as Overrides<FactoryResultType>
      );

      const valueOrOverride =
        overrides?.[fieldKey] || traitOverrides[fieldKey] || fieldValue;

      acc[fieldKey] =
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        expandConfigField<FactoryResultType[keyof FactoryResultType]>(
          valueOrOverride
        );

      return acc;
    }, {} as ExpandedConfigurationFields<FactoryResultType>);

    return finalBuiltThing;
  };

  const expandConfigField = <FactoryResultType>(
    fieldValue: Field<FactoryResultType>
  ): FactoryResultType => {
    let calculatedValue: FactoryResultType;

    if (isGenerator(fieldValue)) {
      if (isSequenceGenerator<FactoryResultType>(fieldValue)) {
        ++sequenceCounter;
        calculatedValue = (
          fieldValue as SequenceGenerator<FactoryResultType>
        ).call(
          (fieldValue as SequenceGenerator<FactoryResultType>)
            .userProvidedFunction,
          sequenceCounter
        );
      } else if (isFakerGenerator<FactoryResultType>(fieldValue)) {
        calculatedValue = fieldValue.call(faker);
      } else if (isOneOfGenerator<FactoryResultType>(fieldValue)) {
        calculatedValue = fieldValue.call(fieldValue.options);
      } else if (isPerBuildGenerator<FactoryResultType>(fieldValue)) {
        calculatedValue = fieldValue.call(fieldValue.func);
      } else {
        throw new Error('Unknown generator type');
      }
    } else if (Array.isArray(fieldValue)) {
      calculatedValue = fieldValue.map((v) =>
        expandConfigField(v)
      ) as FactoryResultType;
    }
    // typeof null === 'object', we need to check for null explicitly
    else if (typeof fieldValue === 'object' && fieldValue) {
      const nestedFieldsObject = fieldValue;

      calculatedValue = expandConfigFields<FactoryResultType>(
        nestedFieldsObject as FieldsConfiguration<FactoryResultType>
      ) as FactoryResultType;
    } else {
      calculatedValue = fieldValue as FactoryResultType;
    }

    return calculatedValue;
  };

  return (buildTimeConfig = {}) => {
    const fieldsToReturn = expandConfigFields(config.fields, buildTimeConfig);

    const traitsArray = buildTimeTraitsArray(buildTimeConfig);
    const traitPostBuilds = traitsArray.map((traitName) => {
      const traitConfig = (config.traits && config.traits[traitName]) || {};
      const postBuild = traitConfig.postBuild || identity;
      return postBuild;
    });

    const afterTraitPostBuildFields = traitPostBuilds.reduce(
      (fields, traitPostBuild) => {
        return traitPostBuild(fields);
      },
      fieldsToReturn
    );
    const postBuild = config.postBuild || identity;
    const buildTimeMapFunc = buildTimeConfig.map || identity;

    return buildTimeMapFunc(postBuild(afterTraitPostBuildFields));
  };
};

export const oneOf = <T>(...options: T[]): OneOfGenerator<T> => {
  return {
    generatorType: 'oneOf',
    options,
    call: (options: T[]): T => {
      const randomIndex = Math.floor(Math.random() * options.length);

      return options[randomIndex];
    },
  };
};

export const bool = () => oneOf<boolean>(true, false);

export function sequence(
  userProvidedFunction?: SequenceFunction<number>
): SequenceGenerator<number>;
export function sequence<T>(
  userProvidedFunction: SequenceFunction<T>
): SequenceGenerator<T>;
export function sequence<T>(
  userProvidedFunction?: SequenceFunction<T>
): SequenceGenerator<T> {
  const internalFunction =
    typeof userProvidedFunction === 'function'
      ? userProvidedFunction
      : (counter: number) => counter as T;

  return {
    generatorType: 'sequence',
    userProvidedFunction: internalFunction,
    call: <T>(userProvidedFunction: SequenceFunction<T>, counter: number) => {
      return userProvidedFunction(counter);
    },
  };
}

export const perBuild = <T>(func: () => T): PerBuildGenerator => {
  return {
    generatorType: 'perBuild',
    func,
    call: (f: () => T): T => {
      return f();
    },
  };
};

export type FakerUserArgs<T = any> = (fake: Faker) => T;

export const fake = <T = any>(
  userDefinedUsage: FakerUserArgs<T>
): FakerGenerator<T> => {
  return {
    generatorType: 'faker',
    call: (faker) => {
      return userDefinedUsage(faker);
    },
  };
};
