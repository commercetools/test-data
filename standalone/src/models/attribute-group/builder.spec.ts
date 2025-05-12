/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../core/test-utils';
import { LocalizedString } from '../commons';
import type { TAttributeGroup, TAttributeGroupGraphql } from './types';
import * as AttributeGroup from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeGroup, TAttributeGroupGraphql>(
      'graphql',
      AttributeGroup.random(),
      expect.objectContaining({
        __typename: 'AttributeGroup',
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
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        description: expect.any(String),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
      })
    )
  );

  it('should allow customization', () => {
    const name = LocalizedString.random().en('my-attribute-group');
    const description = LocalizedString.random().en('my-description');
    const attributes = [{ key: 'my-attribute' }];
    const attributeGroup = AttributeGroup.random()
      .name(name)
      .description(description)
      .attributes(attributes)
      .buildGraphql<TAttributeGroupGraphql>();

    expect(attributeGroup.name).toEqual('my-attribute-group');
    expect(attributeGroup.description).toEqual('my-description');
    expect(attributeGroup.attributes).toEqual([{ key: 'my-attribute' }]);
    expect(attributeGroup.nameAllLocales).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'my-attribute-group',
          __typename: 'LocalizedString',
        }),
      ])
    );
    expect(attributeGroup.descriptionAllLocales).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'my-description',
          __typename: 'LocalizedString',
        }),
      ])
    );
  });
});
