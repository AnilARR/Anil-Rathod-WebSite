# Anil Rathod — Senior .NET Engineer & Full-Stack Developer Portfolio

An interactive, high-fidelity profile portfolio and print-ready Resume Engine showcasing over 5+ years of certified enterprise engineering history across banking, insurance, and high-frequency financial domains. Designed with a custom modern noir aesthetic, fluid responsive layout, and customized typography.

---

## 🎨 Design Philosophy & Aesthetic
This web application is built around the **Cosmic Slate and Noir theme**:
*   **Contrasted Typography**: Features high-impact display typography using **Space Grotesk** for structural headers, **JetBrains Mono** for developer metrics/terminal cards, and **Inter** for reading content.
*   **Kinetic Polish (Animations)**: Uses `motion` (Framer Motion) to orchestrate smooth viewport entry animations, hover scaling, dynamic accordion sliding, and fluid theme transitions.
*   **Adaptive Theme System**: Instantly toggle between a premium light slate mode and an eye-safe cosmic dark mode.
*   **Dual-Rendering Resume Engine**: Built with automated print CSS stylesheets, enabling you to export a physical paper resume or optimized PDF instantly with zero alignment issues.

---

## 🚀 Core Web Application Features

1.  **Pre-Loader Splash Screen**: A cinematic, self-timed initialization gateway featuring an interactive progression bar, digital versioning tags, and fluid logo rotation.
2.  **Top Business Highlights (Metrics Panel)**: A high-density dashboard visible above the fold that focuses immediately on the top 3 architectural wins (e.g., Kafka Architecture, Security Systems, SSIS Pipelines).
3.  **Accordion Journey Chronology**: Organized career milestones showcasing detailed contributions at **Intellias**, **Pinnacle Technology (ICICI Lombard)**, and **Paramatrix Technologies (Kotak Mahindra & ICRA Limited)**.
4.  **Trophy Room / Impact Index**: A swipe-friendly, horizontally structured highlight reel with spotlight back-glows containing major business victories.
5.  **Technical Matrix Grid**: A full catalog showcasing verified skills categorized elegantly (e.g., Backend Engineering, Database & ETL Processing, DevOps & Cloud Systems, Frontend & Architecture).
6.  **Interactive Resume Hub**: A premium popup engine displaying a comprehensive single-page resume with an in-browser PDF download/print system tailored specifically for technical recruiters.

---

## 💻 Tech Stack Behind This Application

*   **Framework**: React 19 (SPA Architecture)
*   **Bundler & Dev Server**: Vite 6.x
*   **Language**: TypeScript (Strongly-typed data mapping with `resumeData.ts`)
*   **Styling**: Tailwind CSS v4
*   **Animations**: Motion (`motion/react`)
*   **Icons**: Lucide React
*   **Linter**: Strict TS check (`tsc --noEmit`)

---

## 🛠️ Anil Rathod's Core Technical Capabilities

*   **Backend & APIs**: C#, .NET Core 8, .NET Framework 4.8, ASP.NET Web API, RESTful APIs, EF (Entity Framework), Dapper, ADO.NET, .NET Microservices
*   **Database Systems**: MS SQL Server, Sybase DB, Oracle Database, PostgreSQL
*   **Integration & ETL Processing**: SSIS, SSRS Reporting, BODS Interfacing, complex Stored Procedures, Query Optimization
*   **Architecture & Security**: Kafka Event-Driven Architecture, JWT Security, OAuth 2.0, SSO Integration, AES/RSA Custom Cryptography
*   **DevOps & Cloud Systems**: Microsoft Azure Cloud, AWS Deployment, GitLab CI, GitHub Actions, Jenkins CI/CD, IIS Host Clustered Web Servers, PowerShell Scripting, Docker Containers
*   **Frontend Technologies**: Angular, TypeScript, JavaScript, Responsive HTML5/CSS3

---

## 📥 How to Download This Project

You can download this entire project directly from the **Google AI Studio** workspace:

1.  **Locate the Settings Menu**: Look at the top right header of the AI Studio interface and click on the **Settings** gear icon.
2.  **Export Project**:
    *   Click on **Export to ZIP** to instantly download the complete workspace source code as a compressed folder.
    *   *Alternatively*, if your GitHub account is linked, you can sync/export this project directly to a fresh or existing repository on your personal GitHub page.

---

## 🏃‍♂️ How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or newer) installed on your system.

### Setup Instructions

1.  **Extract the ZIP**: Unpack the downloaded folder in your preferred development workspace.
2.  **Navigate to the Directory**:
    ```bash
    cd path-to-extracted-portfolio
    ```
3.  **Install Dependencies**: Install the required packages via `npm`:
    ```bash
    npm install
    ```
4.  **Start the Local Development Server**: Run the following script:
    ```bash
    npm run dev
    ```
    Now, open your browser and navigate to `http://localhost:3000` (or the port specified in terminal feedback) to interact with your live application.

5.  **Build for Production**:
    Compile a optimized, bundle-split build into the static `/dist` output folder:
    ```bash
    npm run build
    ```
    To preview the compiled build locally:
    ```bash
    npm run preview
    ```

---

*Crafted for premium talent evaluation, ensuring recruiters and technical program directors have immediate visibility into production-grade fintech achievements.*
