import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const qq567Yz20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('qq567-yz-2019-3')
    .sku('qq567-yz-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3575000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default qq567Yz20193;
