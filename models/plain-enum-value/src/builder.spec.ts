/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TPlainEnumValue, TPlainEnumValueGraphql } from './types';
import * as PlainEnumValue from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPlainEnumValue, TPlainEnumValue>(
      'default',
      PlainEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TPlainEnumValue, TPlainEnumValue>(
      'rest',
      PlainEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TPlainEnumValue, TPlainEnumValueGraphql>(
      'graphql',
      PlainEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );
});
