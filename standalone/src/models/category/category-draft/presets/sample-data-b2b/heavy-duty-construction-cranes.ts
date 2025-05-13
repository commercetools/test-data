import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const heavyDutyConstructionCranes = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Baukräne')
        ['it-IT']('Gru da Costruzione')
        ['nl-NL']('Bouwkranen')
        ['fr-FR']('Grues de construction')
        ['en-AU']('Construction Cranes')
        ['es-ES']('Gruas de construcción')
        ['en-GB']('Construction Cranes')
        ['en-NZ']('Construction Cranes')
        ['pt-PT']('Guindastes de Construção')
        ['en-US']('Construction Cranes')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kräne, die für anspruchsvolle Bauaufgaben konzipiert sind')
        ['it-IT']('Gru progettate per compiti di costruzione pesanti')
        ['nl-NL']('Kranen ontworpen voor zware bouwtaken')
        ['fr-FR']('Grues conçues pour des tâches de construction lourdes')
        ['en-AU']('Cranes designed for heavy-duty construction tasks')
        [
          'es-ES'
        ]('Gruas diseñadas para tareas de construcción de servicio pesado')
        ['en-GB']('Cranes designed for heavy-duty construction tasks')
        ['en-NZ']('Cranes designed for heavy-duty construction tasks')
        ['pt-PT']('Guindastes projetados para tarefas pesadas de construção')
        ['en-US']('Cranes designed for heavy-duty construction tasks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('schwerlast_baukraene')
        ['it-IT']('heavy_duty_construction_cranes')
        ['nl-NL']('heavy_duty_construction_cranes')
        ['fr-FR']('gros_engins_construction')
        ['en-AU']('heavy_duty_construction_cranes')
        ['es-ES']('gruas_construccion_servicio_pesado')
        ['en-GB']('heavy_duty_construction_cranes')
        ['en-NZ']('heavy_duty_construction_cranes')
        ['pt-PT']('heavy_duty_construction_cranes')
        ['en-US']('heavy_duty_construction_cranes')
    )
    .key('heavy-duty-construction-cranes')
    .orderHint('0.000017113644845512100710765');

export default heavyDutyConstructionCranes;
