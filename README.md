# Aut - No-BS Calendar App for Events

Aut is a simple calendar application that helps users discover and track events from their favorite venues, artists, and organizers. No social media fluff, just events you care about.

## Features

- Simple calendar interface with multiple views (month, week, 3-day, day, agenda)
- Follow your favorite venues, artists, and event organizers
- Dark mode support
- Event details including location, time, pricing, and lineup
- Organizer accounts for event creation and management
- No social media features - just events

## Tech Stack

### Backend
- FastAPI (Python)
- PostgreSQL
- Auth0 for authentication
- Docker
- Ruff for linting
- uv for package management

### Frontend
- React Native
- react-native-calendars
- React Navigation
- TypeScript

## Project Structure

```
aut/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   └── services/
│   ├── tests/
│   ├── Dockerfile
│   ├── pyproject.toml
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md
```

## Development Setup

### Prerequisites
- Docker and Docker Compose
- Node.js (v18+)
- Python 3.11+
- uv
- Xcode (for iOS development)
- Android Studio (for Android development)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   uv venv
   source .venv/bin/activate
   uv pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS:
   ```bash
   cd ios && pod install && cd ..
   ```

4. Start the development server:
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   ```

### Running with Docker
```bash
docker-compose up --build
```

## Testing

### Backend
```bash
cd backend
pytest
```

### Frontend
```bash
cd frontend
npm test
```

## Mobile Development Tips

### iOS Testing
- Use Xcode's simulator
- For physical devices, connect via USB and select your device in Xcode

### Android Testing
- Use Android Studio's emulator
- For physical devices, enable USB debugging and connect via USB

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
