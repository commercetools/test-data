import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x456Yz20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x456-yz-2019-2')
    .sku('x456-yz-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1210000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x456Yz20192;
