import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const j234Wx20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('j234-wx-2019-2')
    .sku('j234-wx-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1210000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default j234Wx20192;
