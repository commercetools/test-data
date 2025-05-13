import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oo789Uv20198 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oo789-uv-2019-8')
    .sku('oo789-uv-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2750000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default oo789Uv20198;
