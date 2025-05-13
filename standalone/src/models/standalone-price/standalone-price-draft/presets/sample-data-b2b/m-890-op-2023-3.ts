import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const m890Op20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('m890-op-2023-3')
    .sku('m890-op-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1694000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default m890Op20233;
