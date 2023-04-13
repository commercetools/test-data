import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductType from '../../';
import * as AttributeType from '../../../../../attribute-type';
import { TProductTypeDraftBuilder } from '../../../types';

const pants = (): TProductTypeDraftBuilder =>
  ProductType.presets
    .empty()
    .key('pants')
    .name('Pants')
    .description('Pants')
    .attributeDefinitions([
      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Size'))
        .isRequired(true)
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
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('fit')
        .label(LocalizedString.presets.empty()['en-US']('Fit'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Fit'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Slim',
              label: 'Slim',
            },
            {
              key: 'Straight',
              label: 'Straight',
            },
            {
              key: 'Flair',
              label: 'Flair',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
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
              key: 'Blue',
              label: 'Blue',
            },
            {
              key: 'Black',
              label: 'Black',
            },
            {
              key: 'White',
              label: 'White',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('length')
        .label(LocalizedString.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Ankle',
              label: 'Ankle',
            },
            {
              key: 'Crop',
              label: 'Crop',
            },
            {
              key: 'Extra Long',
              label: 'Extra Long',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ])
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Size'))
        .isRequired(true)
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
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('fit')
        .label(LocalizedString.presets.empty()['en-US']('Fit'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Fit'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Slim',
              label: 'Slim',
            },
            {
              key: 'Straight',
              label: 'Straight',
            },
            {
              key: 'Flair',
              label: 'Flair',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
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
              key: 'Blue',
              label: 'Blue',
            },
            {
              key: 'Black',
              label: 'Black',
            },
            {
              key: 'White',
              label: 'White',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('length')
        .label(LocalizedString.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Ankle',
              label: 'Ankle',
            },
            {
              key: 'Crop',
              label: 'Crop',
            },
            {
              key: 'Extra Long',
              label: 'Extra Long',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default pants;
