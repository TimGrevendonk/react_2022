import * as SQLite from "expo-sqlite";
// instruction to create db on init and open it on later iterations.
const db = SQLite.openDatabase("usa.db");
const version = 1;

export default class UsaDB {
  static dropTables(db) {
    db.transaction((tx) => {
      // first remove presidents then party, due to relations.
      tx.executeSql("DROP TABLE IF EXISTS president");
      tx.executeSql("DROP TABLE IF EXISTS party");
    });
  }

  static createTables(db) {
    db.transaction((tx) => {
      // first create the party and then the president, due to relations.
      tx.executeSql("CREATE TABLE party (id integer primary key, name text);");
      tx.executeSql(
        "CREATE TABLE president (id integer primary key AUTOINCREMENT, name text, term text, partyid integer, FOREIGN KEY(partyid) REFERENCES party(id));"
      );
    });
  }
  // first create the party and then the president, due to relations.
  static createParties(db) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO party (id, name) VALUES (1, 'Republican Party');"
      );
      tx.executeSql(
        "INSERT INTO party (id, name) VALUES (2, 'Democratic Party');"
      );
    });
  }
  // first create the party and then the president, due to relations.
  static createPresidents(db) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Roosevelt, Franklin Delano', '1933-1945', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Truman, Harry', '1945-1953', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Eisenhower, Dwight David', '1953-1961', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Kennedy, John Fitzgerald', '1961-1963', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Johnson, Lyndon Baines', '1963-1969', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Nixon, Richard Milhous', '1969-1974', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Ford, Gerald Rudolph', '1974-1977', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Carter, James Earl Jr.', '1977-1981', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Reagan, Ronald Wilson', '1981-1989', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Bush, George Herbert Walker', '1989-1993', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Clinton, William Jefferson', '1993-2001', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Bush, George Walker', '2001-2009', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Obama, Barack Hussein', '2009-2017', 2);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Trump, Donald John', '2017-2021', 1);"
      );
      tx.executeSql(
        "INSERT INTO president (name, term, partyid) VALUES ('Biden, Joseph Robinette', '2021-2025', 2);"
      );
    });
  }

  static getPresidentById(id) {
    return new Promise((resolve) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM president WHERE id = ?",
          [id],
          (tx, { rows }) => {
            resolve(rows._array[0]);
          }
        );
      });
    });
  }

  static getPresidents() {
    return new Promise((resolve) => {
      // create a promise
      db.transaction((tx) => {
        // within the transaction tx
        tx.executeSql(
          // execute the SELECT
          "SELECT pres.id, pres.name, pres.term, pa.name as party FROM president pres, party pa where pres.partyid = pa.id",
          [], // no parameters
          (tx, { rows }) => {
            // callback function where SELECT is EXECUTED
            resolve(rows._array); // fulfill the promise with the result
          }
        );
      });
    });
  }

  static updatePresident(president) {
    return new Promise((resolve) => {
      db.transaction((tx) => {
        tx.executeSql(
          // a questionmark binds to an argument from the arg array.
          "UPDATE president SET name=?, term=? where id=?",
          [president.name, president.term, president.id],
          (tx, results) => {
            if (results.rowsAffected == 0) {
              resolve(false);
            } else {
              resolve(true);
            }
          },
          // when the execution fails:
          // () => resolve(false)
          () => reject(false)
        );
      });
    });
  }

  static deletePresident(id) {
    return new Promise((resolve) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM president where id=?",
          [id],
          (tx, results) => {
            if (results.rowsAffected == 0) {
              resolve(false);
            } else {
              resolve(true);
            }
          },
          () => resolve(false)
        );
      });
    });
  }

  static insertPresident(president) {
    return new Promise((resolve) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO president (name, term) VALUES (?,?)",
          [president.name, president.term],
          (tx, results) => {
            if (results.rowsAffected == 0) {
              resolve(false);
            } else {
              resolve(true);
            }
          },
          () => resolve(false)
        );
      });
    });
  }

  static initDb() {
    // if (await this.newerVersionDB(db)) {

    // }
    this.dropTables(db);
    this.createTables(db);
    this.createParties(db);
    this.createPresidents(db);

    console.log("database created");
  }
}
