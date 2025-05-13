import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
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
        ['fr-FR']("Excavatrices pour l'exploitation minière en profondeur")
        ['en-AU']('Deep Mining Excavators')
        ['es-ES']('Excavadoras de minería profunda')
        ['en-GB']('Deep Mining Excavators')
        ['en-NZ']('Deep Mining Excavators')
        ['pt-PT']('Escavadeiras para Mineração Profunda')
        ['en-US']('Deep Mining Excavators')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger, die im Tiefbau eingesetzt werden')
        ['it-IT']('Escavatori utilizzati in miniere profonde')
        ['nl-NL']('Graafmachines gebruikt in diepe mijnbouw')
        [
          'fr-FR'
        ]("Excavatrices utilisées dans l'exploitation minière en profondeur")
        ['en-AU']('Excavators used in deep mining')
        ['es-ES']('Excavadoras utilizadas en minería profunda')
        ['en-GB']('Excavators used in deep mining')
        ['en-NZ']('Excavators used in deep mining')
        ['pt-PT']('Escavadeiras usadas na mineração profunda')
        ['en-US']('Excavators used in deep mining')
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
    .orderHint('0.00001711364484935345256313')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default deepMiningExcavators;
