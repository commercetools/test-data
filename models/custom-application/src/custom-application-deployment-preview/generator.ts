import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TCustomApplicationDeploymentPreview } from './types';

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationDeploymentPreview>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    alias: fake((f) => slugify(f.lorem.word())),
    url: fake((f) => f.internet.url()),
  },
});

export default generator;
