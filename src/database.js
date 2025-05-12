const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://kukilbora99:CD796met5E3vkDtq@iancluster2.rxscyy5.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Dummy";

async function main() {
  await client.connect();
  console.log("Connected Successfully");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //   const newUser = {
  //     firstname: "LAMINAL"
  //     lastname: "YAMAL",
  //     city: "GUWAHATI",
  //     phoneNumber: "1243565778",
  //   };

  //   const insertOne = await collection.insertMany([newUser]);
  //   console.log("Inserted Data: => ", insertOne);

  const updateData = await collection.updateMany(
    { firstname: "ISHA" },
    { $set: { firstname: "ELENA" } }
  );
  console.log("Updated Data: => ", updateData);

  const deleteMany = await collection.deleteMany({ firstname: "ELENA" });
  console.log("Deleted Successfully: =>", deleteMany);

  const findOne = await collection.find({ firstname: "KUKIL" }).toArray();
  console.log("Results:=>", findOne);

  const allData = await collection.find({}).toArray();
  console.log("All data: => ", allData);

  return "done";
}

main()
  .then(console.log)
  .catch(console.log)
  .finally(() => client.close);
