In TypeScript Union and Intersection play important roles in making code more flexible. They allow developers to use powerful type-checking capabilities.


**Union types:**

Union types allow a variable to hold a value of one type or another. The syntax for a union type is using the '|' symbol between two or more types. Union types are used for scenarios where a value can be one of many types.

Union types tell TypeScript that a variable can be of several specified types. For example:

let score: number | string;

score = 100;

score = "A+"; 

Here, 'score' can be a 'number' or a 'string'.

With union types, you can write functions that might get data in different forms. This is common in APIs where data can be of different formats. This will prevent use of unexpected types.


**Intersection types** 

While union types means a value could be one type or another, intersection types represent values that must satisfy all types listed. Intersection types are created with the '&' symbol and are powerful for combining multiple types into one.

Intersection types allow you to merge multiple types into a new type, which includes properties from all types involved. For example:

type User = { name: string; age: number };

type Admin = { isAdmin: boolean };

type AdminUser = User & Admin;

const adminUser: AdminUser = {
  name: "Alice", 
  age: 30, 
  isAdmin: true, 
};

In this case, 'AdminUser' has the properties of both 'User' and 'Admin'. TypeScript makes sure that objects of type 'AdminUser' must have all properties from 'User' and 'Admin', combining both types.

Intersection types allow you to build complex types by combining simpler types, which helps creating reusable codes. Since intersection types require all properties to be present, TypeScript can catch any missing types.


Both union and intersection types improve code flexibility, but they are best for different use cases:

**Union Types**: Use when a value can be one of multiple types. For example, a variable that can be a string or a number.

**Intersection Types**: Use when a value must be of two or more types. For example, a variable that must be a string and a function.


Union and intersection types in TypeScript are instrumental for creating flexible, type-safe codes. By allowing values to be one of several types or by combining multiple types into one, these types enable more useful for coding large applications as they are more efficient. They reduce runtime errors, make code more modular. Mastering union and intersection types will enhance your TypeScript development.