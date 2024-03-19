import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
    .orderHint('0.00001708382940863337373225')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default amphibiousExcavators;
