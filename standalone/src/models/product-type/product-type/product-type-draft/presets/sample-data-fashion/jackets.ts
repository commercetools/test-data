import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  AttributeBooleanTypeDraft,
  AttributeBooleanTypeDraftGraphql,
  AttributeDefinitionDraft,
  AttributeDefinitionDraftGraphql,
  AttributeEnumTypeDraft,
  AttributeEnumTypeDraftGraphql,
  AttributePlainEnumValueDraft,
  AttributePlainEnumValueDraftGraphql,
  AttributeDefinitionDraftRest,
  AttributeEnumTypeDraftRest,
  AttributePlainEnumValueDraftRest,
  AttributeBooleanTypeDraftRest,
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
    .key('jackets')
    .name('Jackets')
    .description('Jackets')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('sleeve_length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('sleeve_length'))
        .inputTip(
          LocalizedStringDraft.presets.empty()['en-US']('sleeve_length')
        )
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftRest.random().values([
            AttributePlainEnumValueDraftRest.random().key('Crop').label('Crop'),
            AttributePlainEnumValueDraftRest.random()
              .key('Normal')
              .label('Normal'),
            AttributePlainEnumValueDraftRest.random()
              .key('Extra Long')
              .label('Extra Long'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftRest.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftRest.constants.inputHints.SingleLine
        ),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('cotton')
        .label(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .isRequired(false)
        .type(AttributeBooleanTypeDraftRest.random().name('boolean'))
        .attributeConstraint(
          AttributeDefinitionDraftRest.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftRest.constants.inputHints.SingleLine
        ),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('jackets')
    .name('Jackets')
    .description('Jackets')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('sleeve_length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('sleeve_length'))
        .inputTip(
          LocalizedStringDraft.presets.empty()['en-US']('sleeve_length')
        )
        .isRequired(false)
        .type(
          AttributeEnumTypeDraftGraphql.random().values([
            AttributePlainEnumValueDraftGraphql.random()
              .key('Crop')
              .label('Crop'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Normal')
              .label('Normal'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('Extra Long')
              .label('Extra Long'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraftGraphql.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftGraphql.constants.inputHints.SingleLine
        ),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('cotton')
        .label(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .isRequired(false)
        .type(AttributeBooleanTypeDraftGraphql.random())
        .attributeConstraint(
          AttributeDefinitionDraftGraphql.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(
          AttributeDefinitionDraftGraphql.constants.inputHints.SingleLine
        ),
    ]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  ProductTypeDraft.presets
    .empty()
    .key('jackets')
    .name('Jackets')
    .description('Jackets')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('sleeve_length')
        .label(LocalizedStringDraft.presets.empty()['en-US']('sleeve_length'))
        .inputTip(
          LocalizedStringDraft.presets.empty()['en-US']('sleeve_length')
        )
        .isRequired(false)
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random().key('Crop').label('Crop'),
            AttributePlainEnumValueDraft.random().key('Normal').label('Normal'),
            AttributePlainEnumValueDraft.random()
              .key('Extra Long')
              .label('Extra Long'),
          ])
        )
        .attributeConstraint(
          AttributeDefinitionDraft.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(AttributeDefinitionDraft.constants.inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('cotton')
        .label(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .inputTip(LocalizedStringDraft.presets.empty()['en-US']('cotton'))
        .isRequired(false)
        .type(AttributeBooleanTypeDraft.random().name('boolean'))
        .attributeConstraint(
          AttributeDefinitionDraft.constants.attributeConstraints.None
        )
        .isSearchable(false)
        .inputHint(AttributeDefinitionDraft.constants.inputHints.SingleLine),
    ]);
