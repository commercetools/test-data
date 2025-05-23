import { LocalizedStringDraft } from '../../../../../commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import { attributeReferenceTypeId } from '../../../../attribute-reference-type/constants';
import {
  AttributeDefinitionDraft,
  AttributeLocalizableTextTypeDraft,
  AttributeReferenceTypeDraft,
  AttributeSetTypeDraft,
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
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('product-description')
            ['en-US']('product-description')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('description of the bundle product')
            ['en-US']('description of the bundle product')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-spec')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Spec')
            ['en-US']('Product Spec')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-ref')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeReferenceTypeDraft.random().referenceTypeId(
              attributeReferenceTypeId.Product
            )
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Products of this bundle')
            ['en-US']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export default beddingBundle;
