var files;
var inputFile = document.querySelector('input[type=file]');
var fieldName = inputFile.name;
inputFile.addEventListener('change', function(evt) {
  files = evt.target.files;
});

var form = document.getElementById('form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var data = new FormData();
  data.append(fieldName, files[0]);

  axios.post('/api/fileupload', data)
    .then(function(response) {
      alert('File size: ' + response.data.fileSize);
    });
});
