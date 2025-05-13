import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2023-1')
    .sku('ee567-yz-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2640000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ee567Yz20231;
