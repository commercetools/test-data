import { LocalizedString } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
  AttributeTextTypeDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const accessories = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('accessories')
    .name('Accessories')
    .description('Accessories')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('type')
        .label(LocalizedString.presets.empty()['en-US']('Type'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Type'))
        .isRequired(true)
        .type(
          AttributeEnumTypeDraft.random().values([
            {
              key: 'Jewelry',
              label: 'Jewelry',
            },
            {
              key: 'Bag',
              label: 'Bag',
            },
            {
              key: 'Shoes',
              label: 'Shoes',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('engraving')
        .label(LocalizedString.presets.empty()['en-US']('Engraving'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Engraving'))
        .isRequired(false)
        .type(AttributeTextTypeDraft.random().name('text'))
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default accessories;
