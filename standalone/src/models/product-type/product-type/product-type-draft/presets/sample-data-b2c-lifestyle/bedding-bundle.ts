import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import { attributeReferenceTypeId } from '../../../../attribute-reference-type/constants';
import {
  AttributeDefinitionDraft,
  AttributeDefinitionDraftGraphql,
  AttributeDefinitionDraftRest,
  AttributeLocalizableTextTypeDraft,
  AttributeLocalizableTextTypeDraftGraphql,
  AttributeLocalizableTextTypeDraftRest,
  AttributeReferenceTypeDraft,
  AttributeReferenceTypeDraftGraphql,
  AttributeReferenceTypeDraftRest,
  AttributeSetTypeDraft,
  AttributeSetTypeDraftGraphql,
  AttributeSetTypeDraftRest,
} from '../../../../index';
import {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import {
  ProductTypeDraft,
  ProductTypeDraftGraphql,
  ProductTypeDraftRest,
} from '../../index';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  ProductTypeDraftRest.presets
    .empty()
    .key('bedding-bundle')
    .name('Bedding Bundle')
    .description('Product type used to bundle bedding components')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextTypeDraftRest.random())
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

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('product-spec')
        .type(AttributeLocalizableTextTypeDraftRest.random())
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

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('product-ref')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeReferenceTypeDraftRest.random().referenceTypeId(
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

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('bedding-bundle')
    .name('Bedding Bundle')
    .description('Product type used to bundle bedding components')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
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

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('product-spec')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
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

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('product-ref')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeReferenceTypeDraftGraphql.random().referenceTypeId(
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

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
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
