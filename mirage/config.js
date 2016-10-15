export default function() {
  this.namespace = 'api';

  this.timing = 400; // simulate network delay

  this.get('/posts');
  this.get('/posts/:id');

  this.get('/posts/:id/comments', function(schema, request) {
    const postId = request.params.id;
    return schema.comments.where({ postId: postId });
  });

  this.post('/comments');

}
