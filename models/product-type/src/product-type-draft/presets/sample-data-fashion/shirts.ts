import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import * as AttributeType from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductTypeDraft from '../..';
import { TProductTypeDraftBuilder } from '../../../types';

const shirts = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('shirts')
    .name('Shirts')
    .description('Shirts')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Size'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Small',
              label: 'Small',
            },
            {
              key: 'Medium',
              label: 'Medium',
            },
            {
              key: 'Large',
              label: 'Large',
            },
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(LocalizedString.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Red',
              label: 'Red',
            },
            {
              key: 'Green',
              label: 'Green',
            },
            {
              key: 'Purple',
              label: 'Purple',
            },
            {
              key: 'Multi-Color',
              label: 'Multi-Color',
            },
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ])
    .attributeDefinitions([
      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Size'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Small',
              label: 'Small',
            },
            {
              key: 'Medium',
              label: 'Medium',
            },
            {
              key: 'Large',
              label: 'Large',
            },
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(LocalizedString.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Red',
              label: 'Red',
            },
            {
              key: 'Green',
              label: 'Green',
            },
            {
              key: 'Purple',
              label: 'Purple',
            },
            {
              key: 'Multi-Color',
              label: 'Multi-Color',
            },
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default shirts;
