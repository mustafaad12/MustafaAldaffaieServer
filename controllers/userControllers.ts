export class UserController {
    private users = [
        { id: 1, name: 'Ali Hassan', email: 'ali.hassan@example.com', age: 22 },
        { id: 2, name: 'Sara Ahmed', email: 'sara.ahmed@example.com', age: 25 },
        { id: 3, name: 'Omar Khalid', email: 'omar.khalid@example.com', age: 28 },
        { id: 4, name: 'Noor Mohammed', email: 'noor.mohammed@example.com', age: 21 },
        { id: 5, name: 'Zain Abbas', email: 'zain.abbas@example.com', age: 30 },
        { id: 6, name: 'Layla Karim', email: 'layla.karim@example.com', age: 24 },
        { id: 7, name: 'Mustafa Saad', email: 'mustafa.saad@example.com', age: 27 },
        { id: 8, name: 'Huda Yasin', email: 'huda.yasin@example.com', age: 23 },
        { id: 9, name: 'Yusuf Nabil', email: 'yusuf.nabil@example.com', age: 26 },
        { id: 10, name: 'Mariam Fadhil', email: 'mariam.fadhil@example.com', age: 29 }
    ];

    getAllUsers() {
        return this.users;
    }
}