import Purchase from "../models/Purchase.js";
import Sale from "../models/Sale.js";
import LogPurchase from "../models/LogPurchase.js";
import LogSale from "../models/LogSale.js";

//create purchases field
export const Purchases = async (req, res) => {
  const { data } = req.body;

  console.log(data);

  data.map(async (el) => {
    console.log(el);
    try {
      await Purchase.create(el);
    } catch (error) {
      console.log(error);
    }
  });
  res.json({ msg: "Registration Successful" });
};

//create LogPurchases field
export const LogPurchases = async (req, res) => {
  const {
    quantity,
    via,
    cost,
    scost,
    expenses,
    description,
    owner,
    purdate,
    picdate,
    email,
    number,
    address,
    city,
    staten,
    zip
  } = req.body;

  try {
    await LogPurchase.create({
      quantity: quantity,
      via: via,
      cost: cost,
      scost: scost,
      expenses: expenses,
      description: description,
      owner: owner,
      purdate: purdate,
      picdate: picdate,
      email: email,
      number: number,
      address: address,
      city: city,
      staten: staten,
      zip: zip
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

//get LogPurchases field
export const getLogPurchases = async (req, res) => {
  try {
    const users = await LogPurchase.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//get Purchases
export const getPurchases = async (req, res) => {
  try {
    const users = await Purchase.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// delete purchases and get purchases field and create LogPurchase field
export const deletePurchases = async (req, res) => {
  const forDelete = await Purchase.findOne({ where: { id: req.body.id } });
  console.log(forDelete, "fordelete");
  if (forDelete == null) {
    console.log("Not found!");
  } else {
    console.log("asdfasd");

    try {
      await LogPurchase.create({
        ...forDelete.dataValues,
        purdate: new Date(),
        picdate: new Date()
      });
      console.log("yyyyyyyyyyy");
      res.json({ msg: "Registration Successful" });
    } catch (error) {
      console.log(error);
    }

    console.log(forDelete.quantity); // 'My Title'
  }
  await Purchase.destroy({
    where: {
      id: req.body.id
    }
  });
  res.json({ msg: req.body.id + "----- successfully deleted" });
};

//create Sales field
export const Sales = async (req, res) => {
  console.log(req.body)
  const data = req.body;
  console.log(data)
try {
    await Purchase.destroy({
      where:{
        eport:data.eport
      }
    })
    await Sale.create({
      ...data
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

// get Sales field
export const getSales = async (req, res) => {
  try {
    const users = await Sale.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//create LogSales field
export const LogSales = async (req, res) => {
  const {
    eport,
    via,
    cost,
    scost,
    expenses,
    description,
    owner,
    purdate,
    picdate,
    email,
    number,
    address,
    city,
    staten,
    zip
  } = req.body;

  try {
    await LogSale.create({
      eport: eport,
      via: via,
      cost: cost,
      scost: scost,
      expenses: expenses,
      description: description,
      owner: owner,
      purdate: purdate,
      picdate: picdate,
      email: email,
      number: number,
      address: address,
      city: city,
      staten: staten,
      zip: zip
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

//get LogSales field
export const getLogSales = async (req, res) => {
  try {
    const users = await LogSale.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// delete Sales fiels and get sales field and create logSales field.
export const deleteSales = async (req, res) => {
  const forDelete = await Sale.findOne({ where: { id: req.body.id } });
  console.log("cccccccccccc");
  if (forDelete === null) {
    console.log("Not found!");
  } else {
    console.log("asdfasd");

    try {
      await LogSale.create({
        ...forDelete.dataValues,
        purdate: new Date(),
        picdate: new Date(),
      });
      console.log("yyyyyyyyyyy");
      res.json({ msg: "Registration Successful" });
    } catch (error) {
      console.log(error);
    }
    console.log(forDelete.eport); // 'My Title'
  }

  await Sale.destroy({
    where: {
      id: req.body.id
    }
  });
  res.json({ msg: req.body.id + "----- successfully deleted" });
};
