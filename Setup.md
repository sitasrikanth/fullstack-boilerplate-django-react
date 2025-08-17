DevSkillsHQ/fullstack-boilerplate-django-react
🔄 Very clean and minimal

🚀 Great for learning and extending

GitHub: https://github.com/DevSkillsHQ/fullstack-boilerplate-django-react

Feature	Why It Helps
🧹 Minimal & Clean	Easier to understand and extend
🧱 Simple 3-Tier Setup	Backend (Django), Frontend (React), DB (Postgres)
🐳 Docker-ready	Already has Dockerfile and docker-compose.yml
🎯 Great for Practice	Perfect for learning and customizing
🧪 Health Check + API Demo	/ping endpoint already built-in
⚙️ Uses Vite + Django REST	Fast build times and modern tech stack

1. System Requirements
You need the following installed:

Tool	Download Link	Version Suggestion
Python	https://www.python.org/downloads/windows/	≥ 3.8
Node.js	https://nodejs.org/en/download/	LTS
PostgreSQL	https://www.postgresql.org/download/windows/	≥ 13
Git	https://git-scm.com/downloads	Any

python --version
node --version
npm --version
psql --version

 2. Clone the Repo
bash
Copy
Edit
git clone https://github.com/DevSkillsHQ/fullstack-boilerplate-django-react.git
cd fullstack-boilerplate-django-react

🐘 3. Set up PostgreSQL Database
Open pgAdmin or use the psql CLI

Create a new database called:

makefile
Copy
Edit
Name: fullstack_boilerplate
Username: postgres
Password: postgres
(You can change this, but you must reflect it in the Django config.)


⚙️ 4. Configure Backend
bash

cd backend
python -m venv venv
venv\Scripts\activate  # for CMD / Git Bash
# OR
.\venv\Scripts\Activate.ps1  # for PowerShell

pip install -r requirements.txt
Set environment variables:

Create a .env file in the backend/ folder:

ini

DJANGO_SECRET_KEY=your-secure-secret-key
POSTGRES_DB=fullstack_boilerplate
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
--command to get secure secret key


Run migrations:

bash

python manage.py migrate
Run Django server:

bash

python manage.py runserver
Should now be running at:
👉 http://127.0.0.1:8000/ping → {"result": "pong"}

⚛️ 5. Configure Frontend
In a new terminal:

bash

cd frontend
npm install
npm start
Should now be running at:
👉 http://localhost:3000

You’ll see:

React + Django 3-Tier App
API Response: pong

🧪 Done!
Your app is now working locally with:

Frontend: React + Vite

Backend: Django + DRF

Database: PostgreSQL

-----------------------------------------------------
Move the code to personal repo
-----------------------------------------------------
 since you cloned it from DevSkillsHQ, Git still points to their remote repo.
You’ll need to:



1️⃣ Remove the old origin

bash

git remote remove origin
2️⃣ Create a new empty repo on your GitHub

Go to: https://github.com/new

Name it something like fullstack-boilerplate-django-react (or whatever you like)

Leave it empty (no README, .gitignore, or License — to avoid merge conflicts).

3️⃣ Add your personal GitHub repo as origin
Replace YOUR_USERNAME and YOUR_REPO with your details:

bash

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
4️⃣ Push your local code to your repo

bash

git branch -M main
git push -u origin main
5️⃣ Verify

bash

git remote -v
It should now show your GitHub repo, not DevSkillsHQ.

If you want, I can also include a .gitignore cleanup so that sensitive files (.env, secrets, etc.) won’t get pushed to GitHub.