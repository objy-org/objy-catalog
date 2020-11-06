var catalog = {
    mappers: {
        storage: {
            mongo: require('./mappers/storage/mongoDB.js'),
            //gridFS: require('./mappers/storage/gridFS.js')
        },
        processors: {
            eval: require('./mappers/processors/eval.js'),
            vm: require('./mappers/processors/vm.js'),
            vmBull: require('./mappers/processors/vmBull.js')
        },
        observers: {
            interval: require('./mappers/observers/interval.js'),
            inMemory: require('./mappers/observers/inMemoryStream.js')
        }
    }
}

module.exports = catalog;