import * as fs from "fs/promises"

//creating directory

// try {
// //     await fs.mkdir("c://Documents")
//     // await fs.mkdir("c://Documents//courses//redux//toolkit", {recursive: true})
//     const files = await fs.readdir("c://Documents")

//     for (const file of files) {
//         console.log(files);
//     }
// } catch (error) {
//     console.log(error)
// }

// Remove directory
try {
    await fs.rmdir("c://Documents//courses")
} catch (error) {
    console.log(error)
}

//create and write files
// try {
//     await fs.writeFile("README.md", "Hello World")
// } catch (error) {
    
// }

// try {
//     const data = await fs.readFile("README.md", "utf8")
//     console.log(data)
// } catch (error) {
    
// }

// try {
//     await fs.appendFile("README.md ", "NodeJS is the best")
// } catch (error) {
//     console.log(error);
// }

// try {
//     await fs.copyFile("Readme.md", "info.txt");
// } catch (error) {
//     console.log(error);
// }

// try {
//     const info = await fs.stat("README.md")
//     console.log(info);
// } catch (error) {
//     console.log(error);
// }


try {
    await fs.writeFile("README.md", "Hello world!");
} catch (error) {
    console.log(error);
}

try {
    await fs.copyFile("README.md", "info.txt");
} catch (error) {
    console.log(error);
}