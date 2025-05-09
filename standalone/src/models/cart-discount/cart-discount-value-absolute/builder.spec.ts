/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { faker } from '@faker-js/faker';
import { createBuilderSpec } from '../../../core/test-utils';
import { applicationModes } from './constants';
import type {
  TCartDiscountValueAbsolute,
  TCartDiscountValueAbsoluteCartGraphql,
  TCartDiscountValueAbsoluteGraphql,
} from './types';
import * as CartDiscountValueAbsolute from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsolute
    >(
      'default',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsolute
    >(
      'rest',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    'should build properties for AbsoluteDiscountValue "graphql"',
    createBuilderSpec<
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsoluteGraphql
    >(
      'graphql',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
        __typename: 'AbsoluteDiscountValue',
      })
    )[1]
  );

  it(
    'should build properties for AbsoluteCartDiscountValue "graphql"',
    createBuilderSpec<
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsoluteCartGraphql
    >(
      'graphql',
      CartDiscountValueAbsolute.random().applicationMode(
        faker.helpers.arrayElement(applicationModes)
      ),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
        applicationMode: expect.toBeOneOf(applicationModes),
        __typename: 'AbsoluteCartDiscountValue',
      })
    )[1]
  );
});
