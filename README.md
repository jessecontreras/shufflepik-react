# Shufflepik 🎲📸

**Shufflepik** is a social Discord bot that helps you and your friends share pictures, memes, and media effortlessly across different servers.

Whether you're running multiple communities or just want a centralized way to organize and reshare great content, Shufflepik makes media sharing smoother, faster, and more fun.

---

## 🚀 Features

- 📁 Share pictures and memes across multiple Discord servers
- 📸 Clean, responsive frontend for uploading and managing images
- 🔒 Secure backend with rate limiting and file validation
- 🌍 Designed for communities that span across different Discord servers
- 🧠 Built with Next.js, PostgreSQL, and Discord.js for speed and flexibility

---

## 🧱 Tech Stack

- **Frontend:** Next.js (React), Tailwind CSS
- **Backend:** Node.js, Discord.js, Drizzle ORM, PostgreSQL
- **File Uploads:** Cloudinary
- **Auth & Access Control:** Discord OAuth2
- **Deployment:** Docker-ready and easily hostable on DigitalOcean or similar VPS

---

## 🔧 Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/shufflepik.git
   cd shufflepik
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file and populate it with the following:

   ```env
   DISCORD_CLIENT_ID=your_client_id
   DISCORD_CLIENT_SECRET=your_secret
   DATABASE_URL=postgres://user:password@host:port/dbname
   CLOUDINARY_URL=cloudinary://key:secret@cloud_name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 🧪 Testing

Run backend and integration tests using:

```bash
npm test
```

---

## 📦 Deployment

This project is Dockerized.

```bash
docker build -t shufflepik .
docker run -p 3000:3000 shufflepik
```

---

## 🤝 Contributing

We welcome contributions and suggestions. Feel free to fork this repo and submit pull requests.

---

## 📜 License

MIT License

---

## 🙌 Acknowledgements

- Built with 💙 for Discord communities
- Thanks to [Drizzle ORM](https://orm.drizzle.team/), [Cloudinary](https://cloudinary.com/), and [Discord.js](https://discord.js.org/)
