1. Pages structure
-includes pages and shadcn installation

2. Navbar component
-functional navbar componet, with logo, search input and dropdown menu

3. Connceting DB
-connecting supabase with the project using prisma

4. Database seed
-making a script to put dummy data to database

5. Featured products
-displaying first products, using card component from shadcn. 
-Adding disconnect from db to avoid error while fetching

6. Hero and caroussel component

7. All products and single product component
-displaying all products on products page
-loading component with card skeleton
-displaying as a grid or as list (two different components)
-implementing search input

-dynamic single product page
-action to call single product content
-breadcrumbs component

8. Auth with clerk
-sign in and out user using clerk
-protecting private routes with middleware
-spliting dropdown menu and theme toggle in 2 components
-caching featured products instead of disconnecting prisma
-toaster

9. Admin create product
-creating input component and wraping it in form container
-action to create product
-validating products inputs with zod

10. Admin overview and edit, favorites
-page for admin to overview of the products, as well as delete and edit option
-separate logic to edit image
-favorites page, dynamic button for favorite products, prisma db model

11. Review feature and functionality across the app
-option to review the product only once if you are logged in
-prisma model and connect one (product) to many (reviews)
-fetching and displaying users reviews
-validation with zod schemas

12. Cart functionality

13. Payment with Stripe
-setting up checkout page
-sending requests with secret key
-rendering orders for users
-rendering orders for admins