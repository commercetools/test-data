import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-green-1')
    .sku('ccc567-yz-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(11880000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ccc567YzGreen1;
