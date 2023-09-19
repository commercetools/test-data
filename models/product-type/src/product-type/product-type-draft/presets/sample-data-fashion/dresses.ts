import { LocalizedString } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
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
        .label(LocalizedString.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedString.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            {
              key: 'Maxi',
              label: 'Maxi',
            },
            {
              key: 'Knee Length',
              label: 'Knee Length',
            },
            {
              key: 'Mini',
              label: 'Mini',
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
          AttributeEnumTypeDraft.random().values([
            {
              key: 'White',
              label: 'White',
            },
            {
              key: 'Pink',
              label: 'Pink',
            },
            {
              key: 'Floral',
              label: 'Floral',
            },
          ])
        )
        .attributeConstraint('CombinationUnique')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default dresses;
