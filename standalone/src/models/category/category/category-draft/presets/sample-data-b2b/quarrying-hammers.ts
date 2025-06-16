import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import largeHydraulicHammers from './large-hydraulic-hammers';

const largeHydraulicHammersCategory =
  largeHydraulicHammers().build<TCategoryDraft>();

const quarryingHammers = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Steinbruchhämmer')
        ['it-IT']('Martelli per Cave')
        ['nl-NL']('Steengroevehamers')
        ['fr-FR']('Marteaux de carrière')
        ['en-AU']('Quarrying Hammers')
        ['es-ES']('Martillos de cantera')
        ['en-GB']('Quarrying Hammers')
        ['en-NZ']('Quarrying Hammers')
        ['pt-PT']('Martelos de Pedreira')
        ['en-US']('Quarrying Hammers')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hämmer, die für Steinbrucharbeiten konzipiert sind')
        ['it-IT']('Martelli progettati per operazioni di estrazione in cava')
        ['nl-NL']('Hamers ontworpen voor steengroeve-operaties')
        ['fr-FR']('Marteaux conçus pour les opérations de carrière')
        ['en-AU']('Hammers designed for quarrying operations')
        ['es-ES']('Martillos diseñados para operaciones de cantera')
        ['en-GB']('Hammers designed for quarrying operations')
        ['en-NZ']('Hammers designed for quarrying operations')
        ['pt-PT']('Martelos projetados para operações de pedreira')
        ['en-US']('Hammers designed for quarrying operations')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('steinbruch_haemmer')
        ['it-IT']('quarrying_hammers')
        ['nl-NL']('quarrying_hammers')
        ['fr-FR']('marteaux_carriere')
        ['en-AU']('quarrying_hammers')
        ['es-ES']('martillos_cantera')
        ['en-GB']('quarrying_hammers')
        ['en-NZ']('quarrying_hammers')
        ['pt-PT']('quarrying_hammers')
        ['en-US']('quarrying_hammers')
    )
    .key('quarrying-hammers')
    .orderHint('0.000017113644847601529627591')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default quarryingHammers;
