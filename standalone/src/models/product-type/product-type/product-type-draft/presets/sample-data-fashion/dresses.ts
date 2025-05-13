import { LocalizedStringDraft } from '@/models/commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
  AttributePlainEnumValueDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const dresses = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('dresses')
    .name('Dresses')
    .description('Dresses')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Maxi').label('Maxi'),
            AttributePlainEnumValueDraft.random()
              .key('Knee Length')
              .label('Knee Length'),
            AttributePlainEnumValueDraft.random().key('Mini').label('Mini'),
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('White').label('White'),
            AttributePlainEnumValueDraft.random().key('Pink').label('Pink'),
            AttributePlainEnumValueDraft.random().key('Floral').label('Floral'),
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default dresses;
