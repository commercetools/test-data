import { LocalizedStringDraft } from '../../../../../commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
  AttributePlainEnumValueDraft,
} from '../../../../index';
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
        .label(LocalizedStringDraft.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Size'))
        .isRequired(true)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Small').label('Small'),
            AttributePlainEnumValueDraft.random().key('Medium').label('Medium'),
            AttributePlainEnumValueDraft.random().key('Large').label('Large'),
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('fit')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Fit'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Fit'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Slim').label('Slim'),
            AttributePlainEnumValueDraft.random()
              .key('Straight')
              .label('Straight'),
            AttributePlainEnumValueDraft.random().key('Flair').label('Flair'),
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Blue').label('Blue'),
            AttributePlainEnumValueDraft.random().key('Black').label('Black'),
            AttributePlainEnumValueDraft.random().key('White').label('White'),
          ])
        )
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Ankle').label('Ankle'),
            AttributePlainEnumValueDraft.random().key('Crop').label('Crop'),
            AttributePlainEnumValueDraft.random()
              .key('Extra Long')
              .label('Extra Long'),
          ])
        )
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default pants;
