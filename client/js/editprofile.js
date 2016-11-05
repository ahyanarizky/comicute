function editprofile() {
  document.getElementById("Name").innerHTML = `
    <input type='text' name='name' id='Name' value=' ${document.getElementById("Name").innerHTML}' class='form-control'>`;
  document.getElementById("username").innerHTML = `
    <input type='text' name='username' id='username' value=' ${document.getElementById("username").innerHTML}' class='form-control'>`;
  document.getElementById("shortbio").innerHTML = `
    <textarea name='shortbio' id='shortbio' class='form-control'>${document.getElementById("shortbio").innerHTML} </textarea>`;
  document.getElementById("bday").innerHTML = `
    <input type='date' name='bday' id='bday' value=' ${document.getElementById("bday").innerHTML}' class='form-control'>`;
  document.getElementById("editProfileBtn").innerHTML = `
    <button type='button' name='saveprofile' id='saveprofile' class='col-sm-12 btn btn-sm btn-success' onclick='saveprofile()'><i class='icon-save'></i> Save</button>`;
}
