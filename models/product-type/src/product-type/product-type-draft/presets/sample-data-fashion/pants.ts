import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import { AttributeEnumTypeDraft } from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const pants = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('pants')
    .name('Pants')
    .description('Pants')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Size'))
        .isRequired(true)
        .type(
          AttributeEnumTypeDraft.random().values([
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
          AttributeEnumTypeDraft.random().values([
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
          AttributeEnumTypeDraft.random().values([
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
          AttributeEnumTypeDraft.random().values([
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
