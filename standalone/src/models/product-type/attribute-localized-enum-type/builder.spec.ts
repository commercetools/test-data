/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { type TAttributeLocalizedEnumType } from './types';
import * as AttributeLocalizedEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumType,
      TAttributeLocalizedEnumType
    >(
      'default',
      AttributeLocalizedEnumType.random(),
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
      TAttributeLocalizedEnumType,
      TAttributeLocalizedEnumType
    >(
      'rest',
      AttributeLocalizedEnumType.random(),
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
      TAttributeLocalizedEnumType,
      TAttributeLocalizedEnumType
    >(
      'graphql',
      AttributeLocalizedEnumType.random(),
      expect.objectContaining({
        name: 'lenum',
        values: expect.objectContaining({
          results: [
            expect.objectContaining({
              key: expect.any(String),
              labelAllLocales: expect.arrayContaining([
                expect.objectContaining({
                  locale: 'en',
                  value: expect.any(String),
                  __typename: 'LocalizedString',
                }),
              ]),
              __typename: 'LocalizableEnumValueType',
            }),
          ],
          __typename: 'LocalizableEnumValueTypeResult',
        }),
        __typename: 'LocalizableEnumAttributeDefinitionType',
      })
    )
  );
});
