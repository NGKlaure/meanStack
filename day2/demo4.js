var app = new function() {
    this.el = document.getElementById('departments');
    this.departments = [
        {name:'Math', location:'upstaris'}, 
        {name:'Biology', location:'1st building'}, 
        {name:'History', location:'2nd building'}, 
        {name:'English', location:'3rd building'}, 
        {name:'Computers', location:'4th building'}, 
        {name:'Account', location:'5th building'}, 
        {name:'Finance', location:'6th building'}, 
        {name:'Chemistry', location:'7th building'},
        {name:'Physics', location:'8th building'}, 
      ];
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'department';
      if (data) {
        if (data > 1) {
          name = 'departments';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.FetchAll = function() {
      var data = '';
      if (this.departments.length > 0) {
        for (i = 0; i < this.departments.length; i++) {
          data += '<tr>';
          data += '<td>' + this.departments[i].name + '</td>';
          data += '<td>' + this.departments[i].location + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
      this.Count(this.departments.length);
      return this.el.innerHTML = data;
    };
    this.Add = function () {
      el = document.getElementById('add-name');
      el2 = document.getElementById('add-location');
      // Get the value
      var department = el.value;
      var location = el2.value;
      if (department && location) {
        // Add the new value
        this.departments.push({name:department.trim(), location:location.trim()});
        // Reset input value
        el.value = '';
        el2.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
    this.Edit = function (item) {
      var el = document.getElementById('edit-name');
      var el2 = document.getElementById('edit-location');
      // Display value in the field
      el.value = this.departments[item].name;
      el2.value = this.departments[item].location;
      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        // Get value
        var department = el.value;
        var location = el2.value;
        if (department && location) {
          // Edit value
          self.departments.splice(item, 1, {name:department.trim(), location:location.trim()});
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
    this.Delete = function (item) {
      // Delete the current row
      this.departments.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
    
  }
  app.FetchAll();
  function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }var app = new function() {
      this.el = document.getElementById('departments');
      this.departments = ['Chemistry', 'Math', 'Theater', 'Religious Studies', 'Biology', 'Psychology', 'Visual Arts', 'Music', 'History'];
      this.locations = ['Texas', 'The Moon', 'Walmart', 'Syria', 'Downstairs', 'Third Floor', 'Seventh Floor', 'Help', 'Chicago'];
  
      this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'departments';
        if (data) {
          if (data == 1) {
            name = 'department';
          }
          el.innerHTML = data + ' ' + name ;
        } else {
          el.innerHTML = 'No ' + name;
        }
      };
      
      this.FetchAll = function() {
        var data = '';
        if (this.departments.length > 0) {
          for (i = 0; i < this.departments.length; i++) {
            data += '<tr>';
            data += '<td>' + this.departments[i] + '</td>';
            data += '<td>' + this.locations[i] + '</td>';
            data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
            data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
            data += '</tr>';
          }
        }
        this.Count(this.departments.length);
        return this.el.innerHTML = data;
      };
      this.Add = function () {
        el = document.getElementById('add-name');
        le = document.getElementById('add-location');
        // Get the value
        var department = el.value;
        var location = le.value;
        if (department && location) {
          // Add the new value
          this.departments.push(department.trim());
          this.locations.push(location.trim());
          // Reset input value
          el.value = '';
          le.value = '';
          // Dislay the new list
          this.FetchAll();
        }
      };
      this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        var le = document.getElementById('edit-location');
        // Display value in the field
        el.value = this.departments[item];
        le.value = this.locations[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
          // Get value
          var department = el.value;
          var location = le.value;
          if (department && location) {
            // Edit value
            self.departments.splice(item, 1, department.trim());
            self.locations.splice(item, 1, location.trim());
            // Display the new list
            self.FetchAll();
            // Hide fields
            CloseInput();
          }
        }
      };
      this.Delete = function (item) {
        // Delete the current row
        this.departments.splice(item, 1);
        this.locations.splice(item, 1);
        // Display the new list
        this.FetchAll();
      };
      
    }
    app.FetchAll();
    function CloseInput() {
      document.getElementById('spoiler').style.display = 'none';
    }
    