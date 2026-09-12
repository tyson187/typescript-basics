"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
// In-memory "database"
let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        isActive: true,
        createdAt: new Date("2024-01-15")
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        isActive: true,
        createdAt: new Date("2024-02-20")
    }
];
let nextId = 3;
// GET all users
function getAllUsers() {
    return users;
}
// GET user by ID
function getUserById(id) {
    return users.find(user => user.id === id);
}
// POST create user
function createUser(input) {
    const newUser = {
        id: nextId++,
        name: input.name,
        email: input.email,
        age: input.age,
        isActive: true,
        createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
}
// PATCH update user
function updateUser(id, input) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return null;
    }
    users[userIndex] = {
        ...users[userIndex],
        ...input
    };
    return users[userIndex];
}
// DELETE user
function deleteUser(id) {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length < initialLength;
}
