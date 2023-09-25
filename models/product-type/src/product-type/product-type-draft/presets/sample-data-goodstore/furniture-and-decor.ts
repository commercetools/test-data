import { LocalizedString } from '@commercetools-test-data/commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeDefinitionDraft,
  AttributeBooleanTypeDraft,
  AttributeLocalizedEnumTypeDraft,
  AttributeLocalizableTextType,
  AttributeLocalizedEnumValueDraft,
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
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Product Specifications')
            ['en-US']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.'
            )
            ['en-US'](
              'Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.'
            )
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.MultiLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('colorlabel')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Color Label')
            ['en-US']('Color Label')
            ['de-DE']('Farbetikett')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finishlabel')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Finish Label')
            ['en-US']('Finish Label')
            ['de-DE']('Fertiges Etikett')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('new-arrival')
        .type(AttributeBooleanTypeDraft.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('New Arrival')
            ['en-US']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .isRequired(false)
        .type(AttributeBooleanTypeDraft.random())
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets.empty()['en-GB']('Size')['en-US']('Size')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB']('size set as a string value')
            ['en-US']('size set as a string value')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Product Description')
            ['en-US']('Product Description')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
            ['en-US'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color-filter')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Color Filter')
            ['en-US']('Color Filter')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
            ['en-US'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
        )
        .isRequired(false)
        .type(
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Weiss')
                  ['en-GB']('White')
                  ['en-US']('White')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#000')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Schwarz')
                  ['en-GB']('Black')
                  ['en-US']('Black')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#808080')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Grau')
                  ['en-GB']('Gray')
                  ['en-US']('Gray')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#0000FF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Blau')
                  ['en-GB']('Blue')
                  ['en-US']('Blue')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#00FF00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Grün')
                  ['en-GB']('Green')
                  ['en-US']('Green')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#A020F0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Lila')
                  ['en-GB']('Purple')
                  ['en-US']('Purple')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C4A484')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Hellbraun')
                  ['en-GB']('Light Brown')
                  ['en-US']('Light Brown')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#F5F5DC')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Beige')
                  ['en-GB']('Beige')
                  ['en-US']('Beige')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#D2B48C')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Bräunen')
                  ['en-GB']('Tan')
                  ['en-US']('Tan')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFFFF0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Elfenbein')
                  ['en-GB']('Ivory')
                  ['en-US']('Ivory')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFD700')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Gold')
                  ['en-GB']('Gold')
                  ['en-US']('Gold')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#964B00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Dunkelbraun')
                  ['en-GB']('Dark Brown')
                  ['en-US']('Dark Brown')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C0C0C0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Silber')
                  ['en-GB']('Silver')
                  ['en-US']('Silver')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFC0CB')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Rosa')
                  ['en-GB']('Pink')
                  ['en-US']('Pink')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFA500')
              .label(
                LocalizedString.presets
                  .empty()
                  ['de-DE']('Orange')
                  ['en-GB']('Orange')
                  ['en-US']('Orange')
              ),
          ])
        )
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export default furnitureAndDecor;
