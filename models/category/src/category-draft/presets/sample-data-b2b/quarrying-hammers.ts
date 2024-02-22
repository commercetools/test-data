import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeHydraulicHammers from './large-hydraulic-hammers';

const largeHydraulicHammersCategory =
  largeHydraulicHammers().build<TCategoryDraft>();

const quarryingHammers = (): TCategoryDraftBuilder =>
  empty()
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
    .orderHint('0.000017083829508032028254121')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default quarryingHammers;
