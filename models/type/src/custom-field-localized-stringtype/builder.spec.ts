/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  type TCustomFieldLocalizedStringtype,
  TCustomFieldLocalizedStringtypeGraphql,
} from './types';
import * as CustomFieldLocalizedStringtype from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringtype,
      TCustomFieldLocalizedStringtype
    >(
      'default',
      CustomFieldLocalizedStringtype.random(),
      expect.objectContaining({
        name: 'LocalizedString',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringtype,
      TCustomFieldLocalizedStringtype
    >(
      'rest',
      CustomFieldLocalizedStringtype.random(),
      expect.objectContaining({
        name: 'LocalizedString',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedStringtype,
      TCustomFieldLocalizedStringtypeGraphql
    >(
      'graphql',
      CustomFieldLocalizedStringtype.random(),
      expect.objectContaining({
        name: 'LocalizedString',
        __typename: 'LocalizableStringtypeCustomFieldType',
      })
    )
  );
});
