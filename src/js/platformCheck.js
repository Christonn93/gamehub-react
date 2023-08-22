import PS4 from "../assets/platform_images/ps4-removebg-preview.png";

const platformCheck = (data) => {
 const platformArray = [];

 const platformName = data.flatMap((n) => n.platform.name);

 console.log(platformName)

 if (platformName === "PlayStation 4") platformArray.push("../assets/platform_images/ps4-removebg-preview.png");

console.log(platformArray)


};

export default platformCheck;
