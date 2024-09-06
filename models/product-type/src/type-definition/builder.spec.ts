/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { LocalizedString } from '@commercetools-test-data/commons';
import { FieldDefinition } from '@commercetools-test-data/type';
import { TypeDefinition } from '.';

describe('builder', () => {
  it('should allow customization', () => {
    const typeDefinitionMock = TypeDefinition.random()
      .description(LocalizedString.random())
      .resourceTypeIds(['string 1', 'string 2'])
      .fieldDefinitions([FieldDefinition.random()])
      .buildGraphql();

    expect(typeDefinitionMock).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        description: expect.any(String),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        resourceTypeIds: expect.arrayContaining([expect.any(String)]),
        fieldDefinitions: expect.arrayContaining([
          expect.objectContaining({
            inputHint: expect.any(String),
            __typename: 'FieldDefinition',
          }),
        ]),
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        __typename: 'TypeDefinition',
      })
    );
  });
});
