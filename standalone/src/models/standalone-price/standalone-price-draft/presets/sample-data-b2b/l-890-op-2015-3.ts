import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const l890Op20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('l890-op-2015-3')
    .sku('l890-op-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default l890Op20153;
