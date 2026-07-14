/**
 * Post data rules ensure unpublished Markdown files never receive public output.
 */
export default {
  permalink(data) {
    return data.published === false || data.draft === true ? false : `insights/${data.slug}/index.html`;
  }
};
