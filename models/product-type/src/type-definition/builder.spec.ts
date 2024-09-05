/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TTypeDefinition, TTypeDefinitionGraphql } from './types';
import { TypeDefinition } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTypeDefinition, TTypeDefinition>(
      'default',
      TypeDefinition.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        fieldDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            required: expect.any(Boolean),
          }),
        ]),
      })
    )
  );
  it(
    ...createBuilderSpec<TTypeDefinition, TTypeDefinitionGraphql>(
      'graphql',
      TypeDefinition.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        fieldDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            required: expect.any(Boolean),
          }),
        ]),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(String),
          }),
        ]),
        __typename: 'TypeDefinition',
      })
    )
  );
});
