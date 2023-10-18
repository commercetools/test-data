/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TLocalizedField, TLocalizedFieldGraphql } from './types';
import * as LocalizedField from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedField, TLocalizedField>(
      'default',
      LocalizedField.random(),
      expect.objectContaining({
        locale: expect.stringMatching(/^(de|en|es)$/),
        value: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLocalizedField, TLocalizedFieldGraphql>(
      'graphql',
      LocalizedField.random(),
      expect.objectContaining({
        __typename: 'LocalizedField',
        locale: expect.stringMatching(/^(de|en|es)$/),
        value: expect.any(String),
      })
    )
  );
});
