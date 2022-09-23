// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Operations = {
    queries: 
        { key: ["posts"], result: Array<Post> } | 
        { key: ["userNames"], result: Array<{ display_name: string }> } | 
        { key: ["users"], result: Array<User> } | 
        { key: ["usersWithPosts"], result: Array<{ id: string, display_name: string, posts: Array<{ id: string, content: string, user: { id: string, display_name: string } }> }> },
    mutations: never,
    subscriptions: never
};

export interface Post { id: string, content: string, userId: string }

export interface User { id: string, displayName: string }
