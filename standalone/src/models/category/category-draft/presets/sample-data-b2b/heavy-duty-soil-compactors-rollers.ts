import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Verdichter und Walzen für schwere Bodenaufgaben')
        ['it-IT']('Compattatori e rulli per compiti pesanti su suolo')
        ['nl-NL']('Verdichters en walsen voor zware bodemtaken')
        [
          'fr-FR'
        ]('Compacteurs et rouleaux pour des tâches de sol haute résistance')
        ['en-AU']('Compactors and rollers for heavy-duty soil tasks')
        [
          'es-ES'
        ]('Compactadores y rodillos para tareas de suelo de servicio pesado')
        ['en-GB']('Compactors and rollers for heavy-duty soil tasks')
        ['en-NZ']('Compactors and rollers for heavy-duty soil tasks')
        [
          'pt-PT'
        ]('Compactadores e rolos para tarefas pesadas de compactação de solo')
        ['en-US']('Compactors and rollers for heavy-duty soil tasks')
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
    .orderHint('0.000017113644845271262904199');

export default heavyDutySoilCompactorsRollers;
