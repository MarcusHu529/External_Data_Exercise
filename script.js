function fetchUsers() {
    return {
        users: [],
        async init() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await response.json();
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
    };
}

function fetchPosts() {
    return {
        posts: [],
        async init() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
                this.posts = await response.json();
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
    };
}

function formatTitle(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}