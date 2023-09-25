import { LocalizedString } from '@commercetools-test-data/commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import { attributeReferenceTypeId } from '../../../../attribute-reference-type/constants';
import {
  AttributeDefinitionDraft,
  AttributeLocalizableTextType,
  AttributeReferenceTypeDraft,
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
        .type(AttributeLocalizableTextType.random())
        .label(LocalizedString.presets.empty()['en-GB']('product-description'))
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB']('description of the bundle product')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-spec')
        .type(AttributeLocalizableTextType.random())
        .label(LocalizedString.presets.empty()['en-GB']('Product Spec'))
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-ref')
        .type(
          AttributeReferenceTypeDraft.random().referenceTypeId(
            attributeReferenceTypeId.Product
          )
        )
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export default beddingBundle;
