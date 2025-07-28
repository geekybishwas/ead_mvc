# Todo Master - MVC Pattern Next.js App

A modern todo application built with Next.js using the MVC (Model-View-Controller) pattern.

## 🚀 Live Demo

[Visit the live app](https://your-app-name.vercel.app)

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **MVC Architecture** pattern
- **Vercel** for deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── api/todos/route.ts    # Controller (API routes)
│   ├── components/           # View components
│   │   └── TodoList.tsx
│   ├── models/              # Models (data structures)
│   │   └── Todo.ts
│   ├── page.tsx            # Main page
│   └── layout.tsx
└── lib/
    └── data.ts             # Data layer
```

## 🔧 Local Development

1. Clone the repository:

```bash
git clone <your-repo-url>
cd your-todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Select your repository
5. Click "Deploy"

### Method 2: Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Login and deploy:

```bash
vercel login
vercel
```

## 🌟 Features

- ✅ Create, read, update, delete todos
- 🔍 Search and filter functionality
- 📊 Statistics dashboard
- 👁️ Individual todo detail view
- 📱 Fully responsive design
- ⚡ Real-time updates
- 🎨 Modern, professional UI

## 🏗️ MVC Architecture

- **Model** (`Todo.ts`): Data structure and business logic
- **View** (`TodoList.tsx`): User interface components
- **Controller** (`api/todos/route.ts`): API endpoints and request handling

## 📝 API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos` - Update a todo
- `DELETE /api/todos?id={id}` - Delete a todo

## 🔒 Environment Variables

Create a `.env.local` file for local development:

```bash
# Add your environment variables here
# DATABASE_URL=your_database_url_here
```

For production, set environment variables in the Vercel dashboard.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull

## 📄 License

This project is licensed under the MIT License.
