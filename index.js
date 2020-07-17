var catalog = {
    mappers: {
        storage: {
            mongo: require('./mappers/storage/mongoMapper.js'),
            gridFS: require('./mappers/storage/gridFSMapper.js')
        },
        processors: {
            eval: require('./mappers/processors/eval.js'),
            vm: require('./mappers/processors/vmMapper.js'),
            vmBull: require('./mappers/processors/vmMapperBull.js')
        },
        observers: {
            interval: require('./mappers/observers/intervalMapper.js'),
            inMemory: require('./mappers/observers/inMemoryStream.js')
        }
    }
}

module.exports = catalog;