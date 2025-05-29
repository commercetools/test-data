import { LocalizedString } from '@/models/commons';
import {
  AttributeEnumType,
  AttributeNumberType,
  AttributeTextType,
} from '@/models/product-type';
import AttributeDefinition from '../builder';

const presets = {
  number: () =>
    AttributeDefinition()
      .type(AttributeNumberType.random())
      .name('Number Attribute Definition')
      .label(
        LocalizedString.presets
          .empty()
          .en(`Number Attribute Definition's Label`)
      )
      .inputTip(
        LocalizedString.presets
          .empty()
          .en(`Number Attribute Definition's Input Tip`)
      ),

  countryOfOrigin: () =>
    AttributeDefinition()
      .attributeConstraint('None')
      .name('country-of-origin')
      .label(LocalizedString.presets.empty().en('Country of Origin'))
      .isRequired(true)
      .type(AttributeTextType.random()),

  size: () =>
    AttributeDefinition()
      .attributeConstraint('None')
      .name('size')
      .label(LocalizedString.presets.empty().en('Size'))
      .inputTip(LocalizedString.presets.empty().en('Size of a product'))
      .inputHint('SingleLine')
      .isRequired(true)
      .isSearchable(true)
      .type(AttributeEnumType.presets.allSizesEnum()),
};

export default presets;
