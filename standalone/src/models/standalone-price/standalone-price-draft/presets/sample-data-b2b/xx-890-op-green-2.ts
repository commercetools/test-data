import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-green-2')
    .sku('xx890-op-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(6050000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default xx890OpGreen2;
