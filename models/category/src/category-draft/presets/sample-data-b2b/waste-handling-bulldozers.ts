import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeBulldozers from './large-bulldozers';

const largeBulldozersCategory = largeBulldozers().build<TCategoryDraft>();

const wasteHandlingBulldozers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Abfallbewältigungs-Bulldozer')
        ['it-IT']('Bulldozer per Gestione Rifiuti')
        ['nl-NL']('Bulldozers voor Afvalverwerking')
        ['fr-FR']('Bulldozers de manutention des déchets')
        ['en-AU']('Waste Handling Bulldozers')
        ['es-ES']('Bulldozers para el manejo de residuos')
        ['en-GB']('Waste Handling Bulldozers')
        ['en-NZ']('Waste Handling Bulldozers')
        ['pt-PT']('Bulldozers para Manejo de Resíduos')
        ['en-US']('Waste Handling Bulldozers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('abfall_bulldozer')
        ['it-IT']('waste_handling_bulldozers')
        ['nl-NL']('waste_handling_bulldozers')
        ['fr-FR']('bulldozers_manutention_dechets')
        ['en-AU']('waste_handling_bulldozers')
        ['es-ES']('bulldozers_manjeo_residuos')
        ['en-GB']('waste_handling_bulldozers')
        ['en-NZ']('waste_handling_bulldozers')
        ['pt-PT']('waste_handling_bulldozers')
        ['en-US']('waste_handling_bulldozers')
    )
    .key('waste-handling-bulldozers')
    .orderHint('0.00001708382944323117492021')
    .parent(
      KeyReferenceDraft.presets.category().key(largeBulldozersCategory.key!)
    );

export default wasteHandlingBulldozers;
