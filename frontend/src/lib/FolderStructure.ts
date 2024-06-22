export const folderStructures = {
    // eCommerce Project
    ecommerce: {
      frontend: {
        node_modules: [],
        public: [
          "index.html",
          "vite.svg",
        ],
        src: {
          assets: [
            "logo.svg",
            "banner.jpg",
          ],
          components: [
            "ProductList.jsx",
            "Cart.tsx",
            "Checkout.tsx",
          ],
          hooks: [
            "useCart.ts",
            "useProducts.ts",
          ],
          lib: [
            "apiClient.tsx",
            "config.tsx",
          ],
          pages: [
            "Home.tsx",
            "ProductDetail.tsx",
            "OrderSummary.tsx",
          ],
          utils: [
            "formatCurrency.ts",
            "calculateTotal.ts",
          ],
          files: [
            "App.tsx",
            "App.css",
            "index.tsx",
          ],
        },
      },
      backend: {
        config: [
          "database.js",
          "server.js",
        ],
        controllers: [
          "authController.js",
          "orderController.js",
          "productController.js",
        ],
        models: [
          "userModel.js",
          "orderModel.js",
          "productModel.js",
        ],
        routes: [
          "authRoutes.js",
          "orderRoutes.js",
          "productRoutes.js",
        ],
      },
    },
  
    // Blogging Platform
    blogs: {
      frontend: {
        public: [
          "index.html",
          "blog-banner.png",
        ],
        src: {
          components: [
            "PostList.tsx",
            "PostForm.tsx",
            "CommentSection.tsx",
          ],
          hooks: [
            "usePosts.ts",
            "useComments.ts",
          ],
          pages: [
            "Home.tsx",
            "PostDetail.tsx",
            "NewPost.tsx",
          ],
          utils: [
            "formatDate.ts",
            "sanitizeHtml.ts",
          ],
          files: [
            "App.tsx",
            "App.css",
            "main.tsx",
          ],
        },
      },
      backend: {
        config: [
          "database.ts",
          "server.ts",
        ],
        controllers: [
          "authController.ts",
          "postController.ts",
          "commentController.ts",
        ],
        models: [
          "userModel.ts",
          "postModel.ts",
          "commentModel.ts",
        ],
        routes: [
          "authRoutes.ts",
          "postRoutes.ts",
          "commentRoutes.ts",
        ],
      },
    },
  
    // Content Management System (CMS)
    contentManagement: {
      cms: {
        admin: [
          "dashboard.js",
          "users.js",
          "settings.js",
        ],
        api: [
          "contentAPI.js",
          "userAPI.js",
          "mediaAPI.js",
        ],
        client: [
          "index.html",
          "style.css",
          "client.js",
        ],
        public: [
          "logo.png",
          "favicon.ico",
        ],
      },
    },
  
    // Portfolio Website
    portfolio: {
      frontend: {
        public: [
          "index.html",
          "portfolio.png",
        ],
        src: {
          components: [
            "ProjectList.tsx",
            "AboutMe.tsx",
            "ContactForm.tsx",
          ],
          assets: [
            "profile.jpg",
            "project-thumbnails/",
          ],
          pages: [
            "Home.tsx",
            "Projects.tsx",
            "Contact.tsx",
          ],
          styles: [
            "App.css",
            "theme.css",
          ],
          files: [
            "App.tsx",
            "main.tsx",
          ],
        },
      },
    },
  
    // Social Media Application
    socialMedia: {
      frontend: {
        public: [
          "index.html",
          "logo.png",
        ],
        src: {
          components: [
            "Feed.tsx",
            "Profile.tsx",
            "Post.tsx",
          ],
          hooks: [
            "useAuth.ts",
            "usePosts.ts",
            "useUser.ts",
          ],
          pages: [
            "Home.tsx",
            "Profile.tsx",
            "Login.tsx",
          ],
          services: [
            "authService.ts",
            "postService.ts",
          ],
          utils: [
            "dateFormatter.ts",
            "imageUploader.ts",
          ],
          files: [
            "App.tsx",
            "index.tsx",
          ],
        },
      },
      backend: {
        config: [
          "database.ts",
          "server.ts",
        ],
        controllers: [
          "userController.ts",
          "postController.ts",
          "notificationController.ts",
        ],
        models: [
          "userModel.ts",
          "postModel.ts",
          "notificationModel.ts",
        ],
        routes: [
          "userRoutes.ts",
          "postRoutes.ts",
          "notificationRoutes.ts",
        ],
      },
    },
  
    // E-Learning Platform
    elearning: {
      frontend: {
        public: [
          "index.html",
          "logo.png",
        ],
        src: {
          components: [
            "CourseList.tsx",
            "CourseDetail.tsx",
            "EnrollmentForm.tsx",
          ],
          hooks: [
            "useCourses.ts",
            "useEnrollment.ts",
          ],
          pages: [
            "Home.tsx",
            "CourseDetail.tsx",
            "Enroll.tsx",
          ],
          services: [
            "courseService.ts",
            "authService.ts",
          ],
          utils: [
            "dateFormatter.ts",
            "paymentProcessor.ts",
          ],
          files: [
            "App.tsx",
            "main.tsx",
          ],
        },
      },
      backend: {
        config: [
          "database.ts",
          "server.ts",
        ],
        controllers: [
          "authController.ts",
          "courseController.ts",
          "enrollmentController.ts",
        ],
        models: [
          "userModel.ts",
          "courseModel.ts",
          "enrollmentModel.ts",
        ],
        routes: [
          "authRoutes.ts",
          "courseRoutes.ts",
          "enrollmentRoutes.ts",
        ],
      },
    },
  
    // Mobile App with React Native
    mobileApp: {
      frontend: {
        public: [],
        src: {
          components: [
            "LoginScreen.js",
            "DashboardScreen.js",
            "ProfileScreen.js",
          ],
          hooks: [
            "useAuth.js",
            "useUserData.js",
          ],
          services: [
            "authService.js",
            "userService.js",
          ],
          utils: [
            "imagePicker.js",
            "pushNotifications.js",
          ],
          files: [
            "App.js",
            "index.js",
          ],
        },
        assets: [
          "logo.png",
          "icons/",
        ],
      },
    },
  
    // Static Site Generator
    staticSite: {
      frontend: {
        public: [
          "index.html",
          "about.html",
        ],
        src: {
          components: [
            "Header.jsx",
            "Footer.jsx",
          ],
          styles: [
            "main.css",
            "theme.css",
          ],
          files: [
            "App.js",
            "main.js",
          ],
        },
        assets: [
          "images/",
          "icons/",
        ],
      },
    },
  
    // Full Stack Web Application
    fullStackApp: {
      frontend: {
        public: [
          "index.html",
          "styles.css",
        ],
        src: {
          components: [
            "Navbar.tsx",
            "Sidebar.tsx",
            "Dashboard.tsx",
          ],
          hooks: [
            "useAuth.ts",
            "useData.ts",
          ],
          pages: [
            "Home.tsx",
            "Login.tsx",
            "Dashboard.tsx",
          ],
          services: [
            "apiService.ts",
          ],
          utils: [
            "dateFormatter.ts",
            "dataParser.ts",
          ],
          files: [
            "App.tsx",
            "index.tsx",
          ],
        },
      },
      backend: {
        config: [
          "database.js",
          "server.js",
        ],
        controllers: [
          "authController.js",
          "dataController.js",
        ],
        models: [
          "userModel.js",
          "dataModel.js",
        ],
        routes: [
          "authRoutes.js",
          "dataRoutes.js",
        ],
      },
    },
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  export const recommendedLibraries = {
    ecommerce: [
      "React",
      "Redux",
      "Material-UI",
      "Axios",
      "React Hook Form",
      "Formik",
    ],
    blogs: [
      "Express.js",
      "Mongoose",
      "Passport.js",
      "React",
      "Markdown-it",
    ],
    contentManagement: [
      "React",
      "Strapi",
      "Gatsby",
      "GraphQL",
      "Tailwind CSS",
    ],
    portfolio: [
      "React",
      "Styled Components",
      "Framer Motion",
      "React Router",
    ],
    socialMedia: [
      "React",
      "Firebase",
      "Redux",
      "Socket.io",
    ],
    elearning: [
      "Node.js",
      "MongoDB",
      "React",
      "Chart.js",
    ],
    mobileApp: [
      "React Native",
      "Expo",
      "Redux",
      "React Navigation",
    ],
    staticSite: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    fullStackApp: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  export const bestPractices = {
    ecommerce: [
      "Use secure payment gateways to protect user data.",
      "Implement caching for faster load times.",
      "Follow SEO best practices to enhance visibility.",
      "Ensure cross-browser compatibility.",
      "Optimize images for faster load times.",
      "Regularly update security patches and libraries.",
    ],
    blogs: [
      "Write high-quality, original content.",
      "Optimize for search engines using relevant keywords.",
      "Ensure mobile-friendly and responsive design.",
      "Use HTTPS to secure data transmission.",
      "Regularly update content to keep it fresh.",
      "Use social sharing buttons to increase reach.",
    ],
    contentManagement: [
      "Implement role-based access control.",
      "Use version control for content changes.",
      "Ensure data validation and sanitization.",
      "Keep CMS and plugins updated for security.",
      "Optimize database queries for performance.",
      "Use backups to safeguard against data loss.",
    ],
    portfolio: [
      "Highlight your best work prominently.",
      "Ensure the design is visually appealing and professional.",
      "Use responsive design to cater to all devices.",
      "Optimize load times by minimizing file sizes.",
      "Provide clear and easy navigation.",
      "Keep the content concise and engaging.",
    ],
    socialMedia: [
      "Ensure real-time data updates with efficient data handling.",
      "Use strong password policies and secure authentication methods.",
      "Implement data privacy measures to protect user data.",
      "Use responsive design for accessibility across devices.",
      "Optimize performance to handle high traffic.",
      "Implement content moderation to prevent inappropriate content.",
    ],
    elearning: [
      "Use engaging and interactive content to enhance learning.",
      "Ensure the platform is accessible to all users.",
      "Implement progress tracking for personalized learning paths.",
      "Use secure data handling for user information.",
      "Provide feedback mechanisms for continuous improvement.",
      "Optimize performance to handle large volumes of users.",
    ],
    mobileApp: [
      "Use platform-specific best practices for iOS and Android.",
      "Ensure responsive design for different screen sizes.",
      "Optimize app performance to minimize load times.",
      "Implement secure data storage and transmission.",
      "Use push notifications wisely to engage users.",
      "Regularly update the app to fix bugs and add features.",
    ],
    staticSite: [
      "Use a static site generator for optimal performance.",
      "Optimize images and other assets to reduce load times.",
      "Follow best practices for SEO to increase visibility.",
      "Ensure the site is responsive and mobile-friendly.",
      "Use HTTPS to secure data transmission.",
      "Keep the design clean and minimal for a better user experience.",
    ],
    fullStackApp: [
      "Use RESTful APIs for efficient data handling.",
      "Ensure secure data transmission with HTTPS.",
      "Implement error handling and logging for debugging.",
      "Use modern JavaScript frameworks for the front end.",
      "Ensure the backend is scalable and maintainable.",
      "Use version control and continuous integration.",
    ],
  };