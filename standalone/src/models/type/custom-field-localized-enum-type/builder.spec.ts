/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { type TCustomFieldLocalizedEnumType } from './types';
import * as CustomFieldLocalizedEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedEnumType,
      TCustomFieldLocalizedEnumType
    >(
      'default',
      CustomFieldLocalizedEnumType.random(),
      expect.objectContaining({
        name: 'lenum',
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
      TCustomFieldLocalizedEnumType,
      TCustomFieldLocalizedEnumType
    >(
      'rest',
      CustomFieldLocalizedEnumType.random(),
      expect.objectContaining({
        name: 'lenum',
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
      TCustomFieldLocalizedEnumType,
      TCustomFieldLocalizedEnumType
    >(
      'graphql',
      CustomFieldLocalizedEnumType.random(),
      expect.objectContaining({
        name: 'lenum',
        values: [
          {
            key: expect.any(String),
            labelAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en',
                value: expect.any(String),
                __typename: 'LocalizedString',
              }),
            ]),
            __typename: 'LocalizedEnumValue',
          },
        ],
        __typename: 'LocalizedEnumType',
      })
    )
  );
});
