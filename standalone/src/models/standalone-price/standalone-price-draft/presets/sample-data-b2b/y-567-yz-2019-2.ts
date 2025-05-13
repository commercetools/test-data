import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const y567Yz20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2019-2')
    .sku('y567-yz-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2530000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default y567Yz20192;
