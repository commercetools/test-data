/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueGraphql,
} from './types';
import * as AttributePlainEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributePlainEnumValue, TAttributePlainEnumValue>(
      'default',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributePlainEnumValue, TAttributePlainEnumValue>(
      'rest',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributePlainEnumValue,
      TAttributePlainEnumValueGraphql
    >(
      'graphql',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        __typename: 'PlainEnumValue',
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );
});
