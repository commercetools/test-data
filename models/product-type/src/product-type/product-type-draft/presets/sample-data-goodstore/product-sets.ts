import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeLocalizableTextTypeDraft,
  AttributeSetTypeDraft,
  AttributeDefinitionDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const productSets = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeLocalizableTextTypeDraft.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Type')
            ['en-US']('Type')
            ['de-DE']('Typ')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export default productSets;
