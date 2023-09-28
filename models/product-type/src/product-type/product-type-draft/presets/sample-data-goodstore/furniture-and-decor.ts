import { LocalizedString } from '@commercetools-test-data/commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeBooleanTypeDraft,
  AttributeDefinitionDraft,
  AttributeLocalizableTextType,
  AttributeLocalizedEnumTypeDraft,
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
            ['en-US']('Product Specifications')
            ['en-GB']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US'](
              'Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.'
            )
            ['en-GB'](
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
            ['en-US']('Color')
            ['en-GB']('Color')
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
            ['en-US']('Finish')
            ['en-GB']('Finish')
            ['de-DE'](' Fertig')
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
            ['en-US']('Color Label')
            ['en-GB']('Color Label')
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
            ['en-US']('Finish Label')
            ['en-GB']('Finish Label')
            ['de-DE'](' Fertiges Etikett')
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
            ['en-US']('New Arrival')
            ['en-GB']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-US']('Size')
            ['en-GB']('Size')
            ['de-DE']('Größe')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US']('size set as a string value')
            ['en-GB']('size set as a string value')
            ['de-DE']('Größe als String-Wert')
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
            ['en-US']('Product Description')
            ['en-GB']('Product Description')
            ['de-DE']('Productbeschreibung')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
            ['en-GB'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
            ['de-DE'](
              'Produktbeschreibung, als custom attribute, so dass die Produktbeschreibung nicht für Suchergebnisse verwendet wird.'
            )
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color-filter')
        .type(
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiss')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#000')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#808080')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Gray')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#0000FF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#00FF00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#A020F0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Lila')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C4A484')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Light Brown')
                  ['en-GB']('Light Brown')
                  ['de-DE']('Hellbraun')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#F5F5DC')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Beige')
                  ['en-GB']('Beige')
                  ['de-DE']('Beige')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#D2B48C')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Tan')
                  ['en-GB']('Tan')
                  ['de-DE']('Bräunen')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFFFF0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Ivory')
                  ['en-GB']('Ivory')
                  ['de-DE']('Elfenbein')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFD700')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#964B00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Dark Brown')
                  ['en-GB']('Dark Brown')
                  ['de-DE']('Dunkelbraun')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C0C0C0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFC0CB')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFA500')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-US']('Orange')
                  ['en-GB']('Orange')
                  ['de-DE']('Orange')
              ),
          ])
        )
        .label(
          LocalizedString.presets
            .empty()
            ['en-US']('Color Filter')
            ['en-GB']('Color Filter')
            ['de-DE']('Farbfilter')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
            ['en-GB'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
            ['de-DE'](
              'zum Einstellen der Farben und Beschriftungen, die im Farbfilter von PLP angezeigt werden'
            )
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export default furnitureAndDecor;
