# promises

## Fetch Examples

### Example 1

```javascript
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'User 1',
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log('error'));
```

### Example 2

```javascript
function wait(ms) {
  return new Promise(function (resolve, reject) {
    if (ms <= 0) {
      reject(new Error('Cannot wait 0 seconds or less than 0'));
    }

    setTimeout(function () {
      resolve();
    }, ms);
  });
}
```

### Example 3

```javascript
function wait(ms) {
  return new Promise(function (resolve, reject) {
    if (ms <= 0) {
      reject(new Error('Cannot wait negative or 0 milliseconds!'));
      return;
    }

    setTimeout(function () {
      resolve();
    }, ms);
  });
}

wait(1000)
  .then(function () {
    console.log('Waited 1 second!');
  })
  .catch(function (error) {
    console.log('There was an error waiting: ');
    console.log(error.message);
  });
```

### Example 4

```javascript
const mysql = require('mysql');

function connectToDatabase(config) {
  return new Promise(function (resolve, reject) {
    const connection = mysql.createConnection(config);

    connection.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(connection);
    });
  });
}

connectToDatabase({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatroom',
})
  .then(function (conn) {
    console.log('Connection succcessful!');
    conn.end();
  })
  .catch(function (err) {
    console.log('There was an error connecting to the DB!');
    console.log(err.message);
  });
```

### Example 5

```javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatroom',
});

connection.connect(function (err) {
  if (err) {
    console.log('There was an error');
    return;
  }

  console.log('Connection successful');
  connection.end();
});
```

### Example 6

```javascript
function divide(a, b) {
  return new Promise(function (resolve, reject) {
    if (b === 0) {
      reject(new Error('Cannot divide by 0!'));
      return;
    }

    resolve(a / b);
  });
}

divide(10, 2)
  .then(function (result) {
    console.log('Division Success: ' + result);
  })
  .catch(function (error) {
    console.log('Error dividing:');
    console.log(error);
  });
```
