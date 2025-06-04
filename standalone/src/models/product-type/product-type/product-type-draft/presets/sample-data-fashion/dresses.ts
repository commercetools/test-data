import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  AttributeDefinitionDraft,
  AttributeDefinitionDraftGraphql,
  AttributeDefinitionDraftRest,
  AttributeEnumTypeDraft,
  AttributeEnumTypeDraftGraphql,
  AttributeEnumTypeDraftRest,
  AttributePlainEnumValueDraft,
  AttributePlainEnumValueDraftGraphql,
  AttributePlainEnumValueDraftRest,
} from '../../../../index';
import type {
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
    .key('dresses')
    .name('Dresses')
    .description('Dresses')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftRest.random().values([
            AttributePlainEnumValueDraftRest.random().key('Maxi').label('Maxi'),
            AttributePlainEnumValueDraftRest.random()
              .key('Knee Length')
              .label('Knee Length'),
            AttributePlainEnumValueDraftRest.random().key('Mini').label('Mini'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftRest.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftRest.constants.inputHints.SingleLine
        ),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftRest.random().values([
            AttributePlainEnumValueDraftRest.random()
              .key('White')
              .label('White'),
            AttributePlainEnumValueDraftRest.random().key('Pink').label('Pink'),
            AttributePlainEnumValueDraftRest.random()
              .key('Floral')
              .label('Floral'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftRest.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftRest.constants.inputHints.SingleLine
        ),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('dresses')
    .name('Dresses')
    .description('Dresses')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftGraphql.random().values([
            AttributePlainEnumValueDraftGraphql.random()
              .key('Maxi')
              .label('Maxi'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Knee Length')
              .label('Knee Length'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Mini')
              .label('Mini'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftGraphql.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftGraphql.constants.inputHints.SingleLine
        ),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftGraphql.random().values([
            AttributePlainEnumValueDraftGraphql.random()
              .key('White')
              .label('White'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Pink')
              .label('Pink'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Floral')
              .label('Floral'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftGraphql.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftGraphql.constants.inputHints.SingleLine
        ),
    ]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  ProductTypeDraft.presets
    .empty()
    .key('dresses')
    .name('Dresses')
    .description('Dresses')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Length'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Maxi').label('Maxi'),
            AttributePlainEnumValueDraft.random()
              .key('Knee Length')
              .label('Knee Length'),
            AttributePlainEnumValueDraft.random().key('Mini').label('Mini'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraft.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(AttributeDefinitionDraft.constants.inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .label(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('Color'))
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('White').label('White'),
            AttributePlainEnumValueDraft.random().key('Pink').label('Pink'),
            AttributePlainEnumValueDraft.random().key('Floral').label('Floral'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraft.constants.attributeConstraints
            .CombinationUnique
        )
        .isSearchable(false)
        .inputHint(AttributeDefinitionDraft.constants.inputHints.SingleLine),
    ]);
