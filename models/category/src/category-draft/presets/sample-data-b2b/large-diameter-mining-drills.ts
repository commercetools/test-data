import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const largeDiameterMiningDrills = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bergbau-Bohrgeräte')
        ['it-IT']('Trapani Minerari')
        ['nl-NL']('Mijnbouwboormachines')
        ['fr-FR']('Forages miniers')
        ['en-AU']('Mining Drills')
        ['es-ES']('Perforadoras mineras')
        ['en-GB']('Mining Drills')
        ['en-NZ']('Mining Drills')
        ['pt-PT']('Brocas de Mineração')
        ['en-US']('Mining Drills')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bergbau_bohrer_grosser_durchmesser')
        ['it-IT']('large_diameter_mining_drills')
        ['nl-NL']('large_diameter_mining_drills')
        ['fr-FR']('forages_grand_diametre_mining')
        ['en-AU']('large_diameter_mining_drills')
        ['es-ES']('perforadoras_gran_diametro_mineria')
        ['en-GB']('large_diameter_mining_drills')
        ['en-NZ']('large_diameter_mining_drills')
        ['pt-PT']('large_diameter_mining_drills')
        ['en-US']('large_diameter_mining_drills')
    )
    .key('large-diameter-mining-drills')
    .orderHint('0.000017083829390071648330240');

export default largeDiameterMiningDrills;
