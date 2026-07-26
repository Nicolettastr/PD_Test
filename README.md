# Podcaster

A podcast application built with React and TypeScript that allows users to browse podcasts, view podcast details, and listen to episodes.

## Features

- Browse podcast list
- Search podcasts by title or author

![Home](./src/docs/images/home.png)

- View podcast details and episode list

![Podcast Detail](./src/docs/images/pd-detail.png)

- View episode details
- Audio player for podcast episodes

![Episode Detail](./src/docs/images/ep-detail.png)

- Client-side navigation loading indicator

- API response caching with React Query

## Tech Stack

- React
- TypeScript
- React Router
- TanStack React Query
- CSS Modules
- Vite

## Installation

Clone the repository:

```bash
git clone https://github.com/Nicolettastr/PD_Test
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── router/
├── services/
├── types/
└── utils/
```

## Architecture

The application follows a feature-based architecture:

- **features** contains domain-specific logic.
- **components** contains shared reusable components.
- **services** handles API communication.
- **hooks** encapsulate reusable logic.
- **mappers** transform API responses into application models.
- **React Query** manages server state and caching.

## Performance

- API responses cached with React Query.
- Search filtering performed client-side.
- Memoized transformations where appropriate.

## Technical Decisions

- React Query was used for data fetching and caching.
- DTOs and mappers were implemented to decouple API responses from the UI.
- CSS Modules were chosen for component-level styling.
- Custom hooks encapsulate reusable business logic.
- Feature-based folder structure improves scalability and maintainability.

## License

This project was developed as a technical assessment.
