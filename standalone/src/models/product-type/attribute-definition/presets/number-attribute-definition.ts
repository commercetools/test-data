import type { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import { AttributeNumberType } from '../..';
import {
  AttributeNumberTypeGraphql,
  AttributeNumberTypeRest,
} from '../../attribute-number-type';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import type {
  TAttributeDefinition,
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from '../types';

export const restPreset = (): TBuilder<TAttributeDefinitionRest> =>
  RestModelBuilder()
    .type(AttributeNumberTypeRest.random())
    .name('Number Attribute Definition')
    .label(
      LocalizedString.presets.empty().en(`Number Attribute Definition's Label`)
    )
    .inputTip(
      LocalizedString.presets
        .empty()
        .en(`Number Attribute Definition's Input Tip`)
    );

export const graphqlPreset = (): TBuilder<TAttributeDefinitionGraphql> =>
  GraphqlModelBuilder()
    .type(AttributeNumberTypeGraphql.random())
    .name('Number Attribute Definition')
    .labelAllLocales(
      LocalizedString.presets.empty().en(`Number Attribute Definition's Label`)
    )
    .inputTipAllLocales(
      LocalizedString.presets
        .empty()
        .en(`Number Attribute Definition's Input Tip`)
    );

export const compatPreset = (): TBuilder<TAttributeDefinition> =>
  CompatModelBuilder()
    .type(AttributeNumberType.random())
    .name('Number Attribute Definition')
    .label(
      LocalizedString.presets.empty().en(`Number Attribute Definition's Label`)
    )
    .inputTip(
      LocalizedString.presets
        .empty()
        .en(`Number Attribute Definition's Input Tip`)
    );
