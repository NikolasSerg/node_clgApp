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
        addPost()
        break;
   

    default:
        console.log("don't know this command");
        break;
}
function existFile(fileName) {
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
}
function showList(file) {
    fs.readFile(file, (err, data) => {
        if (err) {
            if(err.code === 'ENOENT') {
                console.log('file dont exist');
            } else {
                console.log(`something wrong: ${err}`);
            }    
        } else {
            if(data.toString() == '') {
                console.log(`empty ${file} file`);
            } else {
                let rez = JSON.parse(data);
                console.log(rez);
                for (const key in rez) {
                    if (rez.hasOwnProperty(key)) {
                        console.log(`${key}: ${rez[key]}`);
                    }
                }
            }
        }
    }) 
}
 function addPost(file, post, desription) {
    existFile(file);

    
 }