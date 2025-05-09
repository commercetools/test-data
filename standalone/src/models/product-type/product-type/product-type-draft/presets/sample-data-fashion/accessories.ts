import { LocalizedStringDraft } from '../../../../../commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
  AttributePlainEnumValueDraft,
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
        .label(LocalizedStringDraft.presets.empty()['en-US']('Type'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Type'))
        .isRequired(true)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random()
              .key('Jewelry')
              .label('Jewelry'),
            AttributePlainEnumValueDraft.random().key('Bag').label('Bag'),
            AttributePlainEnumValueDraft.random().key('Shoes').label('Shoes'),
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('engraving')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Engraving'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Engraving'))
        .isRequired(false)
        .type(AttributeTextTypeDraft.random().name('text'))
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default accessories;
