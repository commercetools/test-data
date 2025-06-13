import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bohrer mit großem Durchmesser für Bergbauoperationen')
        ['it-IT']('Trapani con grande diametro per operazioni minerarie')
        ['nl-NL']('Boormachines met grote diameter voor mijnbouwoperaties')
        ['fr-FR']('Forages de grand diamètre pour les opérations minières')
        ['en-AU']('Drills with large diameter for mining operations')
        ['es-ES']('Perforadoras con gran diámetro para operaciones mineras')
        ['en-GB']('Drills with large diameter for mining operations')
        ['en-NZ']('Drills with large diameter for mining operations')
        ['pt-PT']('Brocas com grande diâmetro para operações de mineração')
        ['en-US']('Drills with large diameter for mining operations')
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
    .orderHint('0.000017113644845261017998287');

export default largeDiameterMiningDrills;
