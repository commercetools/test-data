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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bulldozer, die für die Abfallbewältigung konzipiert sind')
        ['it-IT']('Bulldozer progettati per la gestione dei rifiuti')
        ['nl-NL']('Bulldozers ontworpen voor afvalverwerking')
        ['fr-FR']('Bulldozers conçus pour la manutention des déchets')
        ['en-AU']('Bulldozers designed for waste handling')
        ['es-ES']('Bulldozers diseñados para el manejo de residuos')
        ['en-GB']('Bulldozers designed for waste handling')
        ['en-NZ']('Bulldozers designed for waste handling')
        ['pt-PT']('Bulldozers projetados para manejo de resíduos')
        ['en-US']('Bulldozers designed for waste handling')
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
    .orderHint('0.000017113644847491257581521')
    .parent(
      KeyReferenceDraft.presets.category().key(largeBulldozersCategory.key!)
    );

export default wasteHandlingBulldozers;
