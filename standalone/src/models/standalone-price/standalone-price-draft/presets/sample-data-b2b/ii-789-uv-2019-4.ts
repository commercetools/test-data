import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ii789Uv20194 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ii789-uv-2019-4')
    .sku('ii789-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default ii789Uv20194;
