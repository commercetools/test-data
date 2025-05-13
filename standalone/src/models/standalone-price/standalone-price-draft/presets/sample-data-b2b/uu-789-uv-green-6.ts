import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvGreen6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-green-6')
    .sku('uu789-uv-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2000000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default uu789UvGreen6;
