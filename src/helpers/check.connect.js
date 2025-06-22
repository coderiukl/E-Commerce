'use strict'

const mongoose = require("mongoose")
const os = require('os')
const process = require('process')
const _SECONDS = 5000

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections::${numConnection}`)
}

// check over load
const checkOverload = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // Example maximum number connection base on number of cores
        console.log(`Active Connections: ${numConnection}`)
        console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`)

        const maxConnection = numCores * 5;
        if (numConnection > maxConnection) {
            console.log(`Connection overload detected!`)
        }
    }, _SECONDS) // Monitor every 5 seconds
}
module.exports = {
    countConnect,
    checkOverload
}