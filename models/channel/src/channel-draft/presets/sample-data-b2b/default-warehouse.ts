import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const defaultWarehouse = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('default-warehouse')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Standardlager')
        ['it-IT']('Magazzino predefinito')
        ['nl-NL']('Standaard magazijn')
        ['fr-FR']('Entrepôt par défaut')
        ['en-AU']('Default warehouse')
        ['es-ES']('Almacén predeterminado')
        ['en-GB']('Default warehouse')
        ['en-NZ']('Default warehouse')
        ['pt-PT']('Armazém padrão')
        ['en-US']('Default warehouse')
    )
    .roles([roles.InventorySupply]);

export default defaultWarehouse;
