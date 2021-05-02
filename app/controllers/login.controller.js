'use strict';

const login = (request, response) => {
    response.status(200).json(
    {
        result: true,
        token: "iuyofiuyrewiouyrioewuyrei*&^*^**", 
        userMainId: 1,
        hrMainId: 1,
    });
}

module.exports = login;