# NguyenSBA
#### Goldr.com - A Financial Net Worth Tracking App
#### [Link to Github](https://github.com/edwardlocnguyen/NguyenSBA)

---

### Description
#### Goldr.com is a front-end web application for users who want to track their net worth. Once a user is logged in, they can review their portfolio overview on the Home page. This page displays cards that show their user profile info like username and email, a summary of their financial accounts like how much money is in their investments, and a summary of their asset type allocation like the percentages of their portfolio that's cash, stocks, bonds, etc. All information and data is hard-coded. This front-end application does not save, retrieve or persist data through a back-end database.

---

### Technical Specifications

#### Login Page:
##### 1. This page contains a form, and allows users to log into the website
##### 2. The form uses JavaScript to validate the email and password inputs, and uses regex validation
##### 3. Other JS methods that are used consist of: if-statements, functions, and events
##### 4. This page also has its own unique web font retrieved from Google Fonts
##### 5. This page uses internal, inline, and external CSS styling

#### Home Page:
##### 1. This page displays an overview of the user's profile, financial accounts, and asset type allocations
##### 2. The page relies heavily on Bootstrap (SASS) for organization and customization

#### User Profile Page:
##### 1. This page displays the user's profile, and is interactive
##### 2. This page contains a popup form (Bootstrap modal) that allows a user to update their info
##### 3. Some JS methods that are used consist of: event listeners and functions

#### Accounts Page:
##### 1. This page displays a table of the user's financial accounts with its asset type and dollar amount
##### 2. The page has a drop-down menu with different years as options, to see a user's net worth over the years
##### 3. When a year is chosen from the drop-down menu, the table will update its values
##### 4. The page also contains an image of a graph of the user's net worth over time

#### Assets Page:
##### 1. This page displays a table of the user's asset types with its percentage allocation and dollar amount
##### 2. The page has a drop-down menu with different years as options, but is not functional and its purpose is purely conceptual
##### 3. The page also contains an image of a pie chart of the user's net worth over time

### Navigation:
##### 1. The navigation allows users to visit each of the pages mentioned above
##### 2. The Signout option in the drop-down menu redirects the user to the login page
