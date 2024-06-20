// FolderStructures.ts
export const folderStructures = {
  ecommerce: {
    frontend: {
      node_modules: [],
      public: [
        "vite.svg",
      ],
      src: {
        assets: [
          "react.svg",
        ],
        components: [
          "ContactForm.jsx",
          "Navbar.tsx",
        ],
        lib: [
          "utils.tsx",
        ],
        pages: [
          "About.tsx",
          "Contact.tsx",
          "Home.tsx",
        ],
        files: [
          "App.tsx",
          "App.css",
          "main.tsx",
        ]
      },
    },
  },
  blogs: {
    backend: {
      config: [
        "database.js",
        "server.js",
      ],
      controllers: [
        "authController.js",
        "blogController.js",
      ],
      models: [
        "userModel.js",
        "blogModel.js",
      ],
      routes: [
        "authRoutes.js",
        "blogRoutes.js",
      ],
    },
  },
  contentManagement: {
    cms: {
      admin: [
        "dashboard.js",
        "users.js",
      ],
      api: [
        "contentAPI.js",
        "userAPI.js",
      ],
      client: [
        "index.html",
        "style.css",
      ],
    },
  },
};
