# Books Library API with GraphQL

A GraphQL API to query books and authors from the library, and insert new books/authors.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Installation

In the terminal, run the following command to clone this repository to your machine and install all dependencies:

1. Clone the repository

   ```console
   git clone https://github.com/jonathangeovani/graphql-books-library.git
   cd graphql-books-library
   ```

2. Install the dependencies

   ```console
   npm install
   ```

3. Run the server

   ```console
   npm run dev
   ```

## Usage

Once the server is running, you can access the GraphQL Playground to interact with the API. Open your browser and navigate to:

```
http://localhost:4000/graphql
```

This will open the GraphQL Playground, a user-friendly interface for testing queries and mutations.

<p align="center"><img src="./assets/docs-demo.gif" width="576"></p>

## Examples

### Query all Books

```graphql
# Gets all books and their respective authors
query {
  books {
    id
    name
    authorId
  }
}
```

### Query all Authors

```graphql
# Gets all authors and their registered books
query {
  authors {
    id
    name
    books {
      id
      name
    }
  }
}
```

### Query a specific book by ID

```graphql
# Get the book with the ID 1
query {
  book(id: 1) {
    name
    author {
      name
    }
  }
}
```

### Add a new book

```graphql
# Add a new book
mutation {
  addbook(name: "Analysis Patterns", authorId: 2) {
    id
    name
    author {
      name
    }
  }
}
```

### Add a new author

```graphql
# Add a new author
mutation {
  addAuthor(name: "Erich Gamma") {
    name
  }
}
```
