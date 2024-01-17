/* eslint-disable jest/no-conditional-expect */
import { TBuilder, TTransformType } from './types';

function createBuilderSpec<Model, TransformedModel, Expected = {}>(
  transformType: TTransformType,
  builder: TBuilder<Model>,
  expected: Expected
): [name: string, callback: () => void] {
  return [
    `should build properties for "${transformType}"`,
    () => {
      switch (transformType) {
        case 'default': {
          const defaultModel = builder.build<TransformedModel>();
          expect(defaultModel).toEqual(expected);
          break;
        }
        case 'rest': {
          const defaultModel = builder.buildRest<TransformedModel>();
          expect(defaultModel).toEqual(expected);
          break;
        }
        case 'graphql': {
          const defaultModel = builder.buildGraphql<TransformedModel>();
          expect(defaultModel).toEqual(expected);
          break;
        }

        default:
          throw new Error(`Unknown transform type ${transformType}.`);
      }
    },
  ];
}

export { createBuilderSpec };
