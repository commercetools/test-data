import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2019-2')
    .sku('ee567-yz-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ee567Yz20192;
