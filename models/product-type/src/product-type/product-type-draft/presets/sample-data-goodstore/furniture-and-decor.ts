import { LocalizedString } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeBooleanTypeDraft,
  AttributeLocalizedEnumValue,
} from '../../../../index';
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
        .isRequired(false)
        .attributeConstraint('SameForAll')
        .isSearchable(false)
        .inputHint('MultiLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(
          LocalizedString.presets.empty()['en-GB']('Color')['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish')
        .label(
          LocalizedString.presets.empty()['en-GB']('Finish')['de-DE'](' Fertig')
        )
        .isRequired(false)
        .attributeConstraint('None')
        .isSearchable(false)
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
        .isRequired(false)
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
        .isRequired(false)
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
        .isRequired(false)
        .type(AttributeBooleanTypeDraft.random().name('boolean'))
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .label(LocalizedString.presets.empty()['en-GB']('Size'))
        .inputTip(
          LocalizedString.presets.empty()['en-GB']('size set as a string value')
        )
        .isRequired(false)
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
        .isRequired(false)
        .attributeConstraint('SameForAll')
        .isSearchable(false)
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
        .isRequired(false)
        .type(AttributeLocalizedEnumValue.random().name('lenum'))
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
    ]);

export default furnitureAndDecor;
