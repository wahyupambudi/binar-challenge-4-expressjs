# binar-challenge-4-expressjs
Challenge Chapter 4 - Nodejs, Express Js, Prisma - Bootcamp Backend Binar Academy


## Project Setup
Clone the project from GitHub repository :

      git clone https://github.com/wahyupambudi/binar-challenge-4-expressjs
      
change directory :

      cd binar-challenge-4-expressjs

Install all package dependencies :

      npm install

Run Prisma Migrate :

      npx prisma migrate dev

Compile and hot-reload for development :

      npm run dev

## Environment Variables Settings

There is a required environment variable that needs to be set in `.env`
submit:

- PORT
  
  Port address to provide access to localhost for development purposes. You can assign a port address according to the available port, such as 8000, 8080 or etc.
  
- DATABASE_URL
  
  Database URL credentials to provide access to the Database. You can contact the administrator to get the adrress url.

## Delivery
- Inisialisasi proyek Express.js dengan menggunakan perintah npm init -y
- Instal Express.js dan Prisma.js dengan menjalankan perintah npm install express prisma
- Implementasikan server Express.js dengan beberapa endpoint yang memanfaatkan Prisma.js untuk berinteraksi dengan basis data PostgreSQL yang telahAnda buat pada Challenge 3
- Contoh endpoint: /accounts untuk mengambil daftar akun, /deposit untuk melakukan deposit, /withdraw untuk melakukan penarikan, dan lainnya
- Buatlah pull request dari branch feature ke branch main di repositori GitHub


## Criteria
- Mampu membuat API menggunakan Express JS (40)
- Mampu melakukan CRUD kedalam database menggunakan Prisma (40)
- Mampu menggunakan JSON (20)

## Endpoint

### User
- POST /api/v1/users: menambahkan user baru beserta dengan profilnya.
- GET /api/v1/users: menampilkan daftar users.
- GET /api/v1/users/:userId: menampilkan detail informasi user (tampilkan juga profilnya).

### Account
- POST /api/v1/accounts: menambahkan akun baru ke user yang sudah didaftarkan.
- GET /api/v1/accounts: menampilkan daftar akun.
- GET /api/v1/accounts: menampilkan detail akun.

### Transaction
- POST /api/v1/transactions: mengirimkan uang dari 1 akun ke akun lain (tentukan request body nya).
- GET /api/v1/transactions: menampilkan daftar transaksi.
- GET /api/v1/transactions/:transaction: menampilkan detail transaksi (tampilkan juga pengirim dan penerimanya).


## Tech Stack
- [x] Express Js
- [x] Prisma
- [x] PostgresSQL 16
- [x] PgAdmin V7
- [x] Postman
- [x] Visual Studio Code
- [x] DBDiagram


## Entity Relationship Diagram
![App Screenshot](challenge-4.png)
      
## Reference
[Installation](https://www.npmjs.com/package/express) | [API Reference](https://expressjs.com/en/4x/api.html#app) | [Prisma Documentation](https://www.prisma.io/docs/concepts/overview/what-is-prisma) | [Swagger Documentation](https://swagger.io/)