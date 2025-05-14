import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeDiameterMiningDrills from './large-diameter-mining-drills';

const largeDiameterMiningDrillsCategory =
  largeDiameterMiningDrills().build<TCategoryDraft>();

const explorationDrills = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Erkundungsbohrer')
        ['it-IT']('Trapani di Esplorazione')
        ['nl-NL']('Exploratieboormachines')
        ['fr-FR']("Forages d'exploration")
        ['en-AU']('Exploration Drills')
        ['es-ES']('Perforadoras de exploración')
        ['en-GB']('Exploration Drills')
        ['en-NZ']('Exploration Drills')
        ['pt-PT']('Brocas de Exploração')
        ['en-US']('Exploration Drills')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bohrer, die für Erkundungszwecke verwendet werden')
        ['it-IT']('Trapani utilizzati per scopi di esplorazione')
        ['nl-NL']('Boormachines gebruikt voor exploratiedoeleinden')
        ['fr-FR']("Forages utilisés à des fins d'exploration")
        ['en-AU']('Drills used for exploration purposes')
        ['es-ES']('Perforadoras utilizadas con fines de exploración')
        ['en-GB']('Drills used for exploration purposes')
        ['en-NZ']('Drills used for exploration purposes')
        ['pt-PT']('Brocas usadas para fins de exploração')
        ['en-US']('Drills used for exploration purposes')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('erkundungs_bohrer')
        ['it-IT']('exploration_drills')
        ['nl-NL']('exploration_drills')
        ['fr-FR']('forages_exploration')
        ['en-AU']('exploration_drills')
        ['es-ES']('perforadoras_exploracion')
        ['en-GB']('exploration_drills')
        ['en-NZ']('exploration_drills')
        ['pt-PT']('exploration_drills')
        ['en-US']('exploration_drills')
    )
    .key('exploration-drills')
    .orderHint('0.000017113644847351089727496')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default explorationDrills;
