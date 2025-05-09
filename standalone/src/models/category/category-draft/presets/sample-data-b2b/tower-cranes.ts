import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kräne, die für den Hochhausbau geeignet sind')
        ['it-IT']('Gru adatte per la costruzione di edifici alti')
        ['nl-NL']('Kranen geschikt voor hoogbouw')
        ['fr-FR']('Grues adaptées à la construction en hauteur')
        ['en-AU']('Cranes suitable for high-rise construction')
        ['es-ES']('Gruas adecuadas para la construcción de rascacielos')
        ['en-GB']('Cranes suitable for high-rise construction')
        ['en-NZ']('Cranes suitable for high-rise construction')
        ['pt-PT']('Guindastes adequados para construção de edifícios altos')
        ['en-US']('Cranes suitable for high-rise construction')
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
    .orderHint('0.000017113644847601298494328')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default towerCranes;
