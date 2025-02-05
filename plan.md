# App to manage temporary finances between friends

## Features

-   create a project with a name and a description
-   add names to the project
-   add a transaction with a name, amount and who paid, who benifited (default is all)
-   see a list of transactions
-   calculate minaml transactions required to settle up money between friends
-   export the report to pdf

## V0 prompt

I need to create a single page app where I can manage temporary finances between friends.

The app should have the following features:

-   create a project with a name and a description
-   add names to the project
-   add a transaction with a name, amount and who paid, who benifited (default is all)
-   see a list of transactions
-   calculate minaml transactions required to settle up money between friends
-   export the report to pdf

User interface should be minimal and clean.

## UI Design Prompt

Create a modern, minimal single-page web application for managing shared expenses between friends. The interface should follow these specifications:

### Layout Structure

-   Header section with app name "SplitWise" (or similar) and a clean, modern logo
-   Main content area with tabs or sections for different features
-   Consistent padding and spacing throughout
-   Use a neutral color palette with one accent color for important actions

### Main Sections

1. Project Setup (Initial View)

    - Large "Create New Project" button in the center
    - Form with:
        - Project name field
        - Project description textarea
        - "Create Project" button
    - List of existing projects (if any) with ability to switch between them

2. People Management

    - Simple input field with "Add Person" button
    - Display added people as removable chips/tags
    - Clear visual indication of who's in the project

3. Transactions Section

    - "Add Transaction" button at the top
    - Transaction form should include:
        - Transaction name field
        - Amount input with currency symbol
        - Dropdown/selector for who paid
        - Multiple select for beneficiaries with "Everyone" as default
        - Date picker (optional)
        - "Add" button
    - Transaction list below showing:
        - Transaction name
        - Amount
        - Payer
        - Beneficiaries
        - Date
        - Option to edit/delete

4. Settlement View

    - "Calculate Settlement" button
    - Display minimal transactions needed to settle up
    - Each settlement transaction should show:
        - Who pays
        - Who receives
        - Amount
    - Visual representation of debts (optional graph)

5. Export Section
    - "Export to PDF" button
    - Preview of the report layout
    - Options for what to include in the report

### Interactive Elements

-   Use tooltips for additional information
-   Confirmation dialogs for important actions
-   Loading states for async operations
-   Success/error notifications
-   Animated transitions between sections

### Responsive Design

-   Works well on both desktop and mobile
-   Mobile-first approach
-   Collapsible sections on smaller screens
-   Touch-friendly interface

### Visual Style

-   Clean, sans-serif typography
-   Subtle shadows for depth
-   Rounded corners for a friendly feel
-   Clear visual hierarchy
-   Whitespace for readability
-   Minimal use of borders
-   Icons should be consistent and simple

The interface should feel intuitive and require minimal explanation for users to understand how to use it.
