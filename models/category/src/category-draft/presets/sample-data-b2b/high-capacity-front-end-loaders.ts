import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
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
    .orderHint('0.000017083829370961875597117');

export default highCapacityFrontEndLoaders;
