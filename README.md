# Social Media App - Facebook

This is the frontend of a social media application built using React. The app allows users to authenticate, manage their profiles, post content, interact with friends, and more. The frontend communicates with a backend API to perform all these operations. This repository focuses on the UI components, routing, state management, and user interactions.

## Features

- **User Authentication**:
  - **Sign Up**: Allows users to register with their credentials.
  - **Login**: Users can securely log in to their account using a token-based authentication system.
  - **Password Reset**: If users forget their passwords, they can reset it through a link sent to their email.
  - **Email Verification**: After registration, users can verify their account by entering a verification code sent via email.

- **Profile Management**:
  - Users can update their profile information, including username, bio, and profile picture.
  - Users can view and edit other users' profiles.
  
- **Social Interactions**:
  - Users can send and accept friend requests.
  - Users can follow and unfollow other users to receive updates.
  
- **Post Creation and Management**:
  - Users can create, view, and delete posts on their feed.
  - Posts are fetched from the backend API and displayed on the homepage.
  
- **Dark Mode**:
  - The app supports both dark and light themes, which can be toggled based on the user’s preference.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **React Router**: For managing routing and navigation within the app.
- **Redux**: For state management and handling user data globally.
- **Axios**: For making HTTP requests to the backend API.
- **React Toastify**: For displaying toast notifications.
- **CSS/SASS**: For styling the application.
- **React Context**: For managing theme state (light/dark mode).

## Installation

### Prerequisites

- Node.js >= 16.x
- A running backend API with authentication and post management.

### Steps to Set Up the Frontend Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add the following:
   ```bash
   BASE_URL=http://localhost:8000  # URL of your backend
   ```

4. **Run the frontend**:
   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000`.

### Backend Setup (for testing locally)
Make sure the backend is running, as the frontend depends on it to fetch posts, manage user data, and authenticate users. The backend should expose endpoints for login, registration, posts, and profile management.

## File Structure

```bash
.
├── src/
│   ├── components/           # Reusable components (e.g., CreatePostPopup, Navbar)
│   ├── pages/                # Page components (e.g., Login, Home, Profile)
│   ├── routes/               # Protected and unprotected routes
│   ├── functions/            # Utility functions, actions, and reducers (e.g., Redux logic)
│   ├── App.js                # Main application logic (handles routes, state, and API calls)
│   └── index.js              # React entry point
├── .env                      # Environment variables for the backend API URL
└── README.md                 # Project documentation
```

## Data Flow in the Frontend

### Authentication and State Management

The app uses Redux for global state management, where the user authentication state is stored. This allows the app to manage the user's login state, token, and other user-related data across different components.

- **Login Flow**:
  - The user logs in by submitting their credentials (username and password) on the login page.
  - The app sends an API request to the backend (via Axios) to authenticate the user and obtain a JWT token.
  - Upon successful authentication, the token is stored in the Redux store and local storage (if needed), allowing the user to remain logged in.
  
- **Protected Routes**:
  - Some routes (like Profile, Friends, etc.) require the user to be authenticated.
  - The `LoggedInRoutes` component ensures that only authenticated users can access protected routes. If a user is not logged in, they are redirected to the login page.
  
### Posts Management

The app communicates with the backend API to fetch, create, and delete posts. The following steps outline the process for post-related actions:

1. **Fetching Posts**:
   - When the user visits the homepage, the app sends an API request to the `/getAllposts` endpoint.
   - The response contains an array of posts, which is stored in the Redux store. These posts are then displayed on the homepage.

2. **Creating Posts**:
   - When the user creates a post via the popup form, the app sends a `POST` request to the backend to store the new post.
   - Once the post is successfully created, the frontend state is updated with the new post, and it appears on the user's feed.

3. **Deleting Posts**:
   - The user can delete their posts by clicking a delete button next to each post.
   - This triggers an API request to delete the post from the backend, and upon success, the frontend state is updated to remove the deleted post from the display.

### Friendships and Following

- **Sending Friend Requests**:
  - Users can send friend requests by interacting with other users' profiles.
  - This triggers an API request to the backend to initiate a friend request. The status of the request (pending, accepted, etc.) is updated accordingly.

- **Following Users**:
  - Users can follow other users to get updates about their posts and activities.
  - The frontend sends an API request to follow/unfollow users, and the user's state is updated in the Redux store.

### Theme Management (Dark/Light Mode)

The app supports dark and light themes, which are toggled based on the user's preference. The app uses a combination of React Context and Redux to manage the theme state.

- The theme is applied globally through CSS classes, and components re-render based on the theme selection.
  
## Routes

The frontend uses **React Router** for handling routes:

- **Protected Routes**: These routes require authentication to access.
  - `/profile`: User profile page.
  - `/friends`: Manage friend requests and connections.
  - `/home`: Home feed where posts are displayed.
  
- **Public Routes**: These routes are accessible without authentication.
  - `/login`: Login page for the user to authenticate.
  - `/reset`: Password reset page for users to change their password.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and test them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is open-source and available under the [MIT License](LICENSE).
