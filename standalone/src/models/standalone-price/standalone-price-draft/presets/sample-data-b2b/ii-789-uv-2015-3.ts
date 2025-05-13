import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ii789Uv20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ii789-uv-2015-3')
    .sku('ii789-uv-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3300000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ii789Uv20153;
