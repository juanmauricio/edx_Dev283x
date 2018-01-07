module.exports = {
    getPosts(req, res) {
        let posts = global.store.posts;
        res.status(200).send(posts);
    },
    addPost(req, res) {
        //validate input.
        if (!req.body.name || !req.body.url || !req.body.text)
            return res.status(400).send("err: attributes missing!");

        let posts = global.store.posts;
        let post = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        };
        post.commentes = [];
        posts.push(post);
        res.status(201).send({ id: _posts.length });

    },
    updatePost(req, res) {
        if (!req.body.name || !req.body.url || !req.body.text)
            return res.status(400).send("err: attributes missing!");

        let posts = global.store.posts;
        let postId = req.params.postId;
        let post = posts[postId];

        if (!post)
            return res.status(400).send("err: can't find post with id:" + postId);
        else {
            //updates...
            post.name = req.body.name;
            post.url = req.body.url;
            post.text = req.body.text;
        }

        res.status(200).send(post);

    },
    removePost(req, res) {

        let posts = global.store.posts;
        let postId = req.params.postId;
        let post = posts[postId];

        if (!post)
            res.status(400).send("err: can't find post with id:" + postId);

        posts.splice(postId, 1);
        res.status(200).send('succesfully removed post: ' + postId);

    }
}