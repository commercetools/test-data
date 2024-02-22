import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const heavyDutySoilCompactorsRollers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Schwerlast-Bodenverdichter')
        ['it-IT']('Compattatori di Suolo')
        ['nl-NL']('Bodemverdichters')
        ['fr-FR']('Compacteurs de sol')
        ['en-AU']('Soil Compactors')
        ['es-ES']('Compactadores de suelo')
        ['en-GB']('Soil Compactors')
        ['en-NZ']('Soil Compactors')
        ['pt-PT']('Compactadores de Solo')
        ['en-US']('Soil Compactors')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('schwerlast_bodenverdichter_walzen')
        ['it-IT']('heavy_duty_soil_compactors_rollers')
        ['nl-NL']('heavy_duty_soil_compactors_rollers')
        ['fr-FR']('compacteurs_rouleaux_sol_haute_resistance')
        ['en-AU']('heavy_duty_soil_compactors_rollers')
        ['es-ES']('compactadores_rodillos_suelo_servicio_pesado')
        ['en-GB']('heavy_duty_soil_compactors_rollers')
        ['en-NZ']('heavy_duty_soil_compactors_rollers')
        ['pt-PT']('heavy_duty_soil_compactors_rollers')
        ['en-US']('heavy_duty_soil_compactors_rollers')
    )
    .key('heavy-duty-soil-compactors-rollers')
    .orderHint('0.000017083829382892122055945');

export default heavyDutySoilCompactorsRollers;
