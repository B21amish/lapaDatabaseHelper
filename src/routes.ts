import config from "./utils/config";

const temp = () => {
  console.log("Hello");
};

const temp2 = async () => {
  console.log(config.ip);
};

export { temp, temp2 };
