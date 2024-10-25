import type { BuildConfiguration } from './@jackfranklin/test-data-bot';
import { build } from './@jackfranklin/test-data-bot';
import type { TBuilder } from './types';

export type GeneratorResultModel<T> = {
  [x in keyof T]: T[x] | TBuilder<T[x]>;
};

export type TGeneratorResult<Model> = {
  generate: () => GeneratorResultModel<Model>;
};

type TGeneratorOptions<Model> = {
  fields: BuildConfiguration<Model>['fields'];
  postBuild?: BuildConfiguration<Model>['postBuild'];
};

function Generator<FactoryResultType extends object>({
  fields,
  postBuild,
}: TGeneratorOptions<
  GeneratorResultModel<FactoryResultType>
>): TGeneratorResult<FactoryResultType> {
  const originalGenerate = build<GeneratorResultModel<FactoryResultType>>({
    fields,
    postBuild,
  });

  return {
    generate() {
      return originalGenerate();
    },
  };
}

export default Generator;
