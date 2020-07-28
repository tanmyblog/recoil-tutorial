class PostService {
    static posts = [
        {
            id: 1,
            date: '22:24 27/07/2020',
            title: 'Writing tests',
            content: `You can write test scripts for your Postman API requests in JavaScript. Tests allow you to ensure that your API is working as expected, to establish that integrations between services are functioning reliably, and to verify that new developments haven't broken any existing functionality. You can also use test code to aid the debugging process when something goes wrong with your API project.`,
            statistics: {
                likes: 20,
                dislikes: 3
            },
        },
        {
            id: 2,
            date: '23:00 27/07/2020',
            title: 'Writing test scripts',
            content: `Your test scripts can use dynamic variables, carry out test assertions on response data, and pass data between requests. In the Tests tab for a request, you can enter your JavaScript manually or use the Snippets you'll see to the right of the code editor. Tests will execute after the response is received, so when you click Send, Postman will run your test script when the response data returns from the API.`,
            statistics: {
                likes: 0,
                dislikes: 0
            },
        },
        {
            id: 3,
            date: '20:30 27/07/2020',
            title: 'Testing collections and folders',
            content: `You will see a selection of commonly used test code excerpts in Snippets to the right of the tests editor. Click to add one and it will appear in your editor. Snippets can speed up the process of getting started with your scripts—you can edit snippets after adding them to meet your own testing requirements. ou can update collection and folder scripts by clicking View more actions (...) next to the collection or folder name, and selecting Edit.`,
            statistics: {
                likes: 2,
                dislikes: 10
            },
        },
    ];

    static getAll() {
        return new Promise((resolve) => {
            // setTimeout(() => resolve(this.posts), 500);
            resolve(this.posts)
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.posts.find(post => post.id === id)), 500);
        });
    }
}

module.exports = PostService;