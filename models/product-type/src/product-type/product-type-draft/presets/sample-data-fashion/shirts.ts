import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

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
        .label(LocalizedStringDraft.presets.empty()['en-US']('Size'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Size'))
        .isRequired(false)
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
