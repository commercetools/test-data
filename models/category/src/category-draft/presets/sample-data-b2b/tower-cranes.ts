import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

const heavyDutyConstructionCranesCategory =
  heavyDutyConstructionCranes().build<TCategoryDraft>();

const towerCranes = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Turmdrehkräne')
        ['it-IT']('Gru a Torre')
        ['nl-NL']('Torenkranen')
        ['fr-FR']('Grues à tour  hauteur')
        ['en-AU']('Tower Cranes')
        ['es-ES']('Gruas torre')
        ['en-GB']('Tower Cranes')
        ['en-NZ']('Tower Cranes')
        ['pt-PT']('Guindastes de Torre')
        ['en-US']('Tower Cranes')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('turm_kraene')
        ['it-IT']('tower_cranes')
        ['nl-NL']('tower_cranes')
        ['fr-FR']('grues_a_tour')
        ['en-AU']('tower_cranes')
        ['es-ES']('gruas_torre')
        ['en-GB']('tower_cranes')
        ['en-NZ']('tower_cranes')
        ['pt-PT']('tower_cranes')
        ['en-US']('tower_cranes')
    )
    .key('tower-cranes')
    .orderHint('0.00001708382948409947515103')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default towerCranes;
