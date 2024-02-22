import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const largeHydraulicHammers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hydraulische Hämmer')
        ['it-IT']('Martelli Idraulici')
        ['nl-NL']('Hydraulische Hamers')
        ['fr-FR']('Marteaux hydrauliques')
        ['en-AU']('Hydraulic Hammers')
        ['es-ES']('Martillos hidráulicos')
        ['en-GB']('Hydraulic Hammers')
        ['en-NZ']('Hydraulic Hammers')
        ['pt-PT']('Martelos Hidráulicos')
        ['en-US']('Hydraulic Hammers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('grosse_hydraulikhaemmer')
        ['it-IT']('large_hydraulic_hammers')
        ['nl-NL']('large_hydraulic_hammers')
        ['fr-FR']('marteaux_hydrauliques_grande_taille')
        ['en-AU']('large_hydraulic_hammers')
        ['es-ES']('martillos_hidraulicos_grandes')
        ['en-GB']('large_hydraulic_hammers')
        ['en-NZ']('large_hydraulic_hammers')
        ['pt-PT']('large_hydraulic_hammers')
        ['en-US']('large_hydraulic_hammers')
    )
    .key('large-hydraulic-hammers')
    .orderHint('0.000017083829393162045787358');

export default largeHydraulicHammers;
