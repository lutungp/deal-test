export default {
    port : process.env.port,
    host: 'localhost',
    dbUrl: 'mongodb://localhost:27017/rest-api',
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQCKHfard+Sdat3hP5sfIR4ihepG/6rJNOjCkf0OR3XAfdE3OvDo
    Mn8UkniutRehfu4ZgIFtfPenW0Y+L2bLXMLoYhA5R++OWel6wrxgDB3H/8ZqL6Yo
    m4hDynxS205zl6AR4ZNPaxIdrQrcM8Hfo9S9DOQfy/w1qyDIe+JtgZodsQIDAQAB
    AoGBAIntaFNN9KD7gr6ZjWil4vko8I+cbEpoqvT7Y1HqLP5g5xiXpNLM8rlxmFEo
    CYQ+RLp06UuUm6CmdtxM7AO0C/MbnZ+qqqsmYJPQIvsB2acPYB43octY5+Ij6SGz
    Ec/OwWWV157oIfZhSq/zLfn/vkmiIy6WZzH9dJinLHFlHNmtAkEAwVYW3VDj6m92
    w+lf4Sk8HKnbDzsUkmTyAtM7NPSNZ0xAjOO+Sx6m69e0fqd3cBPJ2LBsZXAAs54n
    ZMHtUxamAwJBALbiGwfC9jzIqiXfyHfClpvPl8as3e2ghkMcvT64XCbFSnCNDGAL
    4LrJ29vd9QH8XHtgoUurFE6BSYPpOWVZSTsCQHYmGB7zufSgXWHoEnHU8ylJG9e4
    8R9tlP/o+juoX2mLDb+LxdS+TJ+/2Eu2J6VUUnubhQKQab1anxRR9qhaJOUCQBl6
    +T8kl8AySRqLyld9QhSlYMUqkqUoB2zUVT2m3Bf+xvdVf5LmNMJxm3NPwnIrYgtC
    lFaBmIuzkbWSSg/n178CQQCzNwuxs9n04gDk+q5T4ffpuZ22SWp1QUoKti7wJC7C
    D1zwWwPq3WJ8O81sO+m5rZaeNNe/XYgKEu2Ik76VmeP5
    -----END RSA PRIVATE KEY-----`,
}