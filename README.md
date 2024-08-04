# Wix Test Task

This is a test task with Wix integration using Nest.js for BackEnd and  Vue.js + Element Plus for FrontEnd

The application includes CRUD for Wix Store Products

## Requirements
* Docker

## Installation

* Create a WIX account and generate API key
* Execute `cp .env.example .env` and replace WIX credentials with real
* To start project - `docker compose up -d`

## Usage

Once the development servers are running, you can access your Wix integration by navigating to `http://localhost:5173` in your web browser. 

## Scalability

In case if we are gonna have more that one WIX product provider, the best solution is to use `Factory and Adapter Pattern`

## Technical debt
* add validations for DTO fields
* tests for both BE & FE (unit, e2e...)
* better API docs (response / examples / description)
* improve logging for better Observability
* better error handling on BE side
* add a HealthModule (Terminus) to check WIX and other providers (Prisma, redis, etc..) health
* add a state manager on FE side to have a persistent state of Products
* create a Prisma service and start saving products

