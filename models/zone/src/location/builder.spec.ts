/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TLocation } from './types';
import * as Location from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocation, TLocation>(
      'default',
      Location.random(),
      expect.objectContaining({
        country: expect.any(String),
        state: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLocation, TLocation>(
      'rest',
      Location.random(),
      expect.objectContaining({
        country: expect.any(String),
        state: expect.any(String),
      })
    )
  );
  //There are no graphql tests at this time
});
