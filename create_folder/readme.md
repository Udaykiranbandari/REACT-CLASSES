 Need to research react folders structures:-
 --------------------------------------------
             

my-app/
├── public/
├── src/
│   ├── assets/        # Images, fonts, styles
│   ├── components/    # Reusable UI components
│   ├── App.js         # Root component
│   ├── index.js       # Entry point
│   └── styles/        # CSS or SCSS files
├── package.json
└── README.md



public/: Static files (HTML, favicon, etc.)

src/: Where all your React code lives.

assets/: Images, icons, fonts, etc.

components/: Button, Navbar, etc. — small, reusable pieces.

App.js: Main application wrapper.

index.js: ReactDOM renders the app.



my-app/
├── public/
├── src/
│   ├── assets/              # Static files like images, fonts
│   ├── components/          # Reusable UI components
│   ├── features/            # Feature-specific folders
│   │   ├── auth/            # Login, signup, etc.
│   │   ├── dashboard/       # Dashboard components
│   ├── hooks/               # Custom hooks (useAuth, useForm, etc.)
│   ├── pages/               # Page-level components (Home, About, etc.)
│   ├── routes/              # React Router configuration
│   ├── services/            # API calls (Axios, fetch)
│   ├── store/               # Redux or Zustand state management
│   ├── utils/               # Utility functions (formatDate, validators)
│   ├── App.js
│   └── index.js
├── .env
└── package.json
