# Space Portfolio

Personal portfolio website for Ayush Singh, built as a space-themed single-page experience with animated visuals, project highlights, technical skills, experience, certificates, testimonials, and a contact form.

## Built With

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- Three.js with `@react-three/fiber` and `@react-three/drei`
- Framer Motion
- Nodemailer for contact form email delivery

## Features

- Responsive portfolio layout with smooth navigation
- Animated star-field background and space-inspired visual effects
- Sections for about, skills, projects, experience, certificates, and testimonials
- Project and skill data organized in reusable configuration files
- Contact form backed by a server-side SMTP route
- Static assets for projects, skills, videos, and resume files

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm
- An SMTP account if the contact form is enabled

### Installation

```bash
git clone https://github.com/ayush/space-portfolio.git
cd space-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root for the contact form:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
MAIL_TO=your-receiving-email@example.com
MAIL_FROM=your-sender-email@example.com
SMTP_SECURE=false
```

`MAIL_FROM` and `SMTP_SECURE` are optional. Use `SMTP_SECURE=true` for SMTP providers that require an SSL connection, commonly on port `465`. Keep `.env.local` private and never commit credentials.

Without these variables, the rest of the portfolio can still be viewed, but contact form submissions will fail.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
app/
  api/contact/route.ts   Contact form API route
  globals.css            Global styles and animations
  layout.tsx             Site layout, metadata, navigation, and background
  page.tsx               Main portfolio page
components/main/         Portfolio sections
components/sub/          Reusable section components
config/index.ts          Site metadata
constants/index.ts       Skills, projects, social links, and content data
public/                  Project images, skill icons, videos, and resume files
```

## Customizing the Portfolio

- Update project, skill, and social-link data in `constants/index.ts`.
- Update page metadata in `config/index.ts`.
- Replace images and other public assets under `public/`.
- Edit section components under `components/main/` to change layout or copy.
- Adjust global colors, animations, and typography in `app/globals.css`.

## Production

Build and run the production version locally with:

```bash
npm run build
npm run start
```

When deploying, configure the SMTP environment variables in the hosting provider before using the contact form. The project includes `netlify.toml` for Netlify deployments.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
