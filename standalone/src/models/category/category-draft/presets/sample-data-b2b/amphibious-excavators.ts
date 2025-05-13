import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeScaleMiningExcavators from './large-scale-mining-excavators';

const largeScaleMiningExcavatorsCategory =
  largeScaleMiningExcavators().build<TCategoryDraft>();

const amphibiousExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Amphibienbagger')
        ['it-IT']('Escavatori Anfibi')
        ['nl-NL']('Amfibische Graafmachines')
        ['fr-FR']('Excavatrices amphibies')
        ['en-AU']('Amphibious Excavators')
        ['es-ES']('Excavadoras anfibias')
        ['en-GB']('Amphibious Excavators')
        ['en-NZ']('Amphibious Excavators')
        ['pt-PT']('Escavadeiras Anfíbias')
        ['en-US']('Amphibious Excavators')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger, die für den amphibischen Einsatz konzipiert sind')
        ['it-IT']('Escavatori progettati per uso anfibio')
        ['nl-NL']('Graafmachines ontworpen voor amfibisch gebruik')
        ['fr-FR']('Excavatrices conçues pour une utilisation amphibie')
        ['en-AU']('Excavators designed for amphibious use')
        ['es-ES']('Excavadoras diseñadas para uso anfibio')
        ['en-GB']('Excavators designed for amphibious use')
        ['en-NZ']('Excavators designed for amphibious use')
        ['pt-PT']('Escavadeiras projetadas para uso anfíbio')
        ['en-US']('Excavators designed for amphibious use')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('amphibien_bagger')
        ['it-IT']('amphibious_excavators')
        ['nl-NL']('amphibious_excavators')
        ['fr-FR']('excavatrices_amphibious')
        ['en-AU']('amphibious_excavators')
        ['es-ES']('excavadoras_anfibias')
        ['en-GB']('amphibious_excavators')
        ['en-NZ']('amphibious_excavators')
        ['pt-PT']('amphibious_excavators')
        ['en-US']('amphibious_excavators')
    )
    .key('amphibious-excavators')
    .orderHint('0.000017113644849391366749683')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default amphibiousExcavators;
