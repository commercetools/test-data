import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { roles } from '../../../constants';
import type {
  TChannelDraft,
  TChannelDraftGraphql,
  TChannelDraftRest,
} from '../../../types';
import {
  ChannelDraft,
  ChannelDraftGraphql,
  ChannelDraftRest,
} from '../../index';

const populatePreset = <
  TModel extends TChannelDraftRest | TChannelDraftGraphql
>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('us-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](`Nordamerika-Lager`)
        ['it-IT'](`Magazzino Nord America`)
        ['nl-NL'](`Noord-Amerika magazijn`)
        ['fr-FR'](`Entrepôt Amérique du Nord`)
        ['en-AU'](`North America warehouse`)
        ['es-ES'](`Almacén Norteamérica`)
        ['en-GB'](`North America warehouse`)
        ['en-NZ'](`North America warehouse`)
        ['pt-PT'](`Armazém América do Norte`)
        ['en-US'](`North America warehouse`)
    )
    .roles([roles.InventorySupply]);
};

export const restPreset = (): TBuilder<TChannelDraftRest> =>
  populatePreset(ChannelDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TChannelDraftGraphql> =>
  populatePreset(ChannelDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TChannelDraft> =>
  populatePreset(ChannelDraft.presets.empty());
