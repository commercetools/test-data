/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { LocalizedString } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { FieldDefinition } from '@commercetools-test-data/type';
import { TTypeDefinition, TTypeDefinitionGraphql } from './types';
import { TypeDefinition } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTypeDefinition, TTypeDefinition>(
      'default',
      TypeDefinition.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        fieldDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            required: expect.any(Boolean),
          }),
        ]),
      })
    )
  );
  it(
    ...createBuilderSpec<TTypeDefinition, TTypeDefinitionGraphql>(
      'graphql',
      TypeDefinition.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        fieldDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            required: expect.any(Boolean),
          }),
        ]),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(String),
          }),
        ]),
        __typename: 'TypeDefinition',
      })
    )
  );

  it('should allow customization', () => {
    const id = 'test-id';
    const key = 'test key';
    const nameEn = 'name in english';
    const required = true;

    const name = LocalizedString.random().en(nameEn);
    const fieldDefinitions = FieldDefinition.random().required(required);

    const typeDefinitionMock = TypeDefinition.random()
      .id(id)
      .key(key)
      .name(name)
      // TODO: fix TS error
      .fieldDefinitions(fieldDefinitions)
      .buildGraphql();

    expect(typeDefinitionMock).toEqual(
      expect.objectContaining({
        id,
        key,
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            value: nameEn,
          }),
        ]),
        fieldDefinitions: expect.objectContaining({ required }),
        __typename: 'TypeDefinition',
      })
    );
  });
});
