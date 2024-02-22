import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const usLargeCustomers = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('us-large-customers')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US-Großkunden')
        ['it-IT']('Grandi Clienti degli Stati Uniti')
        ['en-UK']('US Large Customers')
        ['nl-NL']('Grote Klanten in de VS')
        ['fr-FR']('Grands Clients des États-Unis')
        ['en-AU']('US Large Customers')
        ['es-ES']('Grandes Clientes de EE. UU.')
        ['en-GB']('US Large Customers')
        ['en-NZ']('US Large Customers')
        ['pt-PT']('Grandes Clientes dos EUA')
        ['en-US']('US Large Customers')
    );

export default usLargeCustomers;
