import type { TProductDraft } from '../../../types';
import steelHipFlask from './steel-hip-flask';
import productDraft from './steel-hip-flask.spec.json';

describe(`with steelHipFlask preset`, () => {
  it(`should return a steelHipFlask preset`, () => {
    const steelHipFlaskPreset = steelHipFlask().build<TProductDraft>();
    expect(steelHipFlaskPreset).toMatchObject(productDraft.rest);
  });
});
