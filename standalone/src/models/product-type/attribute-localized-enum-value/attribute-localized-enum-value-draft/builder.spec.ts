/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAttributeLocalizedEnumValue,
  TAttributeLocalizedEnumValueDraft,
  TAttributeLocalizedEnumValueDraftGraphql,
} from '../types';
import * as AttributeLocalizedEnumValueDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumValue,
      TAttributeLocalizedEnumValueDraft
    >(
      'default',
      AttributeLocalizedEnumValueDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumValue,
      TAttributeLocalizedEnumValueDraftGraphql
    >(
      'graphql',
      AttributeLocalizedEnumValueDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.arrayContaining([
          expect.objectContaining({ locale: 'en', value: expect.any(String) }),
        ]),
      })
    )
  );
});
