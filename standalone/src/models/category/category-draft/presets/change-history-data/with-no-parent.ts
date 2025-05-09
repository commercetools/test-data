import CategoryDraft from '../../builder';

const withCategoryNoParent = () => CategoryDraft().parent(undefined);

export default withCategoryNoParent;
