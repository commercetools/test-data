import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const usMediumCustomers = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('us-medium-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Mittelgroße Kunden im Vereinigten Staaten')
        ['it-IT']('Clienti Medi USA')
        ['nl-NL']('VS Middelgrote Klanten')
        ['fr-FR']('Clients Moyens aux États-Unis')
        ['en-AU']('US Medium Customers')
        ['es-ES']('Clientes Medianos de Estados Unidos')
        ['en-GB']('US Medium Customers')
        ['en-NZ']('US Medium Customers')
        ['pt-PT']('Clientes Médios EUA')
        ['en-US']('US Medium Customers')
    )
    .roles([roles.ProductDistribution]);

export default usMediumCustomers;
