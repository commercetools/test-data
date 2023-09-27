/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeLocalizedEnumTypeDraft,
  TAttributeLocalizedEnumTypeDraftGraphql,
} from '../types';
import * as AttributeLocalizedEnumTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumTypeDraft,
      TAttributeLocalizedEnumTypeDraft
    >(
      'default',
      AttributeLocalizedEnumTypeDraft.random(),
      expect.objectContaining({
        values: [
          expect.objectContaining({
            key: expect.any(String),
            label: expect.objectContaining({
              de: expect.any(String),
              en: expect.any(String),
              fr: expect.any(String),
            }),
          }),
        ],
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumTypeDraft,
      TAttributeLocalizedEnumTypeDraftGraphql
    >(
      'graphql',
      AttributeLocalizedEnumTypeDraft.random(),
      expect.objectContaining({
        lenum: {
          values: [
            expect.objectContaining({
              key: expect.any(String),
              label: expect.arrayContaining([
                expect.objectContaining({
                  locale: 'en',
                  value: expect.any(String),
                }),
              ]),
            }),
          ],
        },
      })
    )
  );
});
