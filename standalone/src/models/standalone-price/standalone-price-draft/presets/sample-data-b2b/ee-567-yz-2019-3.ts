import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2019-3')
    .sku('ee567-yz-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2860000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ee567Yz20193;
