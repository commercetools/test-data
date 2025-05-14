import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bohrer, die für Sprenglochoperationen konzipiert sind')
        [
          'it-IT'
        ]('Trapani progettati per operazioni di perforazione di fori di scoppio')
        ['nl-NL']('Boormachines ontworpen voor explosiegaten')
        ['fr-FR']('Forages conçus pour les opérations de trous de mine')
        ['en-AU']('Drills designed for blasthole operations')
        [
          'es-ES'
        ]('Perforadoras diseñadas para operaciones de agujeros de voladura')
        ['en-GB']('Drills designed for blasthole operations')
        ['en-NZ']('Drills designed for blasthole operations')
        ['pt-PT']('Brocas projetadas para operações de furos de explosão')
        ['en-US']('Drills designed for blasthole operations')
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
    .orderHint('0.000017113644847441329183825')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default blastholeDrills;
