import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutySoilCompactorsRollers from './heavy-duty-soil-compactors-rollers';

const heavyDutySoilCompactorsRollersCategory =
  heavyDutySoilCompactorsRollers().build<TCategoryDraft>();

const vibratorySoilCompactors = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Vibrations-Bodenverdichter')
        ['it-IT']('Compattatori Vibranti per Suolo')
        ['nl-NL']('Trilbodemverdichters')
        ['fr-FR']('Compacteurs vibrants de sol')
        ['en-AU']('Vibratory Soil Compactors')
        ['es-ES']('Compactadores vibratorios de suelo')
        ['en-GB']('Vibratory Soil Compactors')
        ['en-NZ']('Vibratory Soil Compactors')
        ['pt-PT']('Compactadores de Solo Vibratórios')
        ['en-US']('Vibratory Soil Compactors')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('vibrations_bodenverdichter')
        ['it-IT']('vibratory_soil_compactors')
        ['nl-NL']('vibratory_soil_compactors')
        ['fr-FR']('compacteurs_vibrants_sol')
        ['en-AU']('vibratory_soil_compactors')
        ['es-ES']('compactadores_vibratorios_suelo')
        ['en-GB']('vibratory_soil_compactors')
        ['en-NZ']('vibratory_soil_compactors')
        ['pt-PT']('vibratory_soil_compactors')
        ['en-US']('vibratory_soil_compactors')
    )
    .key('vibratory-soil-compactors')
    .orderHint('0.000017083829471811901243371')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default vibratorySoilCompactors;
