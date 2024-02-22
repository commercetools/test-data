import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

const heavyDutyConstructionCranesCategory =
  heavyDutyConstructionCranes().build<TCategoryDraft>();

const crawlerCranes = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Raupenkräne')
        ['it-IT']('Gru Cingolate')
        ['nl-NL']('Rupskranen')
        ['fr-FR']('Grues sur chenilles')
        ['en-AU']('Crawler Cranes')
        ['es-ES']('Gruas de orugas')
        ['en-GB']('Crawler Cranes')
        ['en-NZ']('Crawler Cranes')
        ['pt-PT']('Guindastes de Esteira')
        ['en-US']('Crawler Cranes')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('raupen_kraene')
        ['it-IT']('crawler_cranes')
        ['nl-NL']('crawler_cranes')
        ['fr-FR']('grues_sur_chenilles')
        ['en-AU']('crawler_cranes')
        ['es-ES']('gruas_orugas')
        ['en-GB']('crawler_cranes')
        ['en-NZ']('crawler_cranes')
        ['pt-PT']('crawler_cranes')
        ['en-US']('crawler_cranes')
    )
    .key('crawler-cranes')
    .orderHint('0.000017083829491681975334762')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default crawlerCranes;
