/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAttributePlainEnumValueDraft,
  TAttributePlainEnumValueDraftGraphql,
} from '../types';
import * as AttributePlainEnumValueDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributePlainEnumValueDraft,
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
      TAttributePlainEnumValueDraft,
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
