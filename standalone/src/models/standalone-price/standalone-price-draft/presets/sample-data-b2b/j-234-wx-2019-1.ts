import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const j234Wx20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('j234-wx-2019-1')
    .sku('j234-wx-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1331000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default j234Wx20191;
