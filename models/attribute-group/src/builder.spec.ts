/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeGroup, TAttributeGroupGraphql } from './types';
import * as AttributeGroup from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeGroup, TAttributeGroupGraphql>(
      'graphql',
      AttributeGroup.random(),
      expect.objectContaining({
        __typename: 'AttributeGroup',
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
      })
    )
  );
});
