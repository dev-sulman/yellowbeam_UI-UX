# YellowBeam IT Services Website

Welcome to the official repository for the SulzaX IT Services company website. This project is a modern, responsive, and feature-rich web application designed to showcase the company's services, portfolio, and industry expertise. It features an AI-powered solution advisor to provide users with instant, tailored IT recommendations.

## Features

- **Responsive Design**: A beautiful and fully responsive layout that works on all devices, from desktops to mobile phones.
- **Service & Industry Pages**: Dedicated pages for each service and industry, detailing the company's offerings and expertise.
- **AI Solution Advisor**: An interactive Genkit-powered feature that recommends IT solutions based on user-described business needs.
- **Project Portfolio**: A filterable gallery showcasing completed projects with details on technologies used and results achieved.
- **Dynamic Content**: Built with reusable components for easy content management and future expansion.
- **Contact & Consultation Forms**: Seamless forms for user inquiries and consultation requests.

## Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Generative AI**: [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and a package manager like `npm` or `yarn` installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dev-sulman/IT-website.git
    cd IT-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Setup

The AI features in this application are powered by Google's Gemini models via Genkit. To use them, you need a Google AI API key.

1.  **Create a `.env` file** in the root of your project.

2.  **Get your API key** from [Google AI Studio](https://aistudio.google.com/app/apikey).

3.  **Add the API key to your `.env` file:**
    ```env
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

### Running the Development Server

Once the dependencies are installed and the environment is set up, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. The application will automatically reload when you make changes to the code.

## Building for Production

To create an optimized production build of the application, run the following command:

```bash
npm run build
```

This will generate a `.next` folder with the production-ready files. You can then start the production server with:

```bash
npm start
```

## Deployment

This application is configured for easy deployment on platforms like [Vercel](https://vercel.com/), the creators of Next.js. To deploy:

1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Add your `GEMINI_API_KEY` as an environment variable in the Vercel project settings.
4.  Vercel will automatically build and deploy your site.
