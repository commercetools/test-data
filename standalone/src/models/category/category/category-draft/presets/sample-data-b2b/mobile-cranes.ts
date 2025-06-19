import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

const heavyDutyConstructionCranesCategory =
  heavyDutyConstructionCranes().build<TCategoryDraft>();

const mobileCranes = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Mobile Kräne')
        ['it-IT']('Gru Mobili')
        ['nl-NL']('Mobiele Kranen')
        ['fr-FR']('Grues mobiles')
        ['en-AU']('Mobile Cranes')
        ['es-ES']('Gruas móviles')
        ['en-GB']('Mobile Cranes')
        ['en-NZ']('Mobile Cranes')
        ['pt-PT']('Guindastes Móveis')
        ['en-US']('Mobile Cranes')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Vielseitige Kräne mit Mobilität für verschiedene Aufgaben')
        ['it-IT']('Gru versatili con mobilità per vari compiti')
        ['nl-NL']('Veelzijdige kranen met mobiliteit voor diverse taken')
        ['fr-FR']('Grues polyvalentes avec mobilité pour diverses tâches')
        ['en-AU']('Versatile cranes with mobility for various tasks')
        ['es-ES']('Gruas versátiles con movilidad para diversas tareas')
        ['en-GB']('Versatile cranes with mobility for various tasks')
        ['en-NZ']('Versatile cranes with mobility for various tasks')
        ['pt-PT']('Guindastes versáteis com mobilidade para várias tarefas')
        ['en-US']('Versatile cranes with mobility for various tasks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('mobile_kraene')
        ['it-IT']('mobile_cranes')
        ['nl-NL']('mobile_cranes')
        ['fr-FR']('grues_mobiles')
        ['en-AU']('mobile_cranes')
        ['es-ES']('gruas_moviles')
        ['en-GB']('mobile_cranes')
        ['en-NZ']('mobile_cranes')
        ['pt-PT']('mobile_cranes')
        ['en-US']('mobile_cranes')
    )
    .key('mobile-cranes')
    .orderHint('0.000017113644847721851389614')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default mobileCranes;
