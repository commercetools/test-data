import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeScaleMiningExcavators from './large-scale-mining-excavators';

const largeScaleMiningExcavatorsCategory =
  largeScaleMiningExcavators().build<TCategoryDraft>();

const deepMiningExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger für den Tiefbau')
        ['it-IT']('Escavatori per Miniere Profonde')
        ['nl-NL']('Diepe Mijnbouwgraafmachines')
        ['fr-FR']('Excavatrices pour l&#39;exploitation minière en profondeur')
        ['en-AU']('Deep Mining Excavators')
        ['es-ES']('Excavadoras de minería profunda')
        ['en-GB']('Deep Mining Excavators')
        ['en-NZ']('Deep Mining Excavators')
        ['pt-PT']('Escavadeiras para Mineração Profunda')
        ['en-US']('Deep Mining Excavators')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('tiefbau_bagger')
        ['it-IT']('deep_mining_excavators')
        ['nl-NL']('deep_mining_excavators')
        ['fr-FR']('excavatrices_deep_mining')
        ['en-AU']('deep_mining_excavators')
        ['es-ES']('excavadoras_mineria_profunda')
        ['en-GB']('deep_mining_excavators')
        ['en-NZ']('deep_mining_excavators')
        ['pt-PT']('deep_mining_excavators')
        ['en-US']('deep_mining_excavators')
    )
    .key('deep-mining-excavators')
    .orderHint('0.0000170838294044621333943')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default deepMiningExcavators;
