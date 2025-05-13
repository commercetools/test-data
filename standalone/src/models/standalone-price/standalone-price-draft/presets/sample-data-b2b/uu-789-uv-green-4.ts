import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvGreen4 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-green-4')
    .sku('uu789-uv-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default uu789UvGreen4;
