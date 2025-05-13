import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hämmer für Pfahl- und Fundamentarbeiten')
        ['it-IT']('Martelli per lavori di pali e fondazioni')
        ['nl-NL']('Hamers voor heien en funderingswerk')
        ['fr-FR']('Marteaux pour le battage et les travaux de fondation')
        ['en-AU']('Hammers for piling and foundation work')
        ['es-ES']('Martillos para trabajos de pilotaje y cimentación')
        ['en-GB']('Hammers for piling and foundation work')
        ['en-NZ']('Hammers for piling and foundation work')
        ['pt-PT']('Martelos para cravação e trabalho de fundação')
        ['en-US']('Hammers for piling and foundation work')
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
    .orderHint('0.00001711364484771461285432')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default pilingHammers;
