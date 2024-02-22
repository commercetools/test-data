import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const usWarehouse = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('us-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Nordamerika-Lager')
        ['it-IT']('Magazzino Nord America')
        ['en-UK']('North America warehouse')
        ['nl-NL']('Noord-Amerika magazijn')
        ['fr-FR']('Entrepôt Amérique du Nord')
        ['en-AU']('North America warehouse')
        ['es-ES']('Almacén Norteamérica')
        ['en-GB']('North America warehouse')
        ['en-NZ']('North America warehouse')
        ['pt-PT']('Armazém América do Norte')
        ['en-US']('North America warehouse')
    )
    .roles([roles.InventorySupply]);

export default usWarehouse;
