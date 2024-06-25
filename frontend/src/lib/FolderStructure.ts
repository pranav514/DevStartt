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
                  "ProductList.tsx",
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
              "database.ts",
              "server.ts",
          ],
          controllers: [
              "authController.ts",
              "orderController.ts",
              "productController.ts",
          ],
          models: [
              "userModel.ts",
              "orderModel.ts",
              "productModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "orderRoutes.ts",
              "productRoutes.ts",
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
                  "LoginScreen.ts",
                  "DashboardScreen.ts",
                  "ProfileScreen.ts",
              ],
              hooks: [
                  "useAuth.ts",
                  "useUserData.ts",
              ],
              services: [
                  "authService.ts",
                  "userService.ts",
              ],
              utils: [
                  "imagePicker.ts",
                  "pushNotifications.ts",
              ],
              files: [
                  "App.ts",
                  "index.ts",
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

  // Crypto Wallet Application
  cryptoWallet: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "Wallet.tsx",
                  "TransactionList.tsx",
                  "SendReceive.tsx",
              ],
              hooks: [
                  "useWallet.ts",
                  "useTransactions.ts",
              ],
              services: [
                  "cryptoService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "Transactions.tsx",
                  "SendReceive.tsx",
              ],
              utils: [
                  "cryptoFormatter.ts",
                  "qrCodeScanner.ts",
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
              "walletController.ts",
              "transactionController.ts",
          ],
          models: [
              "userModel.ts",
              "walletModel.ts",
              "transactionModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "walletRoutes.ts",
              "transactionRoutes.ts",
          ],
      },
  },

  // Fitness Tracking App
  fitnessApp: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "WorkoutList.tsx",
                  "ProgressChart.tsx",
                  "ExerciseDetail.tsx",
              ],
              hooks: [
                  "useWorkouts.ts",
                  "useProgress.ts",
              ],
              services: [
                  "workoutService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "Progress.tsx",
                  "WorkoutDetail.tsx",
              ],
              utils: [
                  "dateFormatter.ts",
                  "chartGenerator.ts",
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
              "workoutController.ts",
              "progressController.ts",
          ],
          models: [
              "userModel.ts",
              "workoutModel.ts",
              "progressModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "workoutRoutes.ts",
              "progressRoutes.ts",
          ],
      },
  },

  // Travel Booking Platform
  travelBooking: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "DestinationList.tsx",
                  "BookingForm.tsx",
                  "Confirmation.tsx",
              ],
              hooks: [
                  "useDestinations.ts",
                  "useBookings.ts",
              ],
              services: [
                  "bookingService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "DestinationDetail.tsx",
                  "BookingConfirmation.tsx",
              ],
              utils: [
                  "dateFormatter.ts",
                  "priceCalculator.ts",
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
              "bookingController.ts",
              "destinationController.ts",
          ],
          models: [
              "userModel.ts",
              "bookingModel.ts",
              "destinationModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "bookingRoutes.ts",
              "destinationRoutes.ts",
          ],
      },
  },

  // Real Estate Platform
  realEstate: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "PropertyList.tsx",
                  "PropertyDetail.tsx",
                  "ContactForm.tsx",
              ],
              hooks: [
                  "useProperties.ts",
                  "useContact.ts",
              ],
              services: [
                  "propertyService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "PropertyDetail.tsx",
                  "Contact.tsx",
              ],
              utils: [
                  "dateFormatter.ts",
                  "priceFormatter.ts",
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
              "propertyController.ts",
              "contactController.ts",
          ],
          models: [
              "userModel.ts",
              "propertyModel.ts",
              "contactModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "propertyRoutes.ts",
              "contactRoutes.ts",
          ],
      },
  },

  // IoT Device Management
  iotManagement: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "DeviceList.tsx",
                  "DeviceDetail.tsx",
                  "SettingsForm.tsx",
              ],
              hooks: [
                  "useDevices.ts",
                  "useSettings.ts",
              ],
              services: [
                  "deviceService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "DeviceDetail.tsx",
                  "Settings.tsx",
              ],
              utils: [
                  "dataFormatter.ts",
                  "notificationHandler.ts",
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
              "deviceController.ts",
              "settingsController.ts",
          ],
          models: [
              "userModel.ts",
              "deviceModel.ts",
              "settingsModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "deviceRoutes.ts",
              "settingsRoutes.ts",
          ],
      },
  },

  // News Aggregator Platform
  newsAggregator: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "ArticleList.tsx",
                  "ArticleDetail.tsx",
                  "SearchBar.tsx",
              ],
              hooks: [
                  "useArticles.ts",
                  "useSearch.ts",
              ],
              services: [
                  "newsService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "ArticleDetail.tsx",
                  "SearchResults.tsx",
              ],
              utils: [
                  "dateFormatter.ts",
                  "searchHelper.ts",
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
              "articleController.ts",
              "searchController.ts",
          ],
          models: [
              "userModel.ts",
              "articleModel.ts",
              "searchModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "articleRoutes.ts",
              "searchRoutes.ts",
          ],
      },
  },

  // Music Streaming Service
  musicStreaming: {
      frontend: {
          public: [
              "index.html",
              "logo.png",
          ],
          src: {
              components: [
                  "SongList.tsx",
                  "Player.tsx",
                  "PlaylistForm.tsx",
              ],
              hooks: [
                  "useSongs.ts",
                  "usePlayer.ts",
              ],
              services: [
                  "musicService.ts",
              ],
              pages: [
                  "Home.tsx",
                  "PlaylistDetail.tsx",
                  "Player.tsx",
              ],
              utils: [
                  "dateFormatter.ts",
                  "fileUploader.ts",
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
              "musicController.ts",
              "playlistController.ts",
          ],
          models: [
              "userModel.ts",
              "musicModel.ts",
              "playlistModel.ts",
          ],
          routes: [
              "authRoutes.ts",
              "musicRoutes.ts",
              "playlistRoutes.ts",
          ],
      },
  },
};
