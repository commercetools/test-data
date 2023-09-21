import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import {
  AttributeEnumTypeDraft,
  AttributeBooleanTypeDraft,
  AttributeTextTypeDraft,
  AttributeLocalizedTextTypeDraft,
} from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const furnitureAndDecor = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('furniture-and-decor')
    .name('Furniture and decor')
    .description(
      'items with color, fabric, size, finish and/or product spec attributes'
    )
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('productspec')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.'
            )
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('SameForAll')
        .inputHint('MultiLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(
          LocalizedString.presets.empty()['en-GB']('Color')['de-DE']('Farbe')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish')
        .label(
          LocalizedString.presets.empty()['en-GB']('Finish')['de-DE'](' Fertig')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('colorlabel')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Color Label')
            ['de-DE']('Farbetikett')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finishlabel')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Finish Label')
            ['de-DE'](' Fertiges Etikett')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('new-arrival')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .type(AttributeBooleanTypeDraft.random().name('boolean'))
        .attributeConstraint('None')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-GB']('Size'))
        .inputTip(
          LocalizedString.presets.empty()['en-GB']('size set as a string value')
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-description')
        .label(LocalizedString.presets.empty()['en-GB']('Product Description'))
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
        )
        .type(AttributeLocalizedTextTypeDraft.random().name('ltext'))
        .attributeConstraint('SameForAll')
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color-filter')
        .label(LocalizedString.presets.empty()['en-GB']('Color Filter'))
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
        )
        .type(AttributeLocalizedEnumTypeDraft.random().undefined)
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
    ]);

export default furnitureAndDecor;
