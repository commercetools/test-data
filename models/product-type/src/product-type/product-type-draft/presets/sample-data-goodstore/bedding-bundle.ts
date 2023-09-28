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
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-US']('product-description')
            ['en-GB']('product-description')
            ['de-DE']('Productbeschreibung')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US']('description of the bundle product')
            ['en-GB']('description of the bundle product')
            ['de-DE']('Beschreibung des Bundles')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-spec')
        .type(AttributeLocalizableTextType.random())
        .label(
          LocalizedString.presets
            .empty()
            ['en-US']('Product Spec')
            ['en-GB']('Product Spec')
            ['de-DE']('Product Spezifikation')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US']('Product Spec')
            ['en-GB']('Product Spec')
            ['de-DE']('Produktspezifikation')
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
          LocalizedString.presets
            .empty()
            ['en-US']('Products of this bundle')
            ['en-GB']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-US']('Products of this bundle')
            ['en-GB']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export default beddingBundle;
