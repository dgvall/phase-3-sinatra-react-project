# To-Do List

To-Do List is a single page application that allows users to create an organized list of tasks they need "to-do."

## How To-Do List Works

### Creating a List

On the main /lists page, a user can create a list by pressing the "+" button. "List Profiles" that have already been created will be appended to the right of create button. Clicking on a list profile will send a user to that specific list.

### List and Sublists

On the /list page, a user can customize that list by creating a tasks in individual sublist containers of the days of the week or a "general" container that holds tentative tasks.

### Creating a Task

Use the form at the top of the page to create tasks. For each task, you can assign it the following attributes: text description, sublist, and priority. Text decription is the task itself. Sublist represents which container the task will append to. Assigning a task "priority" gives it a red outline and is meant to symbolize an important to-do.

### Completing and Editing a Task

On a given task, click the checkbox to complete it and remove it from the list. To edit your task, hover over it and click the pencil to access the edit task menu. The edit task menu allows the user to edit the attributes of the given task.

## Front-end Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the /my-app-frontend directory, run

### `npm install`

Installs packages necessary for the build to function.

### `npm start`

Runs the front-end of the build

## Back-end Setup

This project was built with with [Ruby](https://github.com/ruby).

## Installation

In the /server directory, run

### `bundle install`

Installs gems necessary for server to function.

### `bundle exec rake db:migrate`
Runs migration files and builds schema for database

### `bundle exec rake server`

Runs your server on port http://localhost:9292.
