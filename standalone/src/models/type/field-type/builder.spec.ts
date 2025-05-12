/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import type { FieldType as FieldTypeSDK } from '@commercetools/platform-sdk';
import { createBuilderSpec } from '../../../core/test-utils';
import { typeNames, graphqlTypenameByFieldTypeName } from './constants';
import { TFieldType, TFieldTypeGraphql } from './types';
import { FieldType } from '.';

const getMatchingStrings = (values: string[]) =>
  new RegExp(`^(${values.join('|')})$`);

describe('builder', () => {
  it(
    ...createBuilderSpec<TFieldType, TFieldType>(
      'default',
      FieldType.random(),
      expect.objectContaining({
        name: expect.stringMatching(getMatchingStrings(typeNames)),
        elementType: null,
        values: null,
        referenceTypeId: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TFieldType, TFieldTypeGraphql>(
      'graphql',
      FieldType.random(),
      expect.objectContaining({
        name: expect.stringMatching(getMatchingStrings(typeNames)),
        __typename: expect.stringMatching(
          getMatchingStrings(Object.values(graphqlTypenameByFieldTypeName))
        ),
      })
    )
  );

  describe('should allow customization', () => {
    it.each(Object.entries(graphqlTypenameByFieldTypeName))(
      'should return correct typename for %s',
      (name) => {
        const fieldTypeMock = FieldType.random()
          .name(name as FieldTypeSDK['name'])
          .buildGraphql();

        expect(fieldTypeMock).toEqual(
          expect.objectContaining({
            name,
            __typename: `${name}Type`,
          })
        );
      }
    );
  });
});
