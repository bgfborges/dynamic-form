# Dynamic Form Builder with React, Redux, and TypeScript

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Power of the Architecture](#power-of-the-architecture)
- [Extending the Architecture](#extending-the-architecture)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Creating a Form File](#creating-a-form-file)

## Live Demo
Check out the live version of the improved code on the [Dynamic Form Builder Demo](https://dynamic-form-qy5tlci14-bgfborges.vercel.app/).

## Overview
This project implements a dynamic form builder using React, Redux, and TypeScript. The goal is to create a flexible and reactive form system that allows you to build and manage forms dynamically based on data received from the Redux store. The architecture follows key principles such as event-driven design and reactivity to store actions.

## Project Structure
The project is structured into components and actions to create a robust form-building system:

### Components
Form Component: This component acts as the form container and manages the rendering of different field components based on data received from the Redux store.

#### Field Components:

1. Select Component: Renders a select field.
2. Input Component: Renders text, number, or password fields.

### Redux
4. Redux Store: Manages the application's state and receives data from Redux actions.
5. Redux Actions: Dispatch actions to the store, which, in turn, trigger the creation and rendering of the dynamic form within the Form Component.

## Power of the Architecture

The dynamic form builder architecture presented in this project offers several key advantages:

1. **Flexibility and Reusability**: The architecture allows for the creation of a wide range of forms by simply configuring the form data in the Redux store. This flexibility reduces the need for repetitive form component coding, making it easier to adapt to changing requirements.

2. **Centralized State Management**: The Redux store acts as a central hub for managing form data. This centralized state management simplifies the process of updating and synchronizing form elements, making the application more maintainable.

3. **Event-Driven Design**: The system follows an event-driven design pattern. Actions trigger the creation and rendering of forms, ensuring that the user interface remains in sync with the underlying data.

4. **Type Safety with TypeScript**: TypeScript integration provides strong typing, reducing the likelihood of runtime errors and improving code quality. It enables developers to work confidently with form data and actions.

## Extending the Architecture

The architecture can be extended in several ways to enhance its capabilities:

### 1. Backend Integration for Dynamic Forms

By integrating the application with a backend API, you can fetch form configurations directly from the server. This allows for dynamic form creation based on server-side data, making it possible to adapt to changing business requirements without the need to redeploy the frontend.

### 2. Form Schema Generation

You can implement a form schema generation system that converts backend-defined form structures into the format expected by the frontend. This separation of concerns allows the frontend to focus on rendering and user interactions while the backend handles form metadata.

### 3. Form Customization

Provide a user-friendly interface within the application for administrators or power users to customize and create forms. This empowers non-developers to design and manage forms without requiring coding skills. Form customization can be achieved through a visual form builder or a form definition DSL (Domain-Specific Language).

### 4. Validation and Submission Handling

Extend the architecture to handle form validation and submission logic. You can implement validation rules and error handling mechanisms to ensure that data entered into the forms is accurate. Additionally, manage form submissions and interactions with external APIs or databases.

### 5. Form Versioning and History

Implement version control for forms, allowing you to track changes and maintain a history of form configurations. This feature can be invaluable when auditing and troubleshooting form-related issues.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/bgfborges/dynamic-form-builder.git
   cd dynamic-form-builder
   npm install
   npm start
   ```
2. Open your web browser and access the application at http://localhost:3000.

## Creating a Form File
To create a new form file, follow this template structure:

./src/constants/forms/<form-id-name>.ts
```typescript
export const contactForm = {
    settings: {
        id: "contact-12345",
        submitButton: "Send Message",
        formTitle: "Contact Us"
    },
    fields: [
        {
            type: "text",
            label: "Full Name",
            name: "full_name"
        },
        {
            type: "email",
            label: "Email Address",
            name: "email"
        },
        {
            type: "textarea",
            label: "Message",
            name: "message"
        }
    ]
};
```

./src/constants/formConstants.ts
```typescript
import { contactForm } from './forms/contact-12345';
import { loginForm } from './forms/login-56789';

export const REQUEST_FORM_COMPONENT = 'REQUEST_FORM_COMPONENT';
export const SUBMIT_FORM_COMPONENT = 'SUBMIT_FORM_COMPONENT';

export const CONTACT_FORM = 'contact-12345';
export const LOGIN_FORM = 'login-56789';

export const FORM_MAP = {
    [CONTACT_FORM]: contactForm,
    [LOGIN_FORM]: loginForm,
};
```
Once you've created a form file, you can use it in the application as shown in the example below:

```typescript
import DisplayResultsC from '../../components/DisplayResults/DisplayResultsC';
import FormC from '../../components/Form/FormC';
import { Section } from '../../components/Section/Section';

import { 
    CONTACT_FORM as CONTACT_FORM_ID,
    LOGIN_FORM as LOGIN_FORM_ID,
} from '../../constants/formConstants';

export const Contact = () => {
    const Forms = () => {
        return (
            <>
                <FormC id={CONTACT_FORM_ID} />
                <FormC id={LOGIN_FORM_ID} />
            </>
        );
    };
 
    return (
        <Section 
            sidebar={<DisplayResultsC />}
            page={<Forms />}
        />
    );
}; 
```