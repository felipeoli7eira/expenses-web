#!/bin/bash

CONTAINER_NAME=frontend

{
    docker-compose down
} || {
    docker compose down
}
