import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ww567YzRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-red-3')
    .sku('ww567-yz-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5940000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ww567YzRed3;
