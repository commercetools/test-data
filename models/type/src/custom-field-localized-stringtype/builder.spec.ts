/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomFieldLocalizedStringTypeGraphql,
  type TCustomFieldLocalizedStringType
} from './types';
import * as CustomFieldLocalizedStringType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringType,
      TCustomFieldLocalizedStringType
    >(
      'default',
      CustomFieldLocalizedStringType.random(),
      expect.objectContaining({
        name: 'LocalizedString',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringType,
      TCustomFieldLocalizedStringType
    >(
      'rest',
      CustomFieldLocalizedStringType.random(),
      expect.objectContaining({
        name: 'LocalizedString',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringType,
      TCustomFieldLocalizedStringTypeGraphql
    >(
      'graphql',
      CustomFieldLocalizedStringType.random(),
      expect.objectContaining({
        name: 'LocalizedString',
        __typename: 'LocalizableStringtypeCustomFieldType',
      })
    )
  );
});
