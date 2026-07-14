/**
 * Post data rules ensure unpublished Markdown files never receive public output.
 */
export default {
  permalink(data) {
    return data.published === false ? false : `insights/${data.slug}/index.html`;
  }
};
