module.exports = {
    getComments(req, res) {
        let posts = global.store.posts;
        let postId = req.params.postId;
        let post = posts[postId];

        if (!post)
            return res.status(400).send("err: cannot find post with id:" + postId);

        let comments = posts[postId].comments;

        res.status(200).send(comments);
    },
    addComment(req, res) {
        let posts = global.store.posts;
        let postId = req.params.postId;
        let post = posts[postId];

        if (!post)
            return res.status(400).send("err: cannot find post with id:" + postId);

        post.comments.push(req.body.text)

        res.status(201).send({ id: comments.length });

    },
    updateComment(req, res) {

        //input validation
        if (!req.body.text)
            return res.status(400).send("err: missing comment text!");

        let posts = global.store.posts;
        let postId = req.params.postId; //what if the parameter doesn't come...
        let post = posts[postId];

        if (!post)
            return res.status(400).send("err: cannot find post with id:" + postId);

        let comments = posts[postId].comments;
        let commentId = req.params.commentId;

        comments[commentId].text = req.body.text;
        res.status(200).send(posts[postId]);
    },
    removeComment(req, res) {
        let posts = global.store.posts;
        let postId = req.params.postId;
        let post = posts[postId];

        if (!post)
            return res.status(400).send("err: cannot find post with id:" + postId);

        let comments = posts[postId].comments;
        let commentId = req.params.commentId;
        let comment = comments[commentId];

        if (!comment)
            return res.status(400).send("WARNING: cannot find comment with id:" + commentId);

        comments.splice(commentId, 1);
        res.status(204).send('update successful');

    }
}
