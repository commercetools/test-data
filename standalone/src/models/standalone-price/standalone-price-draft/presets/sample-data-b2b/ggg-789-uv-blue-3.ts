import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ggg789UvBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ggg789-uv-blue-3')
    .sku('ggg789-uv-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(10725000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ggg789UvBlue3;
