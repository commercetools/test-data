/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  type TCustomFieldEnumValue,
  TCustomFieldEnumValueGraphql,
} from './types';
import * as CustomFieldEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValue>(
      'default',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValue>(
      'rest',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValueGraphql>(
      'graphql',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
        __typename: 'EnumValue',
      })
    )
  );
});
