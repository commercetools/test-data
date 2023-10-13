/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TLocalizedField } from './types';
import * as LocalizedField from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedField, TLocalizedField>(
      'default',
      LocalizedField.random(),
      expect.objectContaining({
        locale: expect.any(String),
        value: expect.any(String),
      })
    )
  );
  it('foo bar', () => {
    const data = LocalizedField.random();
    console.log({ data });
  });
  // it(
  //   ...createBuilderSpec<TLocalizedField, TLocalizedFieldGraphql>(
  //     'graphql',
  //     LocalizedField.random(),
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         __typename: 'LocalizedString',
  //         locale: 'de',
  //         value: expect.any(String),
  //       }),
  //       expect.objectContaining({
  //         __typename: 'LocalizedString',
  //         locale: 'en',
  //         value: expect.any(String),
  //       }),
  //       expect.objectContaining({
  //         __typename: 'LocalizedString',
  //         locale: 'fr',
  //         value: expect.any(String),
  //       }),
  //     ])
  //   )
  // );
});
