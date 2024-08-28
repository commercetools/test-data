import { isObject } from 'lodash';
import type { BuildConfiguration } from './@jackfranklin/test-data-bot';

import { build } from './@jackfranklin/test-data-bot';
import type { TGeneratorResult } from './types';

type TGeneratorOptions<Model> = {
  fields: BuildConfiguration<Model>['fields'];
  postBuild?: BuildConfiguration<Model>['postBuild'];
};

function Generator<FactoryResultType>({
  fields,
  postBuild,
}: TGeneratorOptions<FactoryResultType>): TGeneratorResult<FactoryResultType> {
  const buildableFieldsNames = Object.entries(fields).reduce<
    (keyof FactoryResultType)[]
  >((buildableFields, [key, value]) => {
    if (
      isObject(value) &&
      'generatorType' in value &&
      value.generatorType === 'nestedModel'
    ) {
      return [...buildableFields, key as keyof FactoryResultType];
    }
    return buildableFields;
  }, []);
  const originalGenerate = build<FactoryResultType>({ fields, postBuild });

  return {
    generate() {
      return {
        generatedFields: originalGenerate(),
        buildableFieldsNames,
      };
    },
  };
}

export default Generator;
