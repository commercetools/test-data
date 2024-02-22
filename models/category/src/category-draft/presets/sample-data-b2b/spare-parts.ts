import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const spareParts = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Ersatzteile')
        ['it-IT']('Parti di Ricambio')
        ['nl-NL']('Reserveonderdelen')
        ['fr-FR']('Pièces de Rechange')
        ['en-AU']('Spare Parts')
        ['es-ES']('Piezas de Repuesto')
        ['en-GB']('Spare Parts')
        ['en-NZ']('Spare Parts')
        ['pt-PT']('Peças Sobressalentes')
        ['en-US']('Spare Parts')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ersatzteile')
        ['it-IT']('parti_di_ricambio')
        ['nl-NL']('reserveonderdelen')
        ['fr-FR']('pieces_de_rechange')
        ['en-AU']('spare_parts')
        ['es-ES']('piezas_de_repuesto')
        ['en-GB']('spare_parts')
        ['en-NZ']('spare_parts')
        ['pt-PT']('pecas_sobressalentes')
        ['en-US']('spare_parts')
    )
    .key('spare-parts')
    .orderHint('0.00001708382951385193293756');

export default spareParts;
