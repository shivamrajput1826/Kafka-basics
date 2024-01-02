const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting");
  admin.connect();
  console.log("Admin connected");
  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("topic created success [rider-updates]");
  await admin.disconnect();
}
init();
