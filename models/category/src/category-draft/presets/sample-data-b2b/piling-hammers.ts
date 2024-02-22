import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeHydraulicHammers from './large-hydraulic-hammers';

const largeHydraulicHammersCategory =
  largeHydraulicHammers().build<TCategoryDraft>();

const pilingHammers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Rammhämmer')
        ['it-IT']('Martelli per Pali')
        ['nl-NL']('Heihamers')
        ['fr-FR']('Marteaux de battage')
        ['en-AU']('Piling Hammers')
        ['es-ES']('Martillos de pilotaje')
        ['en-GB']('Piling Hammers')
        ['en-NZ']('Piling Hammers')
        ['pt-PT']('Martelos para Cravação')
        ['en-US']('Piling Hammers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ramm_haemmer')
        ['it-IT']('piling_hammers')
        ['nl-NL']('piling_hammers')
        ['fr-FR']('marteaux_battage')
        ['en-AU']('piling_hammers')
        ['es-ES']('martillos_pilotaje')
        ['en-GB']('piling_hammers')
        ['en-NZ']('piling_hammers')
        ['pt-PT']('piling_hammers')
        ['en-US']('piling_hammers')
    )
    .key('piling-hammers')
    .orderHint('0.000017083829511001708720503')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default pilingHammers;
