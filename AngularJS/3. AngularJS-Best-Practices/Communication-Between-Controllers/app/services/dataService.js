app.factory('dataService', function ($resource, $http) {
    $http.defaults.headers.common['Authorization'] = 'Bearer TTRgqP9NRjJYN1iRTAZz_dJZyyMomr4LZ6lY-F_luurxj9Xctyf1ZBvvzgjrLTNwp5rNYkbXTL1vCvoYwwSmRNVfG6uAO8MZw5BKtYEtBt8S9u2oKNJ0qFDq-WSQpCbQuDqeaMO-Ajm_Ff42ZAIVxP1UJYze5FYZRIY08P9rmcY81qbNYtRpFV6MqFytO5wr-jYQhO95wzKdpyWMQfSOCK09XeZEcZPOdDbed924GWjhwDao4hlZIpbhCmKJ5YZwrzp0XF810ZISMWfU9fFNNf0-2_Qm3rugFsePrDFI40raCP2QK1NvqAMombrzdWicpWOjNv-WSvXnw3ucmAbsjVOoJUkkLQiiSa3TSTw0023X3WCWY9PVY5fDxCJemh0152G7AOKVe_qWaxBhlahbvcap82AstMP3V_lm1ylJPBk8Lj7rN23REMUzHSSx9-mckUWJpwkMdmettcAqZdxLxHZ8n7savwzA21jm94l8O-bITqj9g-swpPyPkTTIo7rF';
    var resource = $resource('http://localhost:49399/api/users/John/wall?PageSize=10');

    function getWall() {
        return resource.query();
    }

    function getWallWithPageSize(pageSize) {
        return $http.get('http://localhost:49399/api/users/John/wall?PageSize=' + pageSize);
    }

    return {
        getWall: getWall,
        getWallWithPageSize: getWallWithPageSize
    }
});