import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

const highCapacityFrontEndLoadersCategory =
  highCapacityFrontEndLoaders().build<TCategoryDraft>();

const logLoaders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Holzstapel-Lader')
        ['it-IT']('Caricatori di Tronchi')
        ['nl-NL']('Houtladers')
        ['fr-FR']('Chargeuses de grumes')
        ['en-AU']('Log Loaders')
        ['es-ES']('Cargadores de troncos')
        ['en-GB']('Log Loaders')
        ['en-NZ']('Log Loaders')
        ['pt-PT']('Carregadeiras de Toras')
        ['en-US']('Log Loaders')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('holz_lader')
        ['it-IT']('log_loaders')
        ['nl-NL']('log_loaders')
        ['fr-FR']('chargeuses_grumes')
        ['en-AU']('log_loaders')
        ['es-ES']('cargadores_troncos')
        ['en-GB']('log_loaders')
        ['en-NZ']('log_loaders')
        ['pt-PT']('log_loaders')
        ['en-US']('log_loaders')
    )
    .key('log-loaders')
    .orderHint('0.000017083829434891467155616')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityFrontEndLoadersCategory.key!)
    );

export default logLoaders;
