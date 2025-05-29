/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TAttributeEnumType, TAttributeEnumTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: expect.arrayContaining([
          expect.objectContaining({
            key: expect.any(String),
            label: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: expect.arrayContaining([
          expect.objectContaining({
            key: expect.any(String),
            label: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: expect.objectContaining({
          results: [
            expect.objectContaining({
              key: expect.any(String),
              label: expect.any(String),
              __typename: 'PlainEnumValue',
            }),
          ],
          __typename: 'PlainEnumValueResult',
        }),
        __typename: 'EnumAttributeDefinitionType',
      })
    )
  );
});
