# How to run

cd taskMaster
npm install
npm run start:dev


# API
Exposed data through a rest Api listening on localhost: 3000/task

# Modular architecture
Set up a module for each sperate domain


# Design principles 
IoC : Nestjs framework will handle the control of the program flow where I the dev will focus on the business logic

Dependency injection : injected services and repository using constructor injection 

# Design

Entities : 
* Task
* Category

Since each task can have one or more category, a many to many relation was established between category and task



