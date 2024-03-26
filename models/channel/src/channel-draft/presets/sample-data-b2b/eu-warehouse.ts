import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const euWarehouse = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('eu-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Europalager')
        ['it-IT']('Magazzino Europa')
        ['nl-NL']('Europa magazijn')
        ['fr-FR']('Entrepôt Europe')
        ['en-AU']('Europe warehouse')
        ['es-ES']('Almacén Europa')
        ['en-GB']('Europe warehouse')
        ['en-NZ']('Europe warehouse')
        ['pt-PT']('Armazém Europa')
        ['en-US']('Europe warehouse')
    )
    .roles([roles.InventorySupply]);

export default euWarehouse;
