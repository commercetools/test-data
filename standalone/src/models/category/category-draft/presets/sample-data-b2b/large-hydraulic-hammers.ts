import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hydraulikhämmer mit großer Kapazität')
        ['it-IT']('Martelli idraulici ad alta capacità')
        ['nl-NL']('Hydraulische hamers met grote capaciteit')
        ['fr-FR']('Marteaux hydrauliques avec une grande capacité')
        ['en-AU']('Hydraulic hammers with large capacity')
        ['es-ES']('Martillos hidráulicos con gran capacidad')
        ['en-GB']('Hydraulic hammers with large capacity')
        ['en-NZ']('Hydraulic hammers with large capacity')
        ['pt-PT']('Martelos hidráulicos com grande capacidade')
        ['en-US']('Hydraulic hammers with large capacity')
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
    .orderHint('0.000017113644845361837216539');

export default largeHydraulicHammers;
