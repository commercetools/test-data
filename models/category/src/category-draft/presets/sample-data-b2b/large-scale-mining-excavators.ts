import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import excavators from './excavators';

const excavatorsCategory = excavators().build<TCategoryDraft>();

const largeScaleMiningExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bergbaubagger')
        ['it-IT']('Escavatori Minerari')
        ['nl-NL']('Mijnbouwgraafmachines')
        ['fr-FR']("Excavatrices pour l'exploitation minière")
        ['en-AU']('Mining Excavators')
        ['es-ES']('Excavadoras de minería')
        ['en-GB']('Mining Excavators')
        ['en-NZ']('Mining Excavators')
        ['pt-PT']('Escavadeiras de Mineração')
        ['en-US']('Mining Excavators')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('grobmabstabbau_bagger')
        ['it-IT']('large_scale_mining_excavators')
        ['nl-NL']('large_scale_mining_excavators')
        ['fr-FR']('excavatrices_grande_echelle_mining')
        ['en-AU']('large_scale_mining_excavators')
        ['es-ES']('excavadoras_mineria_gran_escala')
        ['en-GB']('large_scale_mining_excavators')
        ['en-NZ']('large_scale_mining_excavators')
        ['pt-PT']('large_scale_mining_excavators')
        ['en-US']('large_scale_mining_excavators')
    )
    .key('large-scale-mining-excavators')
    .orderHint('0.000017083829398271003971003')
    .parent(KeyReferenceDraft.presets.category().key(excavatorsCategory.key!));

export default largeScaleMiningExcavators;
