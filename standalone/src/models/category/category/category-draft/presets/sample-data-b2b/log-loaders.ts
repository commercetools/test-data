import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

const highCapacityFrontEndLoadersCategory =
  highCapacityFrontEndLoaders().build<TCategoryDraft>();

const logLoaders = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Lader, spezialisiert auf das Handling von Holzstapeln')
        ['it-IT']('Caricatori specializzati per la manipolazione di tronchi')
        ['nl-NL']('Laders gespecialiseerd in houtverwerking')
        ['fr-FR']('Chargeuses spécialisées dans la manipulation de grumes')
        ['en-AU']('Loaders specialized for log handling')
        ['es-ES']('Cargadores especializados para el manejo de troncos')
        ['en-GB']('Loaders specialized for log handling')
        ['en-NZ']('Loaders specialized for log handling')
        ['pt-PT']('Carregadeiras especializadas para manuseio de toras')
        ['en-US']('Loaders specialized for log handling')
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
    .orderHint('0.00001711364484753190019805')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityFrontEndLoadersCategory.key!)
    );

export default logLoaders;
