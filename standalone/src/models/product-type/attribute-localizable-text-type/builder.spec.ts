/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  type TAttributeLocalizableTextType,
  TAttributeLocalizableTextTypeGraphql,
} from './types';
import * as AttributeLocalizableTextType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextType,
      TAttributeLocalizableTextType
    >(
      'default',
      AttributeLocalizableTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextType,
      TAttributeLocalizableTextType
    >(
      'rest',
      AttributeLocalizableTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextType,
      TAttributeLocalizableTextTypeGraphql
    >(
      'graphql',
      AttributeLocalizableTextType.random(),
      expect.objectContaining({
        name: 'ltext',
        __typename: 'LocalizableTextAttributeDefinitionType',
      })
    )
  );
});
