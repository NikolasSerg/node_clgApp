const fs = require('fs');

const operation = process.argv[2];
const file = process.argv[3];
const post = process.argv[4];
const description = process.argv[5];

// console.log(operation === "list");

switch (operation) {
    // case create:
    //     console.log("operation create");
    //     break;
    case 'list':
        showList(file);
        // console.log("list method done");
        break;
    case 'add':
        console.log("add post");
        addPost(file, post, description)
        break;
   

    default:
        console.log("don't know this command");
        break;
}
function existFile(fileName) {
    console.log('start cheks exist file');
    if (fs.existsSync(fileName)) {
        console.log(`yeah, allright. file exist. go on`);
    } else {
        fs.writeFile(fileName,"", (err) => {
            if (err) {
                console.log(`sorry but somthing wrong: ${err}`);
            } else {
                console.log('its good for you:  file create');
            }
        })
    }
    console.log('end cheks exist file');
}
function showList(file) {
    existFile(file);
    let data = readFile(file);
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            console.log(`${key}: ${data[key]}`);
        }
    }
}

 function addPost(file, post, desription) {
    existFile(file);
    let data = readFile(file);
    data[post] = description;
    let dataIn = JSON.stringify(data);
    fs.writeFile(file, dataIn, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('write success');
    })
 }

 function readFile(file) {
    let rezult;
    let data = fs.readFileSync(file, 'utf-8');
    if(data.toString() == '') {
        console.log(`empty ${file} file`);
    } else {
        let rez = JSON.parse(data);
        for (const key in rez) {
            let data = fs.readFileSync(file, 'utf-8');
            if(data.toString() == '') {
                console.log(`empty ${file} file`);
            } else {
                let rez = JSON.parse(data);
                rezult = rez;
            }   
        }
    }
    return rezult;
 }