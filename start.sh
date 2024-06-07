#!/bin/bash

CONTAINER_NAME=frontend

{
    docker-compose up -d
} || {
    docker compose up -d
}

echo "application started at http://localhost:3000"
