/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TEnumValue, TEnumValueGraphql } from './types';
import { EnumValue } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TEnumValue, TEnumValue>(
      'default',
      EnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TEnumValue, TEnumValueGraphql>(
      'graphql',
      EnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
        __typename: 'EnumValue',
      })
    )
  );

  it('should allow customization', () => {
    const key = 'test-key';
    const label = 'test label';

    const enumValueMock = EnumValue.random()
      .key(key)
      .label(label)
      .buildGraphql();

    expect(enumValueMock).toEqual({
      key,
      label,
      __typename: 'EnumValue',
    });
  });
});
