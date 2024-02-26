/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeEnumType,
  TAttributeEnumTypeDraft,
  TAttributeEnumTypeDraftGraphql,
} from '../types';
import * as AttributeEnumTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraft>(
      'default',
      AttributeEnumTypeDraft.random(),
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
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraft>(
      'rest',
      AttributeEnumTypeDraft.random(),
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
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraftGraphql>(
      'graphql',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        enum: {
          values: expect.arrayContaining([
            expect.objectContaining({
              key: expect.any(String),
              label: expect.any(String),
            }),
          ]),
        },
      })
    )
  );
});
