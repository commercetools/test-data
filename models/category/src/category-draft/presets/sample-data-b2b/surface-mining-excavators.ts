import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeScaleMiningExcavators from './large-scale-mining-excavators';

const largeScaleMiningExcavatorsCategory =
  largeScaleMiningExcavators().build<TCategoryDraft>();

const surfaceMiningExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger für den Oberflächenbergbau')
        ['it-IT']('Escavatori per Miniere di Superficie')
        ['nl-NL']('Graafmachines voor Oppervlaktemijnbouw')
        ['fr-FR']("Excavatrices pour l'exploitation minière de surface")
        ['en-AU']('Surface Mining Excavators')
        ['es-ES']('Excavadoras de minería superficial')
        ['en-GB']('Surface Mining Excavators')
        ['en-NZ']('Surface Mining Excavators')
        ['pt-PT']('Escavadeiras para Mineração de Superfície')
        ['en-US']('Surface Mining Excavators')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('oberflaechenbergbau_bagger')
        ['it-IT']('surface_mining_excavators')
        ['nl-NL']('surface_mining_excavators')
        ['fr-FR']('excavatrices_surface_mining')
        ['en-AU']('surface_mining_excavators')
        ['es-ES']('excavadoras_mineria_superficial')
        ['en-GB']('surface_mining_excavators')
        ['en-NZ']('surface_mining_excavators')
        ['pt-PT']('surface_mining_excavators')
        ['en-US']('surface_mining_excavators')
    )
    .key('surface-mining-excavators')
    .orderHint('0.000017083829401241506966080')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default surfaceMiningExcavators;
