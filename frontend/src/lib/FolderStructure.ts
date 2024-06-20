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
            "PostList.jsx",
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
          "database.js",
          "server.js",
        ],
        controllers: [
          "authController.js",
          "postController.js",
          "commentController.js",
        ],
        models: [
          "userModel.js",
          "postModel.js",
          "commentModel.js",
        ],
        routes: [
          "authRoutes.js",
          "postRoutes.js",
          "commentRoutes.js",
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
            "ProjectList.jsx",
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
            "Feed.jsx",
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
          "database.js",
          "server.js",
        ],
        controllers: [
          "userController.js",
          "postController.js",
          "notificationController.js",
        ],
        models: [
          "userModel.js",
          "postModel.js",
          "notificationModel.js",
        ],
        routes: [
          "userRoutes.js",
          "postRoutes.js",
          "notificationRoutes.js",
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
            "CourseList.jsx",
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
          "database.js",
          "server.js",
        ],
        controllers: [
          "authController.js",
          "courseController.js",
          "enrollmentController.js",
        ],
        models: [
          "userModel.js",
          "courseModel.js",
          "enrollmentModel.js",
        ],
        routes: [
          "authRoutes.js",
          "courseRoutes.js",
          "enrollmentRoutes.js",
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
  