/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TImageDraftGraphql, TImageDraft } from '../types';
import * as ImageDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TImageDraft, TImageDraftGraphql>(
      'graphql',
      ImageDraft.random(),
      expect.objectContaining({
        label: expect.any(String),
        url: expect.any(String),
        dimensions: expect.objectContaining({
          width: expect.any(Number),
          height: expect.any(Number),
        }),
      })
    )
  );
});
