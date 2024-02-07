import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import {
  AttributeBooleanTypeDraft,
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const jackets = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('jackets')
    .name('Jackets')
    .description('Jackets')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('sleeve_length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('sleeve_length'))
        .inputTip(
          LocalizedStringDraft.presets.empty()['en-US']('sleeve_length')
        )
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            {
              key: 'Crop',
              label: 'Crop',
            },
            {
              key: 'Normal',
              label: 'Normal',
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
      AttributeDefinitionDraft.presets
        .empty()
        .name('cotton')
        .label(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .isRequired(false)
        .type(AttributeBooleanTypeDraft.random().name('boolean'))
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default jackets;
