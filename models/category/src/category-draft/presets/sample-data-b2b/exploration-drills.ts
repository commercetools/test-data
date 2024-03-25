import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
    .orderHint('0.000017083829497591898860695')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default explorationDrills;
