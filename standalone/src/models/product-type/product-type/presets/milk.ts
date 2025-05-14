import { LocalizedString } from '../../../../commons';
import { AttributeBooleanType } from '../../attribute-boolean-type';
import * as AttributeDefinition from '../../attribute-definition';
import AttributeTextType from '../../attribute-text-type/builder';
import ProductType from '../builder';
import { TProductTypeBuilder } from '../types';

const milk = (): TProductTypeBuilder =>
  ProductType()
    .name('Milk Product Type')
    .attributes([
      AttributeDefinition.random()
        .attributeConstraint('None')
        .name('lactose-free')
        .label(LocalizedString.presets.empty().en('Lactose Free'))
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Important information for people with lactose intolerance')
        )
        .inputHint('MultiLine')
        .isRequired(true)
        .isSearchable(true)
        .type(AttributeBooleanType.random()),
      AttributeDefinition.random()
        .attributeConstraint('SameForAll')
        .name('cow-name')
        .label(
          LocalizedString.presets
            .empty()
            .en('Name of the cow producing the milk')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Public recognition of cow`s good deeds make it even happier!')
        )
        .inputHint('SingleLine')
        .isRequired(true)
        .isSearchable(false)
        .type(AttributeTextType()),
    ]);

export default milk;
