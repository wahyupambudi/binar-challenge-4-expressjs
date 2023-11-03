const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function Insert(req, res) {
  const { source_account_id, destination_account_id, amount, type } = req.body;

  const payload = {
    source_account_id: parseInt(source_account_id),
    destination_account_id: parseInt(destination_account_id),
    amount: parseInt(amount),
    type,
  };

  try {
    const senderAccount = await prisma.bank_accounts.findUnique({
      where: { id: source_account_id },
    });

    const recipientAccount = await prisma.bank_accounts.findUnique({
      where: { id: destination_account_id },
    });

    if (!senderAccount || !recipientAccount) {
      return res.status(404).json({ error: "Bank Account Not Found!." });
    }

    if (senderAccount.balance < amount) {
      return res.status(400).json({ error: "Amount is not enough!." });
    }

    const transaction = await prisma.transaction.create({
      data: payload,
    });

    const newBalance = await prisma.bank_accounts.update({
      where: {
        id: parseInt(destination_account_id),
      },
      data: {
        balance: parseInt(recipientAccount.balance) + parseInt(payload.amount),
      },
    });

    const resBalance = await prisma.bank_accounts.update({
      where: {
        id: parseInt(source_account_id),
      },
      data: {
        balance: parseInt(senderAccount.balance) - parseInt(payload.amount),
      },
    });

    let resp = ResponseTemplate(transaction, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Deposit(req, res) {
  const { source_account_id, destination_account_id, amount, type } = req.body;

  const payload = {
    source_account_id: parseInt(source_account_id),
    destination_account_id: parseInt(destination_account_id),
    amount: parseInt(amount),
    type,
  };

  try {
    const recipientAccount = await prisma.bank_accounts.findUnique({
      where: { id: destination_account_id },
    });

    if (!recipientAccount) {
      return res.status(404).json({ error: "Bank Account Not Found!." });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: "Amount is not enough!." });
    }

    const transaction = await prisma.transaction.create({
      data: payload,
    });

    const newBalance = await prisma.bank_accounts.update({
      where: {
        id: parseInt(destination_account_id),
      },
      data: {
        balance: parseInt(recipientAccount.balance) + parseInt(payload.amount),
      },
    });

    let resp = ResponseTemplate(
      transaction,
      "Success Deposit to Your Account Bank",
      null,
      200,
    );
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Withdraw(req, res) {
  const { source_account_id, destination_account_id, amount, type } = req.body;

  const payload = {
    source_account_id: parseInt(source_account_id),
    destination_account_id: parseInt(destination_account_id),
    amount: parseInt(amount),
    type,
  };

  try {
    const senderAccount = await prisma.bank_accounts.findUnique({
      where: { id: source_account_id },
    });

    if (!senderAccount) {
      return res.status(404).json({ error: "Bank Account Not Found!." });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: "Not enough Amount!." });
    }

    if (amount > parseInt(senderAccount.balance)) {
      return res.status(400).json({ error: "Not enough Balance!." });
    }

    const transaction = await prisma.transaction.create({
      data: payload,
    });

    const newBalance = await prisma.bank_accounts.update({
      where: {
        id: parseInt(source_account_id),
      },
      data: {
        balance: parseInt(senderAccount.balance) - parseInt(payload.amount),
      },
    });

    let resp = ResponseTemplate(
      transaction,
      "Success Withdraw from Your Account Bank",
      null,
      200,
    );
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Get(req, res) {
  const { id, source_account_id, destination_account_id, amount, type } =
    req.query;

  const payload = {};

  if (id) {
    payload.id = id;
  }

  if (source_account_id) {
    payload.source_account_id = source_account_id;
  }

  if (destination_account_id) {
    payload.destination_account_id = destination_account_id;
  }

  if (amount) {
    payload.amount = amount;
  }

  try {
    const page = parseInt(req.query.page) || 1; // total halaman
    const perPage = parseInt(req.query.perPage) || 10; // total item per halaman
    const skip = (page - 1) * perPage;
    const transactions = await prisma.transaction.findMany({
      skip,
      take: perPage,
      where: payload,
    });

    let resp = ResponseTemplate(transactions, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function GetByPK(req, res) {
  const { id } = req.params;

  try {
    const transactions = await prisma.transaction.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        SenderTransactions: true,
        ReceiverTransactions: true,
      },
    });

    let resp = ResponseTemplate(transactions, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = { Insert, Get, GetByPK, Deposit, Withdraw };
