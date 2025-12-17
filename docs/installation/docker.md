# Docker Installation

The easiest way to run Invoicer is using Docker. This guide will walk you through the installation process.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

### Check Docker Installation

```bash
docker --version
docker compose --version
```

If Docker is not installed, visit the [Docker installation guide](https://docs.docker.com/get-docker/) for your operating system.

## Quick Start

Run Invoicer with a single Docker command:

```bash
docker run -d \
  --name invoicer \
  -p 8080:8080 \
  -v invoicer-data:/data \
  invoicer/invoicer:latest
```

Once the container is running, access the web interface at `http://localhost:8080`.

## Docker Compose Setup

For a more complete setup with persistent storage and environment configuration, use Docker Compose.

### Create docker-compose.yml

Create a file named `docker-compose.yml` with the following content:

```yaml
version: '3.8'

services:
  invoicer:
    image: invoicer/invoicer:latest
    container_name: invoicer
    ports:
      - "8080:8080"
    volumes:
      - invoicer-data:/data
      - ./config:/app/config
    environment:
      - INVOICER_PORT=8080
      - INVOICER_DATA_DIR=/data
      - INVOICER_DB_PATH=/data/invoicer.db
    restart: unless-stopped

volumes:
  invoicer-data:
```

### Start the Service

```bash
docker compose up -d
```

This will:
- Pull the latest Invoicer image
- Create a persistent volume for data storage
- Start the service in detached mode
- Configure automatic restart

## Environment Variables

You can customize Invoicer behavior using environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `INVOICER_PORT` | `8080` | Port on which the web interface listens |
| `INVOICER_DATA_DIR` | `/data` | Directory for storing invoice data |
| `INVOICER_DB_PATH` | `/data/invoicer.db` | Path to the SQLite database file |
| `INVOICER_LOG_LEVEL` | `info` | Logging level (debug, info, warn, error) |

## Verify Installation

Once the container is running, verify the installation:

1. Check container status:
   ```bash
   docker ps | grep invoicer
   ```

2. View logs:
   ```bash
   docker logs invoicer
   ```

3. Access the web interface:
   Open your browser and navigate to `http://localhost:8080`

## Stopping and Removing

To stop the service:

```bash
docker-compose down
```

To remove the service and volumes (⚠️ this will delete all data):

```bash
docker-compose down -v
```

## Updating

To update to the latest version:

```bash
docker-compose pull
docker-compose up -d
```

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, change it in your `docker-compose.yml`:

```yaml
ports:
  - "8081:8080"  # Use port 8081 on host
```

### Permission Issues

If you encounter permission issues with volumes, ensure the Docker user has write access to the mounted directories.

### Container Won't Start

Check the logs for errors:

```bash
docker logs invoicer
```

Common issues:
- Port conflicts
- Insufficient disk space
- Invalid environment variables
