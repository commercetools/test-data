/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { type TAttributeLocalizedString } from './types';
import * as AttributeLocalizedTextType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeLocalizedString, TAttributeLocalizedString>(
      'default',
      AttributeLocalizedTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeLocalizedString, TAttributeLocalizedString>(
      'rest',
      AttributeLocalizedTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );

  //There are no graphql tests at this time
});
