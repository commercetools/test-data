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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Austauschbares Teil, das für die Reparatur oder den Austausch defekter Einheiten in Maschinen, Fahrzeugen oder elektronischen Geräten verwendet wird'
        )
        ['it-IT'](
          'Parte intercambiabile utilizzata per la riparazione o la sostituzione di unità guaste in macchinari, veicoli o dispositivi elettronici'
        )
        ['nl-NL'](
          'Uitwisselbaar onderdeel gebruikt voor de reparatie of vervanging van defecte eenheden in machines, voertuigen of elektronische apparaten'
        )
        ['fr-FR'](
          "Pièce interchangeable utilisée pour la réparation ou le remplacement d'unités défaillantes dans des machines, véhicules ou dispositifs électroniques"
        )
        ['en-AU'](
          'Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices'
        )
        ['es-ES'](
          'Pieza intercambiable utilizada para la reparación o sustitución de unidades defectuosas en maquinaria, vehículos o dispositivos electrónicos'
        )
        ['en-GB'](
          'Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices'
        )
        ['en-NZ'](
          'Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices'
        )
        ['pt-PT'](
          'Peça intercambiável usada para a reparação ou substituição de unidades avariadas em maquinaria, veículos ou dispositivos eletrónicos'
        )
        ['en-US'](
          'Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices'
        )
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
    .orderHint('0.000017113644845271199915511');

export default spareParts;
