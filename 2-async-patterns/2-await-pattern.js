const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const fist = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");

        await writeFile(
            "./content/result-mind-granade.txt",
            `This is awsome repeated one more time: ${fist}  ${second}`
        );
        console.log(fist, second);
    } catch (error) {
        console.log(error);
    }
};

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

start();