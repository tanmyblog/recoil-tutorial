class PostService {
    static posts = [
        {
            id: '1',
            date: '22:24 27/07/2020',
            title: 'Writing tests',
            desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam eros, eget efficitur odio accumsan finibus. Morbi euismod, arcu sed feugiat scelerisque, enim urna consectetur arcu, ut auctor diam neque id elit. Vivamus ornare ipsum eu nulla ultricies aliquam. Donec posuere orci non libero convallis tempor. Phasellus dui nisi, aliquam eu est id, mattis ultrices lorem. Etiam id turpis leo. Pellentesque vulputate, ligula ac tempus varius, diam mi congue ex, quis hendrerit sapien ex sit amet erat. Aliquam condimentum mauris id neque fringilla, vitae ornare eros viverra. Vivamus non sagittis velit, at sodales felis. Quisque placerat et velit et lacinia. Nulla ac odio quis odio sodales imperdiet in ut orci. Ut dui nisi, placerat ut urna aliquam, mattis commodo mauris. Pellentesque aliquet mi tellus, sit amet cursus magna semper eget.`,
            statistics: {
                likes: 20,
                dislikes: 3
            },
        },
        {
            id: '2',
            date: '23:00 27/07/2020',
            title: 'Writing test scripts',
            desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            content: `Ut sed justo vitae metus commodo malesuada at vel diam. Curabitur tempus metus vitae ornare ultrices. Integer sed finibus erat. Mauris auctor est odio, vitae pharetra dui sagittis ut. Etiam vitae ante nec sapien hendrerit aliquet vel in massa. Vivamus lacinia eros et lectus facilisis, eu viverra turpis fermentum. Pellentesque ut orci feugiat, bibendum dui eget, consectetur libero. Quisque at diam sit amet diam venenatis maximus ut non diam. Donec risus felis, euismod vehicula laoreet in, sollicitudin ac justo. Fusce tincidunt turpis sit amet pretium scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et varius lorem. Sed at aliquet neque. Donec eget felis sollicitudin, auctor libero vel, mollis turpis.`,
            statistics: {
                likes: 0,
                dislikes: 0
            },
        },
        {
            id: '3',
            date: '20:30 27/07/2020',
            title: 'Testing collections and folders',
            desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            content: `Pellentesque non viverra dui. Etiam eget lacinia diam. Mauris vulputate varius venenatis. Nam laoreet nulla eget orci suscipit ullamcorper. Aliquam aliquet vitae leo sit amet porttitor. Suspendisse sit amet sapien id lectus vestibulum tincidunt. Ut quis lacus eu sapien fermentum sollicitudin sit amet vitae nibh. Curabitur hendrerit diam non justo sollicitudin malesuada. Cras tincidunt vitae dui ut pulvinar. Morbi porttitor tellus risus, at consectetur elit aliquam ac. Mauris purus velit, pretium nec vehicula sit amet, ornare et sapien. Nullam feugiat posuere enim congue venenatis.`,
            statistics: {
                likes: 2,
                dislikes: 10
            },
        },
        {
            id: '4',
            date: '20:30 27/07/2020',
            title: 'Testing collections and folders',
            desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            content: `Pellentesque non viverra dui. Etiam eget lacinia diam. Mauris vulputate varius venenatis. Nam laoreet nulla eget orci suscipit ullamcorper. Aliquam aliquet vitae leo sit amet porttitor. Suspendisse sit amet sapien id lectus vestibulum tincidunt. Ut quis lacus eu sapien fermentum sollicitudin sit amet vitae nibh. Curabitur hendrerit diam non justo sollicitudin malesuada. Cras tincidunt vitae dui ut pulvinar. Morbi porttitor tellus risus, at consectetur elit aliquam ac. Mauris purus velit, pretium nec vehicula sit amet, ornare et sapien. Nullam feugiat posuere enim congue venenatis.`,
            statistics: {
                likes: 2,
                dislikes: 10
            },
        },
        {
            id: '5',
            date: '20:30 27/07/2020',
            title: 'Testing collections and folders',
            desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            content: `Pellentesque non viverra dui. Etiam eget lacinia diam. Mauris vulputate varius venenatis. Nam laoreet nulla eget orci suscipit ullamcorper. Aliquam aliquet vitae leo sit amet porttitor. Suspendisse sit amet sapien id lectus vestibulum tincidunt. Ut quis lacus eu sapien fermentum sollicitudin sit amet vitae nibh. Curabitur hendrerit diam non justo sollicitudin malesuada. Cras tincidunt vitae dui ut pulvinar. Morbi porttitor tellus risus, at consectetur elit aliquam ac. Mauris purus velit, pretium nec vehicula sit amet, ornare et sapien. Nullam feugiat posuere enim congue venenatis.`,
            statistics: {
                likes: 2,
                dislikes: 10
            },
        }
    ];

    static getAll() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.posts), 500);
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.posts.find(post => post.id === id)), 500);
        });
    }

}

module.exports = PostService;