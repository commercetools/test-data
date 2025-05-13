import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ggg789UvBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ggg789-uv-blue-1')
    .sku('ggg789-uv-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(9075001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ggg789UvBlue1;
