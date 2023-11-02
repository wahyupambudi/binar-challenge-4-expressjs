const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function Insert(req, res) {
  // insert user & profile
  const { name, email, password, identity_type, identity_number, address } =
    req.body;

  try {
    const users = await prisma.users.create({
      data: {
        name,
        email,
        password,
        profile: {
          create: {
            identity_type,
            identity_number: parseInt(identity_number),
            address,
          },
        },
      },
    });

    let resp = ResponseTemplate(users, "success", null, 200);
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
  const { id, name, email } = req.query;

  const payload = {};

  if (name) {
    payload.name = name;
  }

  if (email) {
    payload.email = email;
  }

  try {
    const page = parseInt(req.query.page) || 1; // total halaman
    const perPage = parseInt(req.query.perPage) || 10; // total item per halaman
    const skip = (page - 1) * perPage;
    const users = await prisma.users.findMany({
      skip,
      take: perPage,
      where: payload,
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    let resp = ResponseTemplate(users, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function GetByPK(req, res) {
  const { userId } = req.params;

  try {
    const users = await prisma.users.findUnique({
      where: {
        id: Number(userId),
      },
      include: {
        profile: true,
      },
    });

    let resp = ResponseTemplate(users, "success", null, 200);
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
  const { name, email, password } = req.body;
  const { userId } = req.params;

  const payload = {};

  if (!name && !email && !password) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }

  if (name) {
    payload.name = name;
  }

  if (email) {
    payload.email = email;
  }

  if (password) {
    payload.password = password;
  }

  try {
    const users = await prisma.users.update({
      where: {
        id: Number(userId),
      },
      data: payload,
    });

    let resp = ResponseTemplate(users, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    // console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Delete(req, res) {
  const {userId} = req.params;

  try {
    const users = await prisma.users.delete({
      where: {
        id: Number(userId)
      }
    })
    let resp = ResponseTemplate(users, "success", null, 200);
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
  Insert,
  GetByPK,
  Update,
  Delete
};
