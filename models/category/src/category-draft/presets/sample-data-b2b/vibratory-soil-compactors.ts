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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Verdichter, die Vibration für die Bodenverdichtung verwenden'
        )
        ['it-IT'](
          'Compattatori che utilizzano la vibrazione per la compattazione del suolo'
        )
        ['nl-NL']('Verdichters die trillingen gebruiken voor bodemverdichting')
        ['fr-FR'](
          'Compacteurs utilisant la vibration pour le compactage du sol'
        )
        ['en-AU']('Compactors using vibration for soil compaction')
        ['es-ES'](
          'Compactadores que utilizan vibración para compactar el suelo'
        )
        ['en-GB']('Compactors using vibration for soil compaction')
        ['en-NZ']('Compactors using vibration for soil compaction')
        ['pt-PT'](
          'Compactadores que utilizam vibração para compactação de solo'
        )
        ['en-US']('Compactors using vibration for soil compaction')
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
    .orderHint('0.00001711364484765204216013')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default vibratorySoilCompactors;
