import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const p234Qw20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('p234-qw-2015-3')
    .sku('p234-qw-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1122000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default p234Qw20153;
