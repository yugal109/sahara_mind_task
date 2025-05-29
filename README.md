# Project Name

## Setup

### 1. Clone the repository

```bash
git clone project_name
cd project_name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the environment variables to `env/local.env`:

```env
DATABASE_HOST=
DATABASE_PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
DATABASE_SYNC=
DATABASE_MIGRATIONS_RUN=
DATABASE_LOGGING=
CUSTOM_JWT_SECRET=
```

### 4. Run the application

```bash
npm run start:local
```

The application will be available at `http://localhost:3000`

## Docker Setup

### 1. Clone the repository

```bash
git clone project_name
cd project_name
```

### 2. Environment Configuration

Copy the environment variables to `env/prod.env`:

```env
DATABASE_HOST=
DATABASE_PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
DATABASE_SYNC=
DATABASE_MIGRATIONS_RUN=
DATABASE_LOGGING=
CUSTOM_JWT_SECRET=
```

### 3. Go inside the docker folder

```bash
cd docker
```

### 4. Run with Docker

```bash
docker-compose up
```

The application will be available at `http://localhost:3000`
