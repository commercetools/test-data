import type { TGeneratorResult } from './types';
import type { BuildConfiguration } from './@jackfranklin/test-data-bot';

import { build } from './@jackfranklin/test-data-bot';

type TGeneratorOptions<Model> = {
  fields: BuildConfiguration<Model>['fields'];
  postBuild?: BuildConfiguration<Model>['postBuild'];
};

function Generator<FactoryResultType>({
  fields,
  postBuild,
}: TGeneratorOptions<FactoryResultType>): TGeneratorResult<FactoryResultType> {
  const originalGenerate = build<FactoryResultType>({ fields, postBuild });

  return {
    generate() {
      return originalGenerate();
    },
  };
}

export default Generator;
