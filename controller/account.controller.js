const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function Get(req, res) {
  const { id, userId, bank_name, bank_account_number, balance } = req.query;

  const payload = {};

  if (userId) {
    payload.userId = userId;
  }

  if (bank_name) {
    payload.bank_name = bank_name;
  }

  if (bank_account_number) {
    payload.bank_account_number = bank_account_number;
  }

  try {
    const page = parseInt(req.query.page) || 1; // total halaman
    const perPage = parseInt(req.query.perPage) || 10; // total item per halaman
    const skip = (page - 1) * perPage;
    const accounts = await prisma.bank_accounts.findMany({
      skip,
      take: perPage,
      where: payload,
      select: {
        id: true,
        userId: true,
        bank_name: true,
        bank_account_number: true,
        balance: true,
      },
    });

    let resp = ResponseTemplate(accounts, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Insert(req, res) {
  // insert user & profile
  const { userId, bank_name, bank_account_number, balance } = req.body;

  const payload = {
    userId: parseInt(userId),
    bank_name,
    bank_account_number,
    balance,
  };

  try {
    const accounts = await prisma.bank_accounts.create({
      data: payload,
    });

    let resp = ResponseTemplate(accounts, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function GetByPK(req, res) {
  const { id } = req.params;

  try {
    const accounts = await prisma.bank_accounts.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });

    let resp = ResponseTemplate(accounts, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Update(req, res) {
  const { userId, bank_name, bank_account_number, balance } = req.body;
  const { id } = req.params;

  const payload = {};

  if (!userId && !bank_name && !bank_account_number && !balance) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }

  if (userId) {
    payload.userId = userId;
  }

  if (bank_name) {
    payload.bank_name = bank_name;
  }
  if (bank_account_number) {
    payload.bank_account_number = bank_account_number;
  }
  if (balance) {
    payload.balance = balance;
  }

  try {
    const accounts = await prisma.bank_accounts.update({
      where: {
        id: Number(id),
      },
      data: payload,
    });

    let resp = ResponseTemplate(accounts, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Delete(req, res) {
  const {id} = req.params;

  try {
    const accounts = await prisma.bank_accounts.delete({
      where: {
        id: Number(id)
      }
    })
    let resp = ResponseTemplate(accounts, "success", null, 200);
    res.json(resp);
    return;
  } catch(error) {
    // console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = {
  Get,
  GetByPK,
  Insert,
  Update,
  Delete
};
