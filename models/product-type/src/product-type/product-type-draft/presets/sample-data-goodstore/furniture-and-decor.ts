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
            ['en-GB']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
            ['en-US']('Product Specifications')
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
            ['de-DE']('Farbe')
            ['en-US']('Color')
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
            ['de-DE'](' Fertig')
            ['en-US']('Finish')
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
            ['de-DE']('Farbetikett')
            ['en-US']('Color Label')
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
            ['de-DE'](' Fertiges Etikett')
            ['en-US']('Finish Label')
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
            ['de-DE']('Neuankömmling')
            ['en-US']('New Arrival')
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
            ['en-GB']('Size')
            ['de-DE']('Größe')
            ['en-US']('Size')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB']('size set as a string value')
            ['de-DE']('Größe als String-Wert')
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
            ['de-DE']('Productbeschreibung')
            ['en-US']('Product Description')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'Product description, made a custom attribute so product description is not used for search results.'
            )
            ['de-DE'](
              'Produktbeschreibung, als custom attribute, so dass die Produktbeschreibung nicht für Suchergebnisse verwendet wird.'
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
        .type(
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('White')
                  ['de-DE']('Weiss')
                  ['en-US']('White')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#000')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
                  ['en-US']('Black')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#808080')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Gray')
                  ['de-DE']('Grau')
                  ['en-US']('Gray')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#0000FF')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
                  ['en-US']('Blue')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#00FF00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
                  ['en-US']('Green')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#A020F0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Purple')
                  ['de-DE']('Lila')
                  ['en-US']('Purple')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C4A484')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Light Brown')
                  ['de-DE']('Hellbraun')
                  ['en-US']('Light Brown')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#F5F5DC')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Beige')
                  ['de-DE']('Beige')
                  ['en-US']('Beige')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#D2B48C')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Tan')
                  ['de-DE']('Bräunen')
                  ['en-US']('Tan')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFFFF0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Ivory')
                  ['de-DE']('Elfenbein')
                  ['en-US']('Ivory')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFD700')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
                  ['en-US']('Gold')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#964B00')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Dark Brown')
                  ['de-DE']('Dunkelbraun')
                  ['en-US']('Dark Brown')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#C0C0C0')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
                  ['en-US']('Silver')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFC0CB')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
                  ['en-US']('Pink')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('#FFA500')
              .label(
                LocalizedString.presets
                  .empty()
                  ['en-GB']('Orange')
                  ['de-DE']('Orange')
                  ['en-US']('Orange')
              ),
          ])
        )
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Color Filter')
            ['de-DE']('Farbfilter')
            ['en-US']('Color Filter')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
            ['de-DE'](
              'zum Einstellen der Farben und Beschriftungen, die im Farbfilter von PLP angezeigt werden'
            )
            ['en-US'](
              'used to set the colors and labels displayed in the color filter on PLP'
            )
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export default furnitureAndDecor;
