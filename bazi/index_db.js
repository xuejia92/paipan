(function() {
	var blockbusters = {
		title: 'James wins a Game',
		derector: 'shi',
		length: 120
	};
	var db;
	var request;
	var store;

	function createDatabase(dbName) {
		request = indexdDB.open(dbName, 3);
		request.onsuccess = function(event) {
			alert('success open the database!');
			db = event.target.result;
			var transaction = db.transaction(["blockbusters"], "readwrite");
			var objectStore = transaction.objectStore("blockbusters");
			objectStore.add(blockbusters);
		};
		request.onerror = function(event) {
			alert("fail to open database :: " + event.target.message);
		};

		request.onupgradeneeded = function(event) {
			alert('version changed!');
			db = event.target.result;
			store = db.createObjectStore("blockbusters",
										 {
										 	keyPath: "title",
										 	autoIncrement: false
										 });
		};
	}

	function deletedatabase(dbName) {
		try {
			indexdDB.deleteDatabase(dbName);
		} catch(e) {
			alert(e.target.getMessage);
		}
	}
})();



/*------------------------------------*/


window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.");
}
const employeeData = [
    { id: "00-01", name: "james-1", age: 31, email: "james@nba.com" },
    { id: "00-02", name: "curry-2", age: 32, email: "curry@nba.com" },
    { id: "00-03", name: "durant-3", age: 33, email: "james@acadine.com" },
    { id: "00-04", name: "wade-4", age: 34, email: "durant@acadine.com" }
 ];
var db;
var request = window.indexedDB.open("newDatabase", 1);
request.onerror = function(event) {
    console.log("error: open failed");
 };
request.onsuccess = function(event) {
    db = request.result;
    console.log("open-->success: "+ db);
    console.log(db);
};
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("employee", {keyPath: "name"});
    for (var i in employeeData) {
       alert(employeeData[i].name);
       objectStore.add(employeeData[i]);
    }
    console.log('---------------onupgradeneeded--------add-----');
    console.log(db);
};
 
function read(readKey) {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var request = objectStore.get(readKey);
    request.onerror = function(event) {
       alert(readKey + "Unable to retrieve data from database!");
    };
    request.onsuccess = function(event) {
       if(request.result) {
          alert("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
       } else {
          alert(readKey + " Couldn't be found in your database!");
       }
    };
 }
 

function readAll() {
    var objectStore = db.transaction("employee").objectStore("employee");
    objectStore.openCursor().onsuccess = function(event) {
       var cursor = event.target.result;
       console.log(cursor.value);
       if (cursor) {
          alert("key is: " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
          cursor.continue();
       } else {
          alert("No more entries!");
       }
    };
 }
 readAll();
function add(myId, myName, myAge, myEmail) {
    var request = db.transaction(["employee"], "readwrite").objectStore("employee").add({
                                                                                           id: myId,
                                                                                           name: myName,
                                                                                           age: myAge,
                                                                                           email: myEmail
                                                                                        });
    request.onsuccess = function(event) {
       alert(myName + " has been added to your database.");
    };
    request.onerror = function(event) {
       alert("Unable to add data\r\n" + myName + "Aready exist in your database!");
    }
 }

function remove(deleteKey) {
    var request = db.transaction(["employee"], "readwrite").objectStore("employee").delete(deleteKey);
    request.onsuccess = function(event) {
       alert(deleteKey + " has been removed from your database.");
    };
 }
