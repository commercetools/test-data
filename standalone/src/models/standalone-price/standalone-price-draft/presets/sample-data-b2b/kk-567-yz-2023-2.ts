import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const kk567Yz20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('kk567-yz-2023-2')
    .sku('kk567-yz-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3630001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default kk567Yz20232;
