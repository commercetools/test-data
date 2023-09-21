import { LocalizedString } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeEnumTypeDraft,
  AttributeBooleanTypeDraft,
  AttributeTextTypeDraft,
  AttributeLocalizedTextTypeDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const beddingBundle = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('bedding-bundle')
    .name('Bedding Bundle')
    .description('Product type used to bundle bedding components')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('product-description')
        .label(LocalizedString.presets.empty()['en-GB']('product-description'))
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB']('description of the bundle product')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('SameForAll')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-spec')
        .label(LocalizedString.presets.empty()['en-GB']('Product Spec'))
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('SameForAll')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('blanket')
        .label(LocalizedString.presets.empty()['en-GB']('Blanket'))
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-ref')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .type(AttributeLocalizedTextSetTypeDraft.random().name('reference'))
        .attributeConstraint('None')
        .inputHint('SingleLine'),
    ]);

export default beddingBundle;
