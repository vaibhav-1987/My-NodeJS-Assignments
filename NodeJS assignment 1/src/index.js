const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(`${fileName}.txt`, fileContent);
}

const myFileReader = async (fileName) => {
	const content = await fs.readFile(`${fileName}.txt`, 'utf-8');
    console.log(content);
}


const myFileUpdater = async (fileName, fileContent) => {
	const content = await fs.readFile(`${fileName}.txt`, 'utf-8');
    const updatedContent = content + fileContent;
    await fs.writeFile(`${fileName}.txt`, updatedContent);
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(`${fileName}.txt`);
}

// myFileWriter('testfile', 'Hello');
// myFileReader('testfile');
// myFileUpdater('testfile', ' World');
// myFileDeleter('testfile');

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }