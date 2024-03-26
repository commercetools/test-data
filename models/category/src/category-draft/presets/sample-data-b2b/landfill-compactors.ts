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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Verdichter, die für die Deponienutzung konzipiert sind')
        ['it-IT']("Compattatori progettati per l'uso in discariche")
        ['nl-NL']('Verdichters ontworpen voor gebruik in stortplaatsen')
        ['fr-FR']('Compacteurs conçus pour une utilisation en décharge')
        ['en-AU']('Compactors designed for landfill use')
        ['es-ES']('Compactadores diseñados para uso en vertederos')
        ['en-GB']('Compactors designed for landfill use')
        ['en-NZ']('Compactors designed for landfill use')
        ['pt-PT']('Compactadores projetados para uso em aterros')
        ['en-US']('Compactors designed for landfill us')
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
    .orderHint('0.0000171136448476519561524')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default landfillCompactors;
