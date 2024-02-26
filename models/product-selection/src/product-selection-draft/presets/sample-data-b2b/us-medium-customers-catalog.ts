import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TProductSelectionDraftBuilder } from '../../../types';
import * as ProductSelectionDraft from '../../index';

const usMediumCustomersCatalog = (): TProductSelectionDraftBuilder =>
  ProductSelectionDraft.presets
    .empty()
    .key('us-medium-customers-catalog')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('US Mittel Kundenkatalog')
        ['it-IT']('Catalogo Clienti Medio USA')
        ['en-UK']('US Medium Customers Catalog')
        ['nl-NL']('Catalogus voor Middelgrote Klanten in de VS')
        ['fr-FR']('Catalogue Clients Moyens des États-Unis')
        ['en-AU']('US Medium Customers Catalog')
        ['es-ES']('Catálogo de Clientes Medianos de EE. UU.')
        ['en-GB']('US Medium Customers Catalog')
        ['en-NZ']('US Medium Customers Catalog')
        ['pt-PT']('Catálogo de Clientes Médios dos EUA')
        ['en-US']('US Medium Customers Catalog')
    )
    .mode('Individual');

export default usMediumCustomersCatalog;
