import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeDiameterMiningDrills from './large-diameter-mining-drills';

const largeDiameterMiningDrillsCategory =
  largeDiameterMiningDrills().build<TCategoryDraft>();

const blastholeDrills = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Sprenglochbohrer')
        ['it-IT']('Trapani per Fori di Scoppio')
        ['nl-NL']('Boorinstallaties voor Explosiegaten')
        ['fr-FR']('Forages de trous de mine')
        ['en-AU']('Blasthole Drills')
        ['es-ES']('Perforadoras de agujeros de voladura')
        ['en-GB']('Blasthole Drills')
        ['en-NZ']('Blasthole Drills')
        ['pt-PT']('Brocas para Furos de Explosão')
        ['en-US']('Blasthole Drills')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('sprengloch_bohrer')
        ['it-IT']('blasthole_drills')
        ['nl-NL']('blasthole_drills')
        ['fr-FR']('forages_trous_de_mine')
        ['en-AU']('blasthole_drills')
        ['es-ES']('perforadoras_agujeros_voladura')
        ['en-GB']('blasthole_drills')
        ['en-NZ']('blasthole_drills')
        ['pt-PT']('blasthole_drills')
        ['en-US']('blasthole_drills')
    )
    .key('blasthole-drills')
    .orderHint('0.000017083829494361565571101')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default blastholeDrills;
