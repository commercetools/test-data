import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const usLargeCustomers = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('us-large-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Große Kunden im Vereinigten Staaten')
        ['it-IT']('Grandi Clienti USA')
        ['en-UK']('US Large Customers')
        ['nl-NL']('VS Grote Klanten')
        ['fr-FR']('Clients Importants aux États-Unis')
        ['en-AU']('US Large Customers')
        ['es-ES']('Clientes Grandes de Estados Unidos')
        ['en-GB']('US Large Customers')
        ['en-NZ']('US Large Customers')
        ['pt-PT']('Grandes Clientes EUA')
        ['en-US']('US Large Customers')
    )
    .roles([roles.ProductDistribution]);

export default usLargeCustomers;
