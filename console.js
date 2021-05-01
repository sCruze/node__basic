// console.log(process.argv)
// sergey@sergey-liks:~/all_project/backend/node/node-basic$ node console message=hello spec
//     [
//     '/home/sergey/.nvm/versions/node/v14.15.5/bin/node',
//         '/home/sergey/all_project/backend/node/node-basic/console',
//         'message=hello',
//         'spec'
//     ]


function consoleToJSON() {
    const c = {}

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=')

        c[arg[0]] = arg[1] ? arg[1] : true
    }

    return c
}


console.log(consoleToJSON())
