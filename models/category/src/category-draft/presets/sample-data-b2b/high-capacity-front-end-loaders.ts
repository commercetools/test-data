import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const highCapacityFrontEndLoaders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Frontlader')
        ['it-IT']('Caricatori')
        ['nl-NL']('Laders')
        ['fr-FR']('Chargeuses')
        ['en-AU']('Loaders')
        ['es-ES']('Cargadores')
        ['en-GB']('Loaders')
        ['en-NZ']('Loaders')
        ['pt-PT']('Carregadeiras')
        ['en-US']('Loaders')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Lader mit hoher Kapazität für den Fronteinsatz')
        ['it-IT']('Caricatori ad alta capacità per uso frontale')
        ['nl-NL']('Laders met hoge capaciteit voor front-end gebruik')
        [
          'fr-FR'
        ]('Chargeuses avec une capacité élevée pour une utilisation frontale')
        ['en-AU']('Loaders with high capacity for front-end use')
        ['es-ES']('Cargadores con alta capacidad para uso frontal')
        ['en-GB']('Loaders with high capacity for front-end use')
        ['en-NZ']('Loaders with high capacity for front-end use')
        ['pt-PT']('Carregadeiras com alta capacidade para uso frontal')
        ['en-US']('Loaders with high capacity for front-end use')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('hohe_kapazitaet_frontlader')
        ['it-IT']('high_capacity_front_end_loaders')
        ['nl-NL']('high_capacity_front_end_loaders')
        ['fr-FR']('chargeuses_haute_capacite_frontale')
        ['en-AU']('high_capacity_front_end_loaders')
        ['es-ES']('cargadores_frontales_alta_capacidad')
        ['en-GB']('high_capacity_front_end_loaders')
        ['en-NZ']('high_capacity_front_end_loaders')
        ['pt-PT']('high_capacity_front_end_loaders')
        ['en-US']('high_capacity_front_end_loaders')
    )
    .key('high-capacity-front-end-loaders')
    .orderHint('0.000017113644844981877777123');

export default highCapacityFrontEndLoaders;
