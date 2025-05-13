import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-blue-3')
    .sku('xx890-op-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(7150000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default xx890OpBlue3;
