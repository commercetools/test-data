import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutySoilCompactorsRollers from './heavy-duty-soil-compactors-rollers';

const heavyDutySoilCompactorsRollersCategory =
  heavyDutySoilCompactorsRollers().build<TCategoryDraft>();

const landfillCompactors = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Deponie-Verdichter')
        ['it-IT']('Compattatori per Discariche')
        ['nl-NL']('Stortplaatsverdichters')
        ['fr-FR']('Compacteurs de décharge')
        ['en-AU']('Landfill Compactors')
        ['es-ES']('Compactadores de vertederos')
        ['en-GB']('Landfill Compactors')
        ['en-NZ']('Landfill Compactors')
        ['pt-PT']('Compactadores de Aterro')
        ['en-US']('Landfill Compactors')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('deponie_verdichter')
        ['it-IT']('landfill_compactors')
        ['nl-NL']('landfill_compactors')
        ['fr-FR']('compacteurs_decharge')
        ['en-AU']('landfill_compactors')
        ['es-ES']('compactadores_vertederos')
        ['en-GB']('landfill_compactors')
        ['en-NZ']('landfill_compactors')
        ['pt-PT']('landfill_compactors')
        ['en-US']('landfill_compactors')
    )
    .key('landfill-compactors')
    .orderHint('0.000017083829481041966423080')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default landfillCompactors;
