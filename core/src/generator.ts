import type { TGeneratorOptions, TGeneratorResult } from './types';

import { build } from '@jackfranklin/test-data-bot';

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

function Generator<FactoryResultType>({
  name,
  fields,
  postBuild,
}: TGeneratorOptions<FactoryResultType>): TGeneratorResult<FactoryResultType> {
  const generate = build(name, {
    fields,
    postBuild,
  });

  return {
    generate({ defaults = {} } = {}) {
      return generate({
        overrides: (defaults as unknown) as Overrides,
      });
    },
  };
}

export default Generator;
