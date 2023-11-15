# My Express API

This is a simple Express.js application that provides a RESTful API for user-related operations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/en/download/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/my-express-api.git
```

Navigate to the project directory:

```bash
cd my-express-api
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the root directory of the project and add your environment variables:

```bash
touch .env
```

Start the server:

```bash
npm start
```

The server will start running at `http://localhost:3000`.

## API Endpoints

The application provides the following API endpoints:

- `GET /users`: Get a list of users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Get a user by id.
- `PUT /users/:id`: Update a user by id.
- `DELETE /users/:id`: Delete a user by id.

## SQL Injection demo
Send a request e.g. `http://localhost:3000/api/users/1;DELETE%20FROM%20TABLE1%20WHERE%201=1;`

## Built With

- [Express.js](https://expressjs.com/) - The web framework used.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/yourusername/yourcontributingmd) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

See also the list of [contributors](https://github.com/yourusername/my-express-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.# vulnerable-express1
