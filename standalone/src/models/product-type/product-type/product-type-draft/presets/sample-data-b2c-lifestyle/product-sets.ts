import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeLocalizableTextTypeDraft,
  AttributeSetTypeDraft,
  AttributeDefinitionDraft,
  AttributeDefinitionDraftRest,
  AttributeSetTypeDraftRest,
  AttributeLocalizableTextTypeDraftRest,
  AttributeDefinitionDraftGraphql,
  AttributeSetTypeDraftGraphql,
  AttributeLocalizableTextTypeDraftGraphql,
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
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeLocalizableTextTypeDraftRest.random()
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

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeLocalizableTextTypeDraftGraphql.random()
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

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
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

      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
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
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);
