import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger, die im Oberflächenbergbau eingesetzt werden')
        ['it-IT']('Escavatori utilizzati in miniere di superficie')
        ['nl-NL']('Graafmachines gebruikt in oppervlaktemijnbouw')
        [
          'fr-FR'
        ]("Excavatrices utilisées dans l'exploitation minière de surface")
        ['en-AU']('Excavators used in surface mining')
        ['es-ES']('Excavadoras utilizadas en minería superficial')
        ['en-GB']('Excavators used in surface mining')
        ['en-NZ']('Excavators used in surface mining')
        ['pt-PT']('Escavadeiras usadas na mineração de superfície')
        ['en-US']('Excavators used in surface mining')
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
    .orderHint('0.0000171136448493168434701')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeScaleMiningExcavatorsCategory.key!)
    );

export default surfaceMiningExcavators;
