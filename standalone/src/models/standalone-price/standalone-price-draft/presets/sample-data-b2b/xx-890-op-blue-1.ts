import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-blue-1')
    .sku('xx890-op-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(6050000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default xx890OpBlue1;
