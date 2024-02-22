/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueDraft,
  TAttributePlainEnumValueDraftGraphql,
} from '../types';
import * as AttributePlainEnumValueDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributePlainEnumValue,
      TAttributePlainEnumValueDraft
    >(
      'default',
      AttributePlainEnumValueDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributePlainEnumValue,
      TAttributePlainEnumValueDraftGraphql
    >(
      'graphql',
      AttributePlainEnumValueDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );
});
