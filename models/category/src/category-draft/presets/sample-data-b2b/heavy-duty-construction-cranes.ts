import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
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
    .orderHint('0.000017083829387371397575028');

export default heavyDutyConstructionCranes;
